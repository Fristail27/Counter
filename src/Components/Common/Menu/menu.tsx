import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Menu as MenuIcon } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const SimpleMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const linkToTwoDisplays = () => {
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          component={NavLink}
          to="/TwoDisplays"
          onClick={linkToTwoDisplays}
        >
          Two Displays
        </MenuItem>
        <MenuItem component={NavLink} to="/OneDisplay" onClick={handleClose}>
          One Display
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SimpleMenu;
