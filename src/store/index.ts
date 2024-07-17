import { createStore, Store } from 'vuex';
import type { Task } from '@/types/task';

export interface State {
  tasks: Task[];
}

const state: State = {
  tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
};

const mutations = {
  addTask(state: State, task: Task) {
    state.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  },
  updateTask(state: State, updatedTask: Task) {
    const index = state.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      state.tasks.splice(index, 1, updatedTask);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  },
  deleteTask(state: State, taskId: number) {
    state.tasks = state.tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  },
};

const getters = {
  allTasks: (state: State) => state.tasks,
  taskById: (state: State) => (id: number) => state.tasks.find(task => task.id === id),
};

export const store = createStore({
  state,
  mutations,
  getters,
});
