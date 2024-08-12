export interface IDataAppeal {
  id: number;
  user: string;
  theme: string;
  deadline: string;
  condition: string;
  response: boolean;
  description: string;
  decision: string | null;
  service: string;
  compositionService: string;
  createdAt: string;
  updatedAt: string;
}
