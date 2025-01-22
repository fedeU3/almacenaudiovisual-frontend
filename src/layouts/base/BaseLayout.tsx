
import React from 'react'
import NavBar from '../components/AppBar'
import { Box } from '@mui/material'

type BaseLayoutProps = {
  children: React.ReactNode,
  currentPage: string,
  goTo: (path: string) => () => void
}

const BaseLayout: React.FC<BaseLayoutProps> = ({children, currentPage, goTo}) => {
  return (
    <>
      <NavBar currentPage={currentPage} goTo={goTo} />
      <Box sx={{ paddingTop: '65px' }}>
        {children}
      </Box>
    </>
  )
}

export default BaseLayout