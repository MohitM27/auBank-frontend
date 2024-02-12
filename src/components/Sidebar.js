import React from "react";

const Sidebar = ({ theme, setTheme }) => {
  // Functional component for menu item
  const MenuItem = ({ title, icon, onClick }) => (
    <li className="nav-item">
      <a href="#" onClick={onClick} className="nav-link">
        <i className={icon}></i>
        <p>{title}</p>
      </a>
    </li>
  );

  // Define menu items
  const menuItems = [
    {
      title: "Sales Overview",
      icon: "nav-icon fa fa-desktop",
    },
    {
      title: "Stores",
      icon: "nav-icon fa fa-shopping-bag",
    },
    {
      title: "Notifications",
      icon: "nav-icon far fa-bell",
    },
    {
      title: "Settings",
      icon: "nav-icon far fa-sun",
    },
    {
      title: `${theme ? "Light" : "Dark"} Theme`,
      icon: theme ? "nav-icon far fa-lightbulb" : "nav-icon far fa-moon",
      onClick: () => setTheme(!theme),
    },
  ];

  return (
    <aside className={`main-sidebar sidebar-${theme ? "light" : "dark"}-primary elevation-4`}>
      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {menuItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
