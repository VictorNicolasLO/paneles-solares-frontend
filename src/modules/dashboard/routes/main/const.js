import HomeIcon from '@material-ui/icons/Home';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import Home from './routes/home/home';
import AjustePanel from './routes/ajuste-panel';

export const routes = [
  {
    name: 'General',
    isDivider: true
  },
  {
    name: 'Principal',
    path: '/dashboard',
    Icon: HomeIcon,
    Component: Home
  },
  {
    name: 'Ajuste de panel solar',
    path: '/dashboard/panel-solar',
    Icon: ControlCameraIcon,
    Component: AjustePanel
  }
];
