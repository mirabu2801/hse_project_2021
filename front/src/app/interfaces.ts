export interface TaskAndSolve{
  id: number;
  input?: string;
  output: string;
}

export interface  OnlyTask{
  id?: number;
  text: string;
}

export interface TotalInfo{
  cnt_task_without_solve: number;
  cnt_task_and_solve_complete_abzac: number;
  cnt_task_and_solve_complete_total: number;
}

export interface SendTextAlgos{
  text: string;
}

