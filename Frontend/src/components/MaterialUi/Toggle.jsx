import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ColorToggleButton({ setRole }) {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);

      if (newAlignment === "web") setRole("student");
      if (newAlignment === "android") setRole("teacher");
      if (newAlignment === "ios") setRole("admin");
    }
  };

  return (
    <ToggleButtonGroup
      color="secondary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web">Student</ToggleButton>
      <ToggleButton value="android">Teacher</ToggleButton>
      <ToggleButton value="ios">Admin</ToggleButton>
    </ToggleButtonGroup>
  );
}
