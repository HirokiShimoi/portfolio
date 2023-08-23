import React, {useState} from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, useTheme, useMediaQuery  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    return (
        <AppBar position="static" className="header" style={{position: "absolute", backgroundColor: 'transparent',boxShadow: 'none'}}> 
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography variant="h5">
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
                <MenuItem onClick={handleMenuClose} >ABOUT</MenuItem>
                <MenuItem onClick={handleMenuClose}>WORKS</MenuItem>
                <MenuItem onClick={handleMenuClose}>CONTACT</MenuItem>
              </Menu>
            </>
          ) : (
            <div>
              <Button color="inherit" style={{ fontSize: '1.5rem' }}>ABOUT</Button>
              <Button color="inherit" style={{ fontSize: '1.5rem' }}>WORKS</Button>
              <Button color="inherit" style={{ fontSize: '1.5rem' }}>CONTACT</Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Header;
  