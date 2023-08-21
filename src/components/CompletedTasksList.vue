<template>
    <div>
        <CompletedTasksCard :completedTask="completedTask"/>
    </div>
</template>

<script>
import CompletedTasksCard from './CompletedTasksCard.vue';
export default {
    name:'CompletedTasksList',
    props: {
        completedTask:{
            type: Object,
        }
    },
    components:{
        CompletedTasksCard
    }
}
</script>