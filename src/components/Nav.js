import React from "react";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "../css/nav.css";

function Nav() {
  return (
    <div>
      <nav className="nav">
        <b className="beyonic">beyonic</b>
        <ul className="list">
          <li className="list-items active">
            <a href="#" className="links active">
              <i>
                <HomeTwoToneIcon />
              </i>
              Dashboard
            </a>
          </li>
          <li className="list-items">
            <a href="#" className="links">
              <i>
                <MonetizationOnOutlinedIcon />
              </i>
              Balance
            </a>
          </li>
          <li className="list-items">
            <a href="#" className="links">
              <i>
                <CompareArrowsIcon />
              </i>
              Transactions
            </a>
          </li>
          <li className="list-items">
            <a href="#" className="links">
              <i>
                <CircleOutlinedIcon />
              </i>
              Organizantion
            </a>
          </li>
          <li className="list-items">
            <a href="#" className="links">
              <i>
                <GroupsOutlinedIcon />
              </i>
              Groups
            </a>
          </li>
          <li className="list-items">
            <a href="#" className="links">
              <i>
                <LanguageOutlinedIcon />
              </i>
              Zones
            </a>
          </li>
          <li className="list-items">
            <a href="#" className="links">
              <i>
                <SettingsOutlinedIcon />
              </i>
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
