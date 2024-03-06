import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.css";

const data1 = [
  {
    "type": "FINANCIAL DOCUMENTS",
    "color": "#0088FE" 
  },
  {
    "type": "TEHNICAL DOCUMENTS",
    "color": "#00C49F"
  },
  {
    "type": "EDUCATIONAL DOCUMENTS",
    "color": "#FFBB28"
  },
  {
    "type": "OFFICIAL DOCUMENTS",
    "color": "#FF8042"
  }
]

const PieChartBox = ({documents}) => {
  // Dodali smo novi ključ 'color' u svaki dokument koristeći podatke iz data1
  const documentsWithColor = documents.map(doc => ({
    ...doc,
    color: data1.find(item => item.type === doc.type)?.color || "#000" // Defaultna boja ako se ne podudara tip
  }));

  return (
    <div className="pieChartBox">
      <h1>Documents by type</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={documentsWithColor} // Koristimo dokumente s dodatnim bojama
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="count"
            >
              {documentsWithColor.map((item, index) => (
                <Cell key={index} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data1.map((item) => (
          <div className="option" key={item.type}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.type}</span>
            </div>
            <span>{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
