<template>
  <div v-if="task" class="edit-task">
    <div>
      <span 
        contenteditable="true" 
        @blur="updateTaskField('name', $event.target.innerText)"
        :class="{ editable: true }"
      >
        {{ task.name }}
      </span>
    </div>
    <div>
      <span 
        contenteditable="true" 
        @blur="updateTaskField('description', $event.target.innerText)"
        :class="{ editable: true }"
      >
        {{ task.description }}
      </span>
    </div>
    <div>
      <span 
        contenteditable="true" 
        @blur="updateTaskField('dueDate', $event.target.innerText)"
        :class="{ editable: true }"
      >
        {{ task.dueDate }}
      </span>
    </div>
    <div>
      <span 
        contenteditable="true" 
        @blur="updateTaskField('priority', $event.target.innerText)"
        :class="{ editable: true }"
      >
        {{ task.priority }}
      </span>
    </div>
    <div class="save-button">
      <button @click="saveTask">Save</button>
    </div>
  </div>
</template>

#### Script

Handle the updates to the task fields on blur and save changes.

```vue
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'EditTask',
  props: {
    taskId: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const store = useStore();
    const task = computed(() => store.getters.taskById(props.taskId));

    const updateTaskField = (field: string, value: string) => {
      if (task.value) {
        task.value[field] = value;
      }
    };

    const saveTask = () => {
      if (task.value) {
        store.commit('updateTask', task.value);
      }
    };

    return { task, updateTaskField, saveTask };
  }
});
</script>

#### Style

Add some styles to highlight the editable fields.

```vue
<style scoped>
.edit-task {
  margin: 20px;
}

.editable {
  border: 1px dashed #ccc;
  padding: 5px;
  cursor: text;
}

.editable:focus {
  outline: none;
  border: 1px solid #ab42b9;
}

.save-button {
  margin-top: 10px;
}

.save-button button {
  background-color: #ab42b9;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.save-button button:hover {
  background-color: #7f3689;
}
</style>


<!-- <template>
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
</style> -->
