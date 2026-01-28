import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { Link } from 'react-router-dom'
import Logo from '../assets/maktab.png'

const navItems = [
  { label: 'Images', path: '/images' },
  { label: 'Announcements', path: '/announcements' }
]

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const openDrawer = () => setMobileOpen(true)
  const closeDrawer = () => setMobileOpen(false)

  const drawer = (
    <Box sx={{ width: 280 }}>
      {/* Drawer header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img width={36} height={36} src={Logo} alt="Logo" />
          <Typography fontWeight={600}>13-maktab</Typography>
        </Box>

        {/* Close button */}
        <IconButton onClick={closeDrawer}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton component={Link} to={item.path} onClick={closeDrawer}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={3}>
        <Toolbar>
          {/* Logo + 13-maktab (LEFT) */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <img width={45} height={45} src={Logo} alt="Logo" />
            <Typography fontWeight={700}>13-maktab</Typography>
          </Box>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop navigation */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                color="inherit"
                component={Link}
                to={item.path}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile menu icon (RIGHT) */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={openDrawer}
            sx={{ display: { xs: 'block', md: 'none' }, ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* RIGHT Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={closeDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default Header
