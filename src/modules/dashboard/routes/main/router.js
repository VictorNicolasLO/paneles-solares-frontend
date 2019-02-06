import Home from './routes/home/home';
import AjustePanel from './routes/ajuste-panel';
import Users from './routes/users';

export const router = [
  {
    name: 'Principal',
    path: '/dashboard',
    Component: Home
  },
  {
    name: 'Ajuste de panel solar',
    path: '/dashboard/panel-solar',
    Component: AjustePanel
  },
  {
    name: 'Ajuste de panel solar',
    path: '/dashboard/users',
    Component: Users
  }
];
