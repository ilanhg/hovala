import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { AuthContext } from '../context/authContext';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { log } from 'console';
  
const pages: string[] = ['Products', 'Pricing', 'About'];
const settings: string[] = ['Profile', 'Account', 'Statistics', 'Logout'];


function ResponsiveAppBar() {
  const auth = React.useContext(AuthContext)
  console.log(auth.isLoggedIn);

  
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<any>(null);
  
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget); 
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget); 
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    
  };
  const handlePageClick = (page:any)=>{
    switch (page) {
      case 'Products':
        navigate('Profile')
        break;
      case 'Pricing':
        navigate('Pricing')
        break;
      case 'About':
        navigate('/About')
        break;
      default:
        break;
    }
    handleCloseNavMenu();
  }
  
  const handleCloseUserMenu = () => {
   setAnchorElUser(null);
     
  };
  const handleSettingClick = (setting:any) => {
    switch (setting) {
      case 'Profile':
        navigate('Profile')
        break;
      case 'Account':
        navigate('Account')
        break;
      case 'Statistics':
        navigate('/Statistics')
        break;
      case 'Logout':
        navigate('/login')
        break;
      default:
        break;
    }
    handleCloseUserMenu();
  };
  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalShippingIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Hovala
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={()=>handlePageClick(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              )) }
            </Menu>
          </Box>
          <LocalShippingIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Hovala
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>handlePageClick(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Badge badgeContent={5} color="secondary" sx={{mr:2}}>
      <MailIcon color="action" />
    </Badge>
     
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
               {auth.isLoggedIn ? 
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
                    <IconButton sx={{ color: "white" }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton >
              </IconButton>:<Button color="inherit" onClick={()=>navigate("/login")} >Login</Button>}
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              { settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleSettingClick(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            
              
            </Menu> 
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
