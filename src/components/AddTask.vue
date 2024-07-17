<template>
  <div>
    <div v-if="isModalVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <button class="close-button" @click="closeModal">X</button>
        <form @submit.prevent="addTask">
          <input v-model="task.name" placeholder="Task Name" required />
          <textarea v-model="task.description" placeholder="Task Description"></textarea>
          <input type="date" v-model="task.dueDate" required />
          <select v-model="task.priority">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import type { Task } from '@/types/Task';


export default defineComponent({
  name: 'AddTask',
  // setup() {
  //   const store = useStore();
  //   const isModalVisible = ref(false);
  //   const task = ref<Task>({
  //     id: Date.now(),
  //     name: '',
  //     description: '',
  //     dueDate: '',
  //     priority: 'medium',
  //     completed: false,
  //   });
    props: {
      isModalVisible: {
        type: Boolean,
        required: true,
      },
    },
      emits: ['closeModal'],
      setup(props, { emit }) {
      const store = useStore();
      const task = ref<Task>({
        id: Date.now(),
        name: '',
        description: '',
        dueDate: '',
        priority: 'medium',
        completed: false,
      });

      const addTask = () => {
        store.commit('addTask', task.value);
        // Clear the form and close the modal
        task.value = {
          id: Date.now(),
          name: '',
          description: '',
          dueDate: '',
          priority: 'medium',
          completed: false,
        };
        emit('closeModal');
      };

    const closeModal = () => {
      emit('closeModal');
    };

    return { task, addTask, closeModal };
  },
});
</script>


<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  display:flex;
  flex-direction: column;
}

input, textarea, select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
}

input[type="date"] {
  padding: 10px 10px 10px 20px;
  width: 92%;
}

select {
  padding: 10px 20px;
}

button[type="submit"] {
  background-color: #ab42b9;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #682a70;
}

label {
  display: block;
  margin-bottom: 10px;
}

label span {
  font-weight: bold;
}

input:focus, textarea:focus {
  border-color: #aaa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.error {
  color: red;
  font-size: 12px;
  margin-top: 10px;
}
</style>



<!-- <template>
  <div>
    <form @submit.prevent="addTask">
      <input v-model="task.name" placeholder="Task Name" required />
      <textarea v-model="task.description" placeholder="Task Description"></textarea>
      <input type="date" v-model="task.dueDate" required />
      <select v-model="task.priority">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex';
import type { Task } from '@/types/task'

export default defineComponent({
  name: 'AddTask',
  setup() {
    const store = useStore()
    const task = ref<Task>({
      id: Date.now(),
      name: '',
      description: '',
      dueDate: '',
      priority: 'medium',
      completed: false
    })

    const addTask = () => {
      store.commit('addTask', task.value)
      // Clear the form
      task.value = {
        id: Date.now(),
        name: '',
        description: '',
        dueDate: '',
        priority: 'medium',
        completed: false
      }
    }

    return { task, addTask }
  }
})
</script>

<style scoped>
form {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input, textarea, select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
}

input[type="date"] {
  padding: 10px 10px 10px 20px;
}

select {
  padding: 10px 20px;
}

button[type="submit"] {
  background-color: #ab42b9;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #682a70;
}

label {
  display: block;
  margin-bottom: 10px;
}

label span {
  font-weight: bold;
}

input:focus, textarea:focus {
  border-color: #aaa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.error {
  color: red;
  font-size: 12px;
  margin-top: 10px;
}
</style> -->
