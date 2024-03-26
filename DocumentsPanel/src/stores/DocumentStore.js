import { makeObservable, observable, action, runInAction } from 'mobx';

class DocumentsStore {
  documents = [];
  isLoading = false;

  constructor() {
    makeObservable(this, {
      documents: observable,
      isLoading: observable,
      fetchDocuments: action
    });
  }

  fetchDocuments = async () => {
    this.isLoading = true;
    try {
      const response = await fetch('http://localhost:3000/api/v1/documents');
      const data = await response.json();
      runInAction(() => {
        this.documents = data;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
      });
      console.error("Failed to fetch documents:", error);
    }
  };
}

export default DocumentsStore;
