import React, { useEffect, useState } from "react";
import { HiChatAlt } from "react-icons/hi";
import { ImUsers } from "react-icons/im";
import { Tooltip } from "react-tooltip";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../../features/themeSlice";
import "./redux.css";
const TopNav = (props) => {
  const { hideUser, handleUserClick } = props;
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.themeKey);
  //   useEffect(() => {
  //     const theme = localStorage.getItem("DarkMode");
  //     if (theme === "true") {
  //       setMode(true);
  //     } else {
  //       setMode(false);
  //       localStorage.setItem("DarkMode", "false");
  //     }
  //   }, []);

  //   const handleModeCLick = () => {
  //     const theme = localStorage.getItem("DarkMode");
  //     if (theme === "true") {
  //       localStorage.setItem("DarkMode", "false");
  //     } else {
  //       localStorage.setItem("DarkMode", "true");
  //     }
  //     setMode(!mode);
  //   };
  return (
    <section className={"align-c d-flex " + (mode ? "" : "dark")}>
      <div className={"relative children_nav " + (mode ? "" : "dark")}>
        <div className={"maincontent-title " + (mode ? "" : "dark")}>
          <div>
            <HiChatAlt className="big-type-svg" fill="#b5bac1" />
          </div>
          <span
            data-tooltip-id="chat-timestamp-tooltips"
            data-tooltip-content="hi"
          >
            General
          </span>
        </div>
        <div className="toolbar_nav">
          <div
            id="chat-nav-tooltip"
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {mode && (
              <MdSunny
                className={"big-type-svg " + (mode ? "" : "dd")}
                fill="#b5bac1"
              />
            )}
            {!mode && (
              <BsFillMoonStarsFill className="big-type-svg" fill="#b5bac1" />
            )}
          </div>
          <div
            id="chat-nav-tooltip"
            onClick={handleUserClick}
            data-tooltip-content={
              hideUser ? "Show Member List" : "Hide Member List"
            }
          >
            <ImUsers className="big-type-svg" fill="#b5bac1" />
          </div>
        </div>
        <Tooltip
          anchorSelect="#chat-nav-tooltip"
          id="tooltip"
          style={{ fontSize: "13px" }}
          place="top"
          render={({ content }) => <span>{content}</span>}
        />
      </div>
    </section>
  );
};

export default TopNav;
