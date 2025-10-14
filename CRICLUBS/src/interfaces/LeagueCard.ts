import { ViewStyle } from "react-native";

export interface League {
  clubId: number;
  clubName: string;
  logo_file_path: string;
  location: string;
  status: string;
  role: string;
  isAcademy: string;
  allowPlayerCustomId: string;
  sport: string;
}

export interface LeagueCardProps {
  league: League;
  style?: ViewStyle;
}
