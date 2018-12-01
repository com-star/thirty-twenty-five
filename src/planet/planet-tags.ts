export default interface PlanetTags {
  civilization: Civilization;
  climate: Climate;
  industry: Industry | Industry[];
  other: Other | Other[];
  population: Population;
  progress: Progress;
  size: Size;
}

export enum Civilization {
  innerSphere = 'inner sphere',
  periphery = 'periphery',
  primitive = 'primitive',
}

export enum Climate {
  arctic = 'arctic',
  arid = 'arid',
  desert = 'desert',
  ice = 'ice',
  mars = 'mars',
  moon = 'moon',
  rocky = 'rocky',
  terran = 'terran',
  tropical = 'tropical',
  water = 'water',
}

export enum Industry {
  agriculture = 'agriculture',
  aquaculture = 'aquaculture',
  manufacturing = 'manufacturing',
  mining = 'mining',
  poor = 'poor',
  recreation = 'recreation',
  research = 'research',
  rich = 'rich',
}

export enum Other {
  alienVegetation = 'alien vegetation',
  battlefield = 'battlefield',
  blackMarket = 'black market',
  boreholes = 'boreholes',
  capital = 'capital',
  comstar = 'comstar',
  empty = 'empty',
  floatingWorld = 'floating world',
  fungus = 'fungus',
  gasGiant = 'gas giant',
  hub = 'hub',
  megacity = 'megacity',
  megaforest = 'megaforest',
  mudflats = 'mudflats',
  newColony = 'new colony',
  pirate = 'pirates',
  plague = 'plague',
  prison = 'prison',
  ruins = 'ruins',
  starLeague = 'star league',
  stonedCaribou = 'stoned caribou',
  storms = 'storms',
  taintedAir = 'tainted air',
  volcanic = 'volcanic',
}

export enum Population {
  large = 'large',
  medium = 'medium',
  none = 'none',
  small = 'small',
}

export enum Progress {
  one = '1',
  two = '2',
  three = '3',
}

export enum Size {
  large = 'large',
  medium = 'medium',
  small = 'small',
}
