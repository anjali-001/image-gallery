import { generatePath } from 'react-router-dom';
import { routes } from '../constants/paths';

export const getUuid = (title, index) => {
  const titleWithoutSpaces = title.toLowerCase().split(' ').join('_');
  return `${titleWithoutSpaces}_${index}`;
};

export const imageDetailPath = (uuid) =>
  generatePath(routes.imageDetailsPath, { uuid });

export const noop = () => {};
