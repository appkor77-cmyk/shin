export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface VideoItem {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
}

export interface MatchInfo {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: string; // 'Live', 'Finished', 'Scheduled'
  date: string;
  stadium: string;
  pitcherHome?: string;
  pitcherAway?: string;
}