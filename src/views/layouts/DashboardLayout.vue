<template>
    <div class="min-h-screen bg-gray-100 flex relative">
      <div
        v-if="isMobile && isSidebarOpen"
        class="fixed inset-0 bg-black bg-opacity-30 z-20"
        @click="toggleSidebar"
      ></div>
  
      <aside
        :class="sidebarClasses"
      >
        <div class="flex justify-between items-center mb-8">
          <h1 v-if="!isSidebarCollapsed" class="text-xl font-semibold text-gray-800">Vuexy</h1>
          <button @click="toggleCollapse" class="text-gray-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
  
        <nav class="space-y-2">
          <NavItem icon="home" label="Dashboards" badge="8" :collapsed="isSidebarCollapsed" />
          <NavItem icon="menu" label="Layouts" :collapsed="isSidebarCollapsed" />
  
          <div class="mt-4 pt-4 border-t border-gray-200">
            <span v-if="!isSidebarCollapsed" class="text-xs text-gray-500 uppercase">Apps & Pages</span>
            <NavItem icon="mail" label="Email" :collapsed="isSidebarCollapsed" />
            <NavItem icon="calendar" label="Calendar" :collapsed="isSidebarCollapsed" />
            <NavItem icon="chart-bar" label="Chart" :collapsed="isSidebarCollapsed" />
            <NavItem icon="book-open" label="Logistics" active :collapsed="isSidebarCollapsed" />
  
            <!-- <div v-if="!isSidebarCollapsed" class="ml-4 space-y-1">
              <div class="flex items-center p-2 rounded-md bg-indigo-50 text-indigo-500 cursor-pointer">
                <span class="text-sm">Dashboard</span>
              </div>
              <div class="flex items-center p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <span class="text-sm">Fleet</span>
                <span class="ml-auto bg-red-100 text-red-500 rounded-full px-2 py-px text-xs">4</span>
              </div>
            </div> -->
          </div>
        </nav>
      </aside>
  
      <div :class="mainContentClasses">
        <header  class="bg-white p-4 shadow-md flex justify-between items-center">
          <button @click="toggleSidebar">
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 class="text-lg font-semibold">Page Title</h1>
        </header>
  
        <div class="p-4">
          <slot />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavItem from '../../components/NavItem.vue'; // Assuming NavItem is in a separate file
  
  export default {
    name: 'AppLayout',
    components: {
      NavItem
    },
    data() {
      return {
        isSidebarCollapsed: false,
        isSidebarOpen: false,
        isMobile: false
      };
    },
    mounted() {
      this.checkScreen();
      window.addEventListener('resize', this.checkScreen);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.checkScreen);
    },
    computed: {
      sidebarClasses() {
        return [
          'bg-white',
          'h-screen',
          'fixed',
          'top-0',
          'left-0',
          'z-30',
          'border-r',
          'border-gray-200',
          'p-4',
          'flex',
          'flex-col',
          'transition-all',
          'duration-300',
          'ease-in-out',
          this.isSidebarCollapsed ? 'w-20' : 'w-64',
          this.isMobile ? (this.isSidebarOpen ? 'translate-x-0' : '-translate-x-full') : ''
        ];
      },
      mainContentClasses() {
        return [
          'flex-1',
          'transition-all',
          'duration-300',
          this.isMobile ? 'ml-0' : (this.isSidebarCollapsed ? 'ml-20' : 'ml-64')
        ];
      }
    },
    methods: {
      toggleCollapse() {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
      },
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      },
      checkScreen() {
        this.isMobile = window.innerWidth <= 768;
        if (!this.isMobile) {
          this.isSidebarOpen = false;
        }
      }
    }
  };
  </script>