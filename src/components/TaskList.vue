<template>
  <div class="tasklist">
    <h2>Your Tasks</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <div class="task-header">
          <span v-if="task.dueDate" class="due-date"><img src="../../public/calendar.png">{{ task.dueDate }}</span>
          <span v-if="task.priority" class="priority" :class="getPriorityClass(task.priority)">{{ task.priority }}</span>
        </div>
        <div class="container" >
          <span  @click="completed(task.id)"><img src="../../public/check.png"></span>
          <div class="content">

            <span class="title">{{ task.name }}</span>
            <span class="description " :class="{ 'completed-task': task.completed }">{{ task.description }}</span>
            <!-- <span v-if="task.dueDate"><img src="../../public/calendar.png">{{ task.dueDate }}</span> -->
          </div>
        </div>
        <div class="buttons">
          <button @click="editTask(task.id)"><img src="../../public/edit.png">Edit</button>
          <button @click="deleteTask(task.id)"><img src="../../public/bin.png">Delete</button>
        </div>
        <EditTask v-if="editingTaskId === task.id" :taskId="task.id" />
      </li>
      <li class="add">
        <button class="add" @click="$emit('openModal')"><img src="../../public/plus.png" > Add Task</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed,defineComponent, ref } from 'vue'
import { useStore } from 'vuex';
import EditTask from '../components/EditTask.vue'
import type { Task } from '@/types/task';

export default defineComponent({
  name: 'TaskList',
  components: { EditTask },
  setup() {
    const store = useStore()
    const tasks = computed(() => store.getters.allTasks);
    const editingTaskId = ref<number | null>(null)

    const editTask = (taskId: number) => {
      editingTaskId.value = taskId
    }
    const completed = (taskId: number) => {
      store.commit('completeTask', taskId);
    };
    const deleteTask = (taskId: number) => {
      store.commit('deleteTask', taskId);
    };
    const getPriorityClass = (priority: string) => {
      return {
        low: 'priority-low',
        medium: 'priority-medium',
        high: 'priority-high',
      }[priority];
    };
    return { tasks, editingTaskId, editTask, deleteTask, completed,getPriorityClass }
  }
})

</script>

<style scoped>
.tasklist {
  padding: 20px;
}
.content img{
  height: 20px;
  width: 20px;
}
.sidebar {
  background-color: #f9f9f9;
  padding: 20px;
}

h2 {
  margin-top: 0;
  display: flex;
  align-self: flex-start;
  padding-left: 5px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

li:last-child {
  border-bottom: none;
}
.task-header {
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  align-items: flex-end;


}

.priority{
  margin-right: 20px;
}
.priority-low {
  color: green;
}
.priority-medium{
  color: #ffae42;
}
.priority-high{
  color: red;
}

.due-date {
  color: blue;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-left: auto;

}

.due-date img {
  height: 14px;
  width: 14px;
  margin-right: 5px;
  padding: 10px;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.completed-task {
  text-decoration: line-through;
}

.title {
  font-size: 18px;
  font-weight: bold;
}

.description {
  font-size: 14px;
  margin-top: 5px;
}
li div {
  display: flex;
  align-items: center;
}

i {
  font-size: 18px;
  margin-right: 10px;
}

button {
  background-color: #ab42b9;
  color: #fff;
  padding: 10px;
  width: 80px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-items:stretch;
  display: flex;
  align-content:space-between;
  justify-content: space-between;
}
.add{
  width:auto;
  height: 50px;
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: large;
  align-content: center;
  justify-content: center;
}
.add img{
  height: 20px;
  width: 20px;
  padding-right: 10px ;
}
.buttons img{
  height: 12px;
  width: 12px;
  
}
.buttons{
  justify-content: space-between;
}
button:hover {
  background-color: #7f3689;
}
.container{
  display: flex;
  padding: 10px;
  margin-top: -50px;
}
.container img{
  height: 30px;
  width: 30px;
  padding-right: 20px;
  margin-left: -60px;
}
</style>
