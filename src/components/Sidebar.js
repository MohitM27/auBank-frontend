import React, { useMemo } from "react";

// Functional component for menu item
const MenuItem = ({ title, icon, onClick }) => (
  <li className="nav-item">
    <a onClick={onClick} className="nav-link">
      <i className={icon}></i>
      <p>{title}</p>
    </a>
  </li>
);

const Sidebar = ({ theme, setTheme }) => {
  // Memoized menu items
  const menuItems = useMemo(
    () => [
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
        icon: "nav-icon fa fa-gear",
      },
      {
        title: `${theme ? "Light" : "Dark"} Theme`,
        icon: theme
          ? "nav-icon fa-regular fa-sun"
          : "nav-icon fa-regular fa-moon",
        onClick: () => setTheme(!theme),
      },
    ],
    [theme, setTheme]
  );

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
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
