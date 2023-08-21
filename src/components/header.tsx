import React, {useState} from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, useTheme, useMediaQuery  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    return (
        <AppBar position="static">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">
            PORTFOLIO
          </Typography>
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>ABOUT</MenuItem>
                <MenuItem onClick={handleMenuClose}>WORKS</MenuItem>
                <MenuItem onClick={handleMenuClose}>CONTACT</MenuItem>
              </Menu>
            </>
          ) : (
            <div>
              <Button color="inherit">ABOUT</Button>
              <Button color="inherit">WORKS</Button>
              <Button color="inherit">CONTACT</Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Header;
  