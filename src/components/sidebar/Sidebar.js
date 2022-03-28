import React from "react";
import "./_sidebar.scss";
import { MdSubscriptions, MdExitToApp, MdHome } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <nav
        className={sidebar ? "sidebar open" : "sidebar"}
        onClick={() => handleToggleSidebar(false)}>
        <Link to="/">
          <li>
            <MdHome size={23} />
            <span>Home</span>
          </li>
        </Link>
        <Link to="/feed/subscriptions">
          <li>
            <MdSubscriptions size={23} />
            <span>Subscriptions</span>
          </li>
        </Link>

        <hr />

        <li onClick={logoutHandler}>
          <MdExitToApp size={23} />
          <span>Log Out</span>
        </li>

        <hr />
      </nav>
    </>
  );
};

export default Sidebar;
