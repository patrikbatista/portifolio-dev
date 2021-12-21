import React from 'react';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Link,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import headerPhoto from '../images/headerPhoto.jpeg';

const pages = [
  ['Inicio', '#root'],
  ['Sobre', '#about'],
  ['Projetos', '#projects'],
];

const settings = [
  ['LinkedIn', 'https://www.linkedin.com/in/patrik-batista/'],
  ['GitHub', 'https://github.com/patrikbatista'],
  ['Email', 'mailto:pcr_batista@hotmail.com'],
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const lint = true;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      //
      sx={ {
        backgroundColor: 'rgba(156, 156, 156, 0.80)',
      } }
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={ { mr: 2, display: { xs: 'none', md: 'flex' } } }
          >
            Portifólio
          </Typography>

          <Box sx={ { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }>
            <IconButton
              size="large"
              aria-label="seções da página"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={ handleOpenNavMenu }
              color="inherit"
            >
              {lint && <MenuIcon />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={ anchorElNav }
              anchorOrigin={ {
                vertical: 'bottom',
                horizontal: 'left',
              } }
              keepMounted
              transformOrigin={ {
                vertical: 'top',
                horizontal: 'left',
              } }
              open={ Boolean(anchorElNav) }
              onClose={ handleCloseNavMenu }
              sx={ {
                display: { xs: 'block', md: 'none' },
              } }
            >
              {pages.map(([section, link], index) => (
                <MenuItem key={ index } onClick={ handleCloseNavMenu }>
                  <Link href={ link } underline="none" color="inherit">{section}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={ { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }
          >
            Portifólio
          </Typography>
          <Box sx={ { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }>
            {pages.map(([section, link], index) => (
              <Button
                key={ index }
                onClick={ handleCloseNavMenu }
                sx={ { my: 2, color: 'black', display: 'block' } }
              >
                <Link href={ link } underline="none" color="inherit">{section}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={ { flexGrow: 0 } }>
            <Tooltip title="Contatos">
              {lint
              && (
                <IconButton onClick={ handleOpenUserMenu } sx={ { p: 0 } }>
                  <Avatar alt="Patrik avatar" src={ headerPhoto } />
                </IconButton>)}
            </Tooltip>
            <Menu
              sx={ { mt: '45px' } }
              id="menu-appbar"
              anchorEl={ anchorElUser }
              anchorOrigin={ {
                vertical: 'top',
                horizontal: 'right',
              } }
              keepMounted
              transformOrigin={ {
                vertical: 'top',
                horizontal: 'right',
              } }
              open={ Boolean(anchorElUser) }
              onClose={ handleCloseUserMenu }
            >
              {settings.map(([network, link], index) => (
                <MenuItem key={ index } onClick={ handleCloseNavMenu }>
                  <Link
                    href={ link }
                    target="_blank"
                    rel="noreferrer"
                    underline="none"
                    color="inherit"
                  >
                    {network}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
