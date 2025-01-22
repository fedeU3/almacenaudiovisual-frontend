
import React from 'react'
import NavBar from '../components/AppBar'
import SideDrawer from '../components/SideDrawer'
import { Box } from '@mui/material'

type AppLayoutProps = {
  children: React.ReactNode,
  currentPage: string,
  goTo: (path: string) => () => void
}

const AppLayout: React.FC<AppLayoutProps> = ({children, currentPage, goTo}) => {
  return (
    <>
      <NavBar currentPage={currentPage} goTo={goTo} />
      <SideDrawer />
      <Box sx={{ paddingTop: '65px', paddingLeft: '70px' }}>
        {children}
      </Box>
    </>
  )
}

export default AppLayout