/* eslint-disable-next-line */
export interface TypesProps {}

export interface IndexProps {
  players: [Player];
  countries: [Country];
  teams: [Team];
}

export interface PlayersProps {
  players: [Player];
}

export interface CountriesProps {
  countries: [Country];
}

export interface TeamsProps {
  teams: [Team];
}

export interface Player {
  name: string;
  age: string;
  photo: string;
}

export interface Country {
  name: string;
  code: string;
  flag: string;
}

export interface Team {
  name: string;
  founded: string;
  logo: string;
}
