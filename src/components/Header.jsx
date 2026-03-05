import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, IconButton, Drawer, 
  List, ListItem, ListItemButton, ListItemText, Box, Container, 
  alpha 
} from '@mui/material';
import { Menu, X, Zap, School } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Bosh sahifa', path: '/' },
  { label: 'E’lonlar', path: '/announcements' },
  { label: 'Galereya', path: '/images' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{
        // Doimiy blur va shaffof fon
        background: 'rgba(2, 6, 23, 0.45)', 
        backdropFilter: 'blur(12px) saturate(180%)',
        WebkitBackdropFilter: 'blur(12px) saturate(180%)', // Safari uchun
        borderBottom: `1px solid ${alpha('#4cc9f0', 0.15)}`,
        transition: 'all 0.3s ease',
        top: 0,
        zIndex: 1100,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', height: { xs: 70, md: 85 } }}>
          
          {/* LOGO */}
          <Box 
            component={Link} 
            to="/" 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1.5, 
              textDecoration: 'none', 
              color: 'inherit' 
            }}
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              style={{
                background: 'linear-gradient(135deg, #4361ee, #4cc9f0)',
                padding: '10px',
                borderRadius: '14px',
                display: 'flex',
                boxShadow: '0 4px 15px rgba(67, 97, 238, 0.4)'
              }}
            >
              <Zap size={22} color="white" fill="white" />
            </motion.div>
            
            <Typography 
              variant="h6" 
              fontWeight="900" 
              sx={{ 
                letterSpacing: 1.5,
                background: 'linear-gradient(90deg, #fff, #4cc9f0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.1rem', md: '1.4rem' }
              }}
            >
              13-MAKTAB
            </Typography>
          </Box>

          {/* DESKTOP MENU */}
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              gap: 1,
              p: 0.6,
              borderRadius: '50px',
              bgcolor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: '50px',
                    fontWeight: 700,
                    textTransform: 'none',
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.7)',
                    background: isActive 
                      ? 'linear-gradient(135deg, #4361ee, #4cc9f0)' 
                      : 'transparent',
                    transition: '0.3s',
                    '&:hover': {
                      color: '#fff',
                      bgcolor: isActive ? '' : 'rgba(255,255,255,0.1)',
                    }
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* MOBILE TOGGLE */}
          <IconButton 
            sx={{ 
              display: { md: 'none' }, 
              color: '#fff',
              bgcolor: 'rgba(255, 255, 255, 0.08)'
            }} 
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </IconButton>

        </Toolbar>
      </Container>

      {/* MOBILE DRAWER */}
      <Drawer 
        anchor="right" 
        open={mobileOpen} 
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: 'rgba(2, 6, 23, 0.95)',
            backdropFilter: 'blur(10px)',
            color: '#fff',
            borderLeft: '1px solid rgba(76, 201, 240, 0.2)'
          }
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
            <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#fff' }}>
              <X size={28} />
            </IconButton>
          </Box>
          
          <List>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <ListItem key={item.path} disablePadding sx={{ mb: 1.5 }}>
                  <ListItemButton 
                    component={Link} 
                    to={item.path} 
                    onClick={() => setMobileOpen(false)}
                    sx={{
                      borderRadius: '12px',
                      bgcolor: isActive ? alpha('#4361ee', 0.15) : 'transparent',
                      border: isActive ? `1px solid ${alpha('#4361ee', 0.4)}` : '1px solid transparent',
                    }}
                  >
                    <ListItemText 
                      primary={item.label} 
                      primaryTypographyProps={{ 
                        fontWeight: isActive ? 800 : 500,
                        color: isActive ? '#4cc9f0' : '#fff'
                      }} 
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;