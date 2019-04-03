import React from 'react'

const NavBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu>
          <li className="menu-text">(P&Q) Internal Plant Tracker</li>
          <li>
            <a href="/">Plant</a>
            <ul className="menu vertical">
              <li>
                <a href="/">View All Hired Plant</a>
              </li>
              <li>
                <a href="/">Add New Plant Item</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Ledgers</a>
            <ul className="menu vertical">
              <li>
                <a href="/">View All Ledgers</a>
              </li>
              <li>
                <a href="/">Add New Ledger</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Commercial</a>
            <ul className="menu vertical">
              <li>
                <a href="/">View Plant Costs</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Users</a>
            <ul className="menu vertical">
              <li>
                <a href="/">View All Users</a>
              </li>
              <li>
                <a href="/">Add New User</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
