export default interface Faction {
  allies: ShortName | ShortName[];
  enemies: ShortName | ShortName[];
  capital: string;
  fullName: FullName;
  shortName: ShortName;
}

export enum FullName {
  independent = 'Independent',
  liao = 'Liao',
  noFaction = 'No Faction',
  taurian = 'Taurian Concordat',
}

export enum ShortName {
  independent = 'Locals',
  liao = 'Liao',
  noFaction = 'No Faction',
  taurian = 'Taurian',
}
