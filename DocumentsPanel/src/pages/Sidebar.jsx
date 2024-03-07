import React from 'react'
import { Link } from 'react-router-dom'
import 
{BsFillEnvelopePaperFill, BsGrid1X2Fill, BsFillArchiveFill ,BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsFillEnvelopePaperFill  className='icon_header'/> DMS
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <Link to="/" className='sidebar-list-item-link'>
                <li className='sidebar-list-item'>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </li>
            </Link>
            <Link to="/documents" className='sidebar-list-item-link'>
                <li className='sidebar-list-item'>
                    <BsFillArchiveFill className='icon'/> Documents               
                </li>
            </Link>
            <Link to="/clients" className='sidebar-list-item-link'>
                <li className='sidebar-list-item'>
                    <BsPeopleFill className='icon'/> Clients               
                </li>
                </Link>

        </ul>
    </aside>
  )
}

export default Sidebar