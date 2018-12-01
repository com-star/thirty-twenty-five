import { PointExpression } from 'leaflet';
import { imageFileType } from '../config/image.config';

interface Props {
  iconSize: PointExpression;
  iconAnchor: PointExpression;
  urlPostfix: string;
}

interface PropMap {
  large: Props;
  medium: Props;
  small: Props;
}

const largePostfix: string = '2' + imageFileType;

export const largeProps: Props = {
  iconAnchor: [32, 32],
  iconSize: [64, 64],
  urlPostfix: largePostfix,
};

const mediumProps: Props = {
  iconAnchor: [24, 24],
  iconSize: [48, 48],
  urlPostfix: imageFileType,
};

const smallProps: Props = {
  iconAnchor: [16, 16],
  iconSize: [32, 32],
  urlPostfix: imageFileType,
};

export const propMap: PropMap = {
  large: largeProps,
  medium: mediumProps,
  small: smallProps,
};
