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
      <AppBar style={{ zIndex: theme.zIndex.drawer + 1 }} position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {currentPage}
          </Typography>
          <Button onClick={goTo('/login')} color="inherit">Login</Button>
          <Button onClick={goTo('/signup')} color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar