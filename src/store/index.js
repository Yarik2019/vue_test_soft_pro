import { createStore } from "vuex";

export default createStore({
  state: {
    completedTasks: [],
  },

  mutations: {
    CREATE_NEW_TASK(state, newTask) {
      state.completedTasks.push(newTask);
    },
    TOGGOLE_TASK(state, index) {
      state.completedTasks.forEach((task) => {
       if(task.id === index){
        task.completed = !task.completed;
       }
      })
    },
    EDIT_TASK(state, payload) {
       state.completedTasks.filter((task) => {
        if(task.id === payload.id){
          state.completedTasks.text = payload.text;
        }
      })
    },
    DELETE_TASK(state, payload) {
      state.completedTasks = state.completedTasks.filter(
        (task) => task.id !== payload
      );
    },
  },
  getters: {
    UNCOMPLETED_TASKS(state) {
      return state.completedTasks.filter((task) => !task.completed);
    },
    COMPLETED_TASKS(state) {
      return state.completedTasks.filter((task) => task.completed);
    },
    TOTAL_COMPLETED_TASKS(state) {
      return state.completedTasks.filter((task) => task.completed).length;
    },
  },
  actions: {},
  modules: {},
});
