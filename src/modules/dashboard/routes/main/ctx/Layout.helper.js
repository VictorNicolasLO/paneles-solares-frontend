import { menu } from '../consts';

export function getRouteFromLocation(path) {
  return menu.find(item => {
    if (item.path == path) {
      return item;
    }
  });
}
