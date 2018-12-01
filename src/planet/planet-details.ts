import Faction, { FullName, ShortName } from '../faction/faction';

export default interface PlanetDetails {
  description: string;
  employers: ShortName | ShortName[];
  faction: FullName;
  short: ShortName;
  targets: ShortName | ShortName[];
  biomes:
}
