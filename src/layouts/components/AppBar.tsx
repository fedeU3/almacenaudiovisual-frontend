import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button, useTheme } from '@mui/material'

type NavBarProps = {
  goTo: (path: string) => () => void
  currentPage: string
}

const NavBar: React.FC<NavBarProps> = ({
  goTo,
  currentPage,
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#2C3E50" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {currentPage}
            </Typography>
            <Box component="img" src="/LogoFondo.svg" alt="Logo Almacén" sx={{ height: 40, mr: 2 }} />
          </Box>
          <Box>
            <Button variant="contained" sx={{ backgroundColor: "#B0BEC5", color: "#000", border: '1px solid #000', mr: 1 }}>
              Alquilar Equipo
            </Button>
            <Button onClick={goTo('/login')} color="inherit" sx={{ backgroundColor: "#FF7043", border: '1px solid #080808', color: "#080808" }}>
              Login
            </Button>
            <Button onClick={goTo('/signup')} variant="outlined" sx={{ ml: 1, backgroundColor: "#080808", borderColor: "#FF7043", color: "#FF7043", border: '1px solid #FF7043' }}>
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar

