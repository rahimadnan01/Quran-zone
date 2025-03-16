import React, { useEffect, useState } from "react";
import { Card, Button, Avatar } from "@mui/material";
import { useAuth } from "../../context/Auth.jsx";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { User } from "lucide-react";
import DashboardCourses from "../UI/DashboardCourses.jsx";
const UserProfile = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { user, logout } = useAuth();
  const logoutUser = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1/users/logout`
      );
      logout();
      console.log("User logged out successfully", response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div
      className="font-poppins"
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button className="font-poppins" variant="contained">
        {user.username}
      </Button>

      {isHovered && (
        <Card
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "220px",
            padding: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            background: "white",
            borderRadius: "8px",
            zIndex: 10,
          }}
        >
          <Avatar style={{ width: 50, height: 50, marginBottom: 10 }} />
          <h4>{user.username}</h4>
          <NavLink to={"/dashboard"}>
            <p style={{ color: "blue", cursor: "pointer" }}>View Profile</p>
          </NavLink>
          <hr />
          <NavLink to={"/dashboard"}>
            <p className="cursor-pointer">🏠 My Dashboard</p>
          </NavLink>

          <NavLink to={"/User-account"}>
            <p className="cursor-pointer flex">
              <User className="w-6 h-6 text-gray-600" />
              Account details
            </p>
          </NavLink>
          <Button
            variant="contained"
            color="error"
            fullWidth
            className="cursor-pointer"
            style={{ marginTop: 10 }}
            onClick={logoutUser}
          >
            Log Out
          </Button>
        </Card>
      )}
    </div>
  );
};

export default UserProfile;
