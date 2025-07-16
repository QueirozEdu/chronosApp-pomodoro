//useReducer <- hook que recebe um reducer e um estado inicial
//reducer <- funcao que recebe o estado atual e uma acao e retorna o novo estado
//state <- o estado atual
//action <- acao disparada, geralmente é um objeto com type e (opcionalmente) payload
//type <- o tipo da acao, geralmente uma string (pode ser um enum, constante etc)
// payload <- dados extras enviados junto com a action se necessario para atualizar o estado

import type { TaskModel } from '../../models/TaskModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
}

export type TaskActionModel =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.RESET_STATE;
    };
