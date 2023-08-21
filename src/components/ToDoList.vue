<template>
    <div v-for="uncompletedTask in UNCOMPLETED_TASKS" :key="uncompletedTask.id">
        <div class="card">
            <div class="left">
                <h5 v-if="editingTaskIndex !== uncompletedTask.id">{{ uncompletedTask.text }}</h5>
                <input v-model="uncompletedTask.text" class="input_task"
                    @keyup.enter="saveEdit(uncompletedTask.id, uncompletedTask.text)" @keyup.esc="cancelEdit"
                    placeholder="dasdasda" v-else>
            </div>
            <div class="right flex">
                <div v-if="editingTaskIndex === uncompletedTask.id">
                    <button class="btn green" @click="saveEdit(uncompletedTask.id, task)"
                        v-if="editingTaskIndex === uncompletedTask.id">Save</button>
                    <button class="btn red" @click="cancelEdit"
                        v-if="editingTaskIndex === uncompletedTask.id">Cancel</button>
                </div>
                <div v-else>
                    <button class="btn edit" @click="startEditing(uncompletedTask.id)"
                        v-if="editingTaskIndex !== uncompletedTask.id">Edit</button>
                    <button class="btn red" @click="deleteTask(uncompletedTask.id)">Delete</button>
                    <button class="btn dark-purple" @click="toggleTask(uncompletedTask.id)">Toggle</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import ToDoCard from './ToDoCard.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: 'ToDoList',
    components: {
        // ToDoCard
    },
    computed: {
        ...mapGetters(["UNCOMPLETED_TASKS"]),
    },
    data() {
        return {
            editingTaskIndex: null,
        }
    },
    methods: {
        ...mapMutations(["DELETE_TASK", "TOGGOLE_TASK", "EDIT_TASK"]),
        startEditing(index) {
            this.editingTaskIndex = index;
        },
        saveEdit(index, newText) {
            this.EDIT_TASK({ index, text: newText });
            this.editingTaskIndex = null;
        },
        cancelEdit() {
            this.editingTaskIndex = null;
        },
        deleteTask(index) {
            this.DELETE_TASK(index);
            this.editingTaskIndex = null;
        },
        toggleTask(index) {
            this.TOGGOLE_TASK(index);
        },
    }

}
</script>


<style lang="scss">
.card {
    gap: 16px;
    margin-bottom: 16px;
    color: #fff;
    border-radius: 20px;
    padding: 15px 32px;
    background-color: #1e2139;
    display: flex;

    .left {
        align-items: center;
        flex-basis: 60%;
        gap: 16px;

    }

    .right {
        gap: 16px;
        flex-basis: 40%;
        align-items: center;

        .btn {
            flex: 1;
            padding: 16px 24px;
            border-radius: 30px;
            border: none;
            font-size: 12px;
            margin-right: 8px;
            color: #fff;

        }
    }
}

.input_task {
    width: 100%;
    background-color: #1e2139;
    color: #fff;
    border-radius: 4px;
    padding: 12px;
    margin-bottom: 15px;
}

.red {
    background-color: #ec5757;
}

.edit {
    background-color: purple;
}

.green {
    background-color: rgb(59, 176, 59);
}</style>