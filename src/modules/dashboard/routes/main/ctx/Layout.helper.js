import { routes } from '../const';

export function getRouteFromLocation(path) {
  return routes.find(item => {
    if (item.path == path) {
      return item;
    }
  });
}
