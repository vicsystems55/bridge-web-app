<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script>
import DashboardLayout from './views/layouts/DashboardLayout.vue';
import FullwidthLayout from './views/layouts/FullwidthLayout.vue';

// You can import more layouts here if needed in the future

export default {
  computed: {
    
    layoutComponent() {
      const layout = this.$route.meta.layout || 'DashboardLayout'; // Default layout
      return {
        DashboardLayout,
        FullwidthLayout, // 👈 Add this to allow layout switching
      }[layout] || DashboardLayout;  
    }
  }
};
</script>
