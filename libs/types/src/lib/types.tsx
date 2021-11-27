/* eslint-disable-next-line */
export interface TypesProps {}

export interface IndexProps {
  players: [Player];
  countries: [Country];
}

export interface PlayersProps {
  players: [Player];
}

export interface CountriesProps {
  countries: [Country];
}

export interface Player {
  name: string;
}

export interface Country {
  name: string;
  code: string;
  flag: string;
}
