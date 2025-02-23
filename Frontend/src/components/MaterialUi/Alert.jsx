import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import { useState } from "react";
export default function ActionAlerts() {
  const [open, setOpen] = useState(true);
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {open && (
        <Alert
          severity="success"
          onClose={() => {
            setOpen(false);
          }}
        >
          Welcome! Create your account today and unlock a seamless, enriching
          experience. Already registered?{" "}
          <span>
            <NavLink to="/login">.Log in here</NavLink>
          </span>
        </Alert>
      )}
    </Stack>
  );
}
