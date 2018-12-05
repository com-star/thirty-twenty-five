import { Icon, PointTuple } from 'leaflet';
import Faction, { ShortName } from '../faction/faction';
import PlanetIconOptions from '../icon/planet-icon-options';
import PlanetDetails from './planet-details';
import PlanetTags from './planet-tags';

export default class Planet implements PlanetDetails {
  public readonly coords: PointTuple;
  public readonly description: string;
  public readonly employers: ShortName | ShortName[];
  public readonly faction: Faction;
  public readonly name: string;
  public readonly planetIcon: Icon;
  public readonly tags: PlanetTags;
  public readonly targets: ShortName | ShortName[];

  constructor(builder: PlanetDetails) {
    this.name = builder.name;
    this.planetIcon = new Icon(new PlanetIconOptions(builder.tags.climate, builder.tags.size));
    this.coords = builder.coords;
    this.description = builder.description;
    this.employers = builder.employers;
    this.faction = builder.faction;
    this.tags = builder.tags;
    this.targets = builder.targets;
  }
}
