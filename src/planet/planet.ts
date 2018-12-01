import { Icon, PointTuple } from 'leaflet';
import PlanetIconOptions from '../icon/planet-icon-options';
import PlanetTags from './planet-tags';

export interface PlanetBuilder extends PlanetTags{
  name: string;
  coords: PointTuple;
}

export default class Planet {
  public readonly planetIcon: Icon;
  public readonly name: string;
  public readonly coords: PointTuple;

  constructor(builder: PlanetBuilder) {
    this.name = builder.name;
    this.planetIcon = new Icon(new PlanetIconOptions(builder.climate, builder.size));
    this.coords = builder.coords;
  }
}
