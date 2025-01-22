import { AutoStories, Logout, Mail, SvgIconComponent } from '@mui/icons-material'

type MenuItem = {
  label: string
  path: string
  Icon: SvgIconComponent
}

export const menuList = {
  top: [
    { label: 'Home', path: '/', Icon: Mail },
    { label: 'Books', path: '/books', Icon: AutoStories },
  ],
  bottom: [
    { label: 'Log Out', path: '/logout', Icon: Logout },
  ],
}

export const menuListMap: Record<string, MenuItem> = menuList.top.reduce((acc, item) => ({ ...acc, [item.path]: item }), {})