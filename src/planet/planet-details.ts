import { PointTuple } from 'leaflet';
import Faction, { ShortName } from '../faction/faction';
import PlanetTags from './planet-tags';

export default interface PlanetDetails {
  coords: PointTuple;
  description: string;
  employers: ShortName | ShortName[];
  faction: Faction;
  name: string;
  tags: PlanetTags;
  targets: ShortName | ShortName[];
}
