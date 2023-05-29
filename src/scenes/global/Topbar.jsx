import { Box, Button, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import HomeIcon from "@mui/icons-material/Home";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import GroupIcon from "@mui/icons-material/Group";
import { useState } from "react";
import SendToogle from "../sendToggle/sendToogle";
import ThirdToogle from "../thirdToggle.jsx/thirdToggle";
import LastToogle from "../lastToogle";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [showToggleMEnu, setShowToggleMenu] = useState(true);
  const [showToggleMenu2, setShowToggleMenu2] = useState(false);
  const [showToggleMenu3, setShowToggleMenu3] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        position: "relative",
        marginTop: "10px",
      }}
    >
      <Box sx={{ display: "inline-block", float: "right" }} p={2}>
        {/* SEARCH BAR */}
        {/* <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box> */}

        {/* ICONS */}
        <Box display="flex">
          <IconButton  onClick={() => setShowToggleMenu(!showToggleMEnu)}>
            <GroupIcon />
          </IconButton>
          <IconButton onClick={() => setShowToggleMenu2(!showToggleMenu2)}>
            <HomeIcon />
          </IconButton>
          <IconButton onClick={() => setShowToggleMenu3(!showToggleMenu3)}>
            <SettingsOutlinedIcon />
          </IconButton>
        </Box>
        {showToggleMEnu && <SendToogle />}
        {showToggleMenu2 && <LastToogle />}
        {showToggleMenu3 && <ThirdToogle />}
      </Box>
    </Box>
  );
};

export default Topbar;
