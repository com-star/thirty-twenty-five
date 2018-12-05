import { Biome,
         Civilization,
         Climate,
         Industry,
         Other,
         Population,
         Progress,
         Size } from './planet-enums';

export default interface PlanetTags {
  biome: Biome | Biome[];
  civilization: Civilization;
  climate: Climate;
  industry: Industry | Industry[];
  other: Other | Other[];
  population: Population;
  progress: Progress;
  size: Size;
}
