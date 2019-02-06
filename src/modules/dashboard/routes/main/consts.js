import HomeIcon from '@material-ui/icons/Home';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import UsersIcon from '@material-ui/icons/People';

export const menu = [
  {
    name: 'General',
    isDivider: true
  },
  {
    name: 'Principal',
    path: '/dashboard',
    Icon: HomeIcon
  },
  {
    name: 'Ajuste de panel solar',
    path: '/dashboard/panel-solar',
    Icon: ControlCameraIcon
  },
  {
    name: 'Usuarios',
    isDivider: true
  },
  {
    name: 'Gestion de usuarios',
    path: '/dashboard/users',
    Icon: UsersIcon
  }
];
