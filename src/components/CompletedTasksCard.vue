<template>
    <div class="completed_card">
        <div class="completed_card-left">
            <h5>{{completedTask.text}}</h5>
        </div>
        <div class="completed_card-right flex">
            <button class="btn dark-purple" @click="toggleTask(completedTask.id)">Toggle</button>
        </div>
    </div>
</template>
<script>
import {mapMutations} from "vuex"
export default {
    name: 'CompletedTasksCard',
    props: {
        completedTask: {
            type: Object,
        }
    },
    methods: {
        ...mapMutations(["TOGGOLE_TASK"]),
        toggleTask(index) {
            this.TOGGOLE_TASK(index);
        }
    }
    
}
</script>

<style lang="scss">
.completed_card {
    gap: 16px;
    margin-bottom: 16px;
    color: #fff;
    border-radius: 20px;
    padding: 15px 32px;
    background-color: #1e2139;
    display: flex;

    &-left{
        align-items: center;
        flex-basis: 60%;
        gap: 16px;

    }

    &-right {
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

</style>