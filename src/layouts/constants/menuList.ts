import { AutoStories, Logout, Home, MenuBook, People, Person, ShoppingBag } from '@mui/icons-material'
import { MenuItem, MenuList } from '../types/MenuList'

export const menuList: MenuList = {
  top: [
    { label: 'Home', path: '/', Icon: Home, activeOnly: true },
    { label: 'Miembros', path: '/miembros', Icon: People, adminOnly: true, activeOnly: true },
    /*{ label: 'Books', path: '/books', Icon: MenuBook, activeOnly: true },*/
    { label: 'Usuario', path: '/usuario', Icon: Person, activeOnly: true },
    { label: 'MisPedidos', path: '/MisPedidos', Icon: ShoppingBag, activeOnly: true },
  ],
  bottom: [
    { label: 'Log Out', path: '/logout', Icon: Logout },
  ],
}

export const menuListMap: Record<string, MenuItem> = menuList.top.reduce((acc, item) => ({ ...acc, [item.path]: item }), {})