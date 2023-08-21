<template>
    <div>
        <input type="text" class="input_task" v-model="newTask" @keyup.enter="submit()" placeholder="на тисніть enter">
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    name: "PostForm",
    data() {
        return {
            newTask: null,
            completed: false
        }
    },
    methods: {
        ...mapMutations(["CREATE_NEW_TASK"]),
        submit() {
            if (this.newTask == '' || this.newTask == ' ') {
                alert('error');
                return;
            }
            this.CREATE_NEW_TASK({
                id: new Date(),
                text: this.newTask,
                completed: this.completed 
            });

            this.newTask = '';
        }
    }
}
</script>
<style>
.input_task{
    width: 100%;
    background-color: #1e2139;
    color: #fff;
    border-radius: 4px;
    padding: 12px;
    margin-bottom: 15px;
}
</style>