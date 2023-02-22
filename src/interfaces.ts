export interface IUser {
  name: string;
  email: string;
  date: string | null;
  phone: string;
  card: string;
}

export interface IStep {
  id: string;
  progress: number;
}
