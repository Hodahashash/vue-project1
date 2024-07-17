<template>
  <div id="app">
    <Sidebar />
    <div class="main-content">
      <TaskList @openModal="isModalVisible = true" />
      <AddTask :isModalVisible="isModalVisible" @closeModal="isModalVisible = false" />
      <!-- <main>
        <AddTask />
        <TaskList />
      </main> -->
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TaskList from '@/components/TaskList.vue';
import Sidebar from '@/components/Sidebar.vue';
import AddTask from '@/components/AddTask.vue';

export default defineComponent({
  name: 'App',
  components: {
    TaskList,
    Sidebar,
    AddTask,

  },
  setup() {
    const isModalVisible = ref(false);

    return { isModalVisible };
  },
});
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  display: flex;
  margin: 0;
  padding: 0;
  border: 0;

}


.main-content {
  margin-left: 200px;
  padding: 20px;
  width: calc(100% - 200px);
}
</style>
