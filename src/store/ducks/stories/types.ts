export interface Stories {
  stories: StoriesTypes[];
}

export interface StoriesTypes {
  id: number;
  user: string;
  userPicture: string;
  time: string;
}
