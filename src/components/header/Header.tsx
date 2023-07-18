import React from "react";
import "./header.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import GridViewIcon from "@mui/icons-material/GridView";
import CropFreeIcon from "@mui/icons-material/CropFree";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <DashboardIcon />
      </div>
      <div className="header__links">
        <div className="header__links--icons">
          <Badge badgeContent={4} color="primary">
            <NotificationsIcon />
          </Badge>
          <SearchIcon />
          <GridViewIcon />
          <CropFreeIcon />
          <SettingsIcon />
        </div>
        <Avatar
          alt="Cindy Baker"
          className="header__avatar"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
        />
      </div>
    </div>
  );
};

export default Header;
