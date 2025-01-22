import { Box, Divider, List } from '@mui/material'

import React from 'react'
import { menuList } from '../constants/menuList'
import { MenuItem } from './MenuItem'

type DrawerListProps = {
  expanded: boolean
  toggleDrawer: (open: boolean) => () => void
}

const DrawerList: React.FC<DrawerListProps> = ({
  expanded,
  toggleDrawer
}) => {
  return (
    <Box sx={{ width: 250, paddingTop: '60px' }} height={'100%'} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuList.top.map(({path, label, Icon}, index) => (
          <MenuItem expanded={expanded} key={index} label={label} path={path} Icon={Icon} />
        ))}
      </List>
      <Box style={{ position: 'absolute', width: '100%', bottom: 0 }}>
        <Divider />
        <List>
          {menuList.bottom.map(({path, label, Icon}, index) => (
            <MenuItem expanded={expanded} key={index} label={label} path={path} Icon={Icon} />
          ))}
        </List>
      </Box>
    </Box>
  )
}

export default DrawerList