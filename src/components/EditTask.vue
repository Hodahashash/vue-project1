<template>
  <div v-if="task">
    <form @submit.prevent="updateTask">
      <input v-model="task.name" placeholder="Task Name" required />
      <textarea v-model="task.description" placeholder="Task Description"></textarea>
      <input type="date" v-model="task.dueDate" required />
      <select v-model="task.priority">
        <option value="high" style="color: red;font-weight: bold;">High</option>
        <option value="medium" style="color:#ffae42;font-weight: bold;">Medium</option>
        <option value="low" style="color: green;font-weight: bold;">Low</option>
      </select>
      <button type="submit">Update Task</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex';
// import { Task } from '@/types/Task'

export default defineComponent({
  name: 'EditTask',
  props: {
    taskId: Number
  },
  setup(props) {
    const store = useStore()
    const task = computed(() => store.getters.taskById(props.taskId))

    const updateTask = () => {
      store.commit('updateTask', task.value)
    }

    return { task, updateTask }
  }
})
</script>

<style scoped>
</style>
