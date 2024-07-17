<template>
    <div class="sidebar" :class="{ minimized: isMinimized }">
        <h2 class="fas fa-list">Todo List</h2>
        <nav class="sidebar-container ">
            <router-link to="/"><i class="fas fa-home" ></i><img src="../../public/home.png"><P>Home</P> </router-link>
            <router-link @click="$emit('openModal')"><img src="../../public/plus.png" ><P >Add Task</P></router-link>

            
            <button class="minimize-btn" @click="toggleMinimize" >
                <img src="../../public/exchange.png">
                <i class="fas fa-chevron-left" v-if="isMinimized"></i>
                <i class="fas fa-chevron-right" v-else></i>
            </button>    
        </nav>
        
     </div>
    
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
//   export default defineComponent({
//     name: 'Sidebar',
//   });
  export default {
  data() {
    return {
      isMinimized: false
    }
  },
  methods: {
    toggleMinimize() {
      this.isMinimized = !this.isMinimized
    }
  }
}
  </script>
  
<style scoped>
    .sidebar nav img{
        width: 30px;
        height: 30px;
        padding: 20px;
        position: relative;
        left: 0;
    }
    .sidebar {
      width: 200px;
      background-color: #333;
      color: white;
      border: 20px;
      position:fixed;
      height: 100%;
      align-items: center;
      justify-content: center;
      align-self:flex-start;
      top: 0;
      left: 0;
      bottom: 0;
      transition: width 0.3s ease-in-out;

    }
    /* minimized details */
    .sidebar.minimized {
      width: 50px;
      border: 20px;
      align-items: center;
      justify-content: center;
    }
    .sidebar.minimized h2 nav {
      align-items: center;
      justify-content: center;
    }
    .minimize-btn {
    display: flex;      
    /* top:  10px;
      right: 10px; */
      position: absolute;
      background-color: #5b2876;
      border: none;
      padding: 10px;
      cursor: pointer;
      /* align-self: baseline; */
      width: 100%;
      height: 70px;
      left: 0;
      bottom: 0;
      justify-content: center;
    }
    .minimize-btn img{
        width: 10px;
        height: 10px;
    }

    .minimize-btn:hover {
      background-color: #9f42b9;
    }

    .minimize-btn i {
      font-size: 18px;
      color: white;
    }
    .sidebar.minimized h2, .sidebar.minimized nav p {
        display: none;
    }
    .sidebar.minimized h2::after, .sidebar.minimized nav a::after, .sidebar.minimized nav ::after {
        content: none;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .sidebar.minimized .sidebar-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

   
    .sidebar h2 {
      color: #ab42b9;
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: center;
      margin-bottom: 20px;
    }

    .sidebar h2 i {
      font-size: 24px;
      margin-right: 10px;
    }

    .sidebar nav {
      margin-top: 20px;
    }

    .sidebar nav a {
      display: flex;
      align-items: center;
      color: white;
      text-decoration: none;
      margin:  0;
      padding: 10px;
      border-radius: 5px;
    }

    .sidebar nav a:hover {
      background-color: #ab42b9;
    }

    .sidebar nav a.router-link-exact-active {
      font-weight: bold;
      margin: 0;

    }

    .sidebar nav a i {
      font-size: 18px;
      margin-right: 10px;
    }
</style>
    