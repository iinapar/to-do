export interface Todo {
  id: number;
  title: string;
  tasks: {
    task: string;
    completed: boolean;
  }[];
}
