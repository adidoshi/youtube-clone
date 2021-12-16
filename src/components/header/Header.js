import React, { useState } from "react";
import "./_header.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${input}`);
  };

  const user = useSelector((state) => state.auth?.user);
  return (
    <div className=" header">
      <FaBars
        className="header_menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <img
        src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt="..."
        className="header_logo"
      />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header_icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={user?.photoURL} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
