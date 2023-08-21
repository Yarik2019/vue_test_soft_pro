<template>
  <div class="app">
    <div class="container">
      <PostForm />
      <section>
        <h2 class="title">Uncompleted Tasks</h2>
        <ToDoList/>
      </section>
      <section>
        <h2 class="title">Completed Tasks</h2>
        <CompletedTasksList v-for="completedTask in COMPLETED_TASKS" :key="completedTask.id"
          :completedTask="completedTask" />
      </section>

      <footer>
        <p class="total_completed">Total completed tasks: {{ TOTAL_COMPLETED_TASKS }}</p>
      </footer>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PostForm from './components/PostForm.vue';
import ToDoList from './components/ToDoList.vue';
import CompletedTasksList from './components/CompletedTasksList.vue';

export default {
  name: 'App',
  components: {
    PostForm,
    ToDoList,
    CompletedTasksList
  },
  computed: {
    ...mapGetters(["UNCOMPLETED_TASKS", "COMPLETED_TASKS", "TOTAL_COMPLETED_TASKS"]),
    // uncompletedTask() {
    //   return this.UNCOMPLETED_TASKS();
    // }
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

.app {
  background-color: #141625;
  height: 100vh;

  .container {
    padding: 30px;
    max-width: 800px;
    margin: 0 auto;
  }

  .title {
    color: #ffff;
  }
}

input,
button {
  background: transparent;
  border: 0;
  outline: none;

}

.dark-purple {
    background-color: #252945;
}


.flex {
    display: flex;
}

.total_completed{
  color: #ffff;
  text-align: center;
}
</style>
