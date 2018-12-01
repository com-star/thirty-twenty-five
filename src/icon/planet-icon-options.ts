import { BaseIconOptions, PointExpression } from 'leaflet';
import { iconDirAbsPath } from '../config/image.config';
import { propMap } from './icon-props';

export default class PlanetIconOptions implements BaseIconOptions {
  public readonly popupAnchor: PointExpression;
  public readonly shadowSize: PointExpression;
  public readonly shadowAnchor: PointExpression;
  public readonly iconSize: PointExpression;
  public readonly iconAnchor: PointExpression;
  public readonly iconUrl: string;
  public readonly shadowUrl: string;

  constructor(climate: string, size: string) {
    this.popupAnchor = [0, 0];
    this.shadowAnchor = [0, 0];
    this.shadowSize = [1, 1];

    this.iconSize = propMap[size].iconSize;
    this.iconAnchor = propMap[size].iconAnchor;
    this.iconUrl = iconDirAbsPath + climate + propMap[size].urlPostfix;
    this.shadowUrl = iconDirAbsPath + climate + propMap[size].urlPostfix;
  }

}
