// NavItem.vue
<template>
  <div
    class="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100"
    :class="active ? 'bg-indigo-100 text-indigo-500' : 'text-gray-700'"
  >
    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" :d="iconPath(icon)" />
    </svg>
    <span v-if="!collapsed">{{ label }}</span>
    <span v-if="badge && !collapsed"
      class="ml-auto bg-indigo-100 text-indigo-500 rounded-full px-2 py-px text-xs">{{ badge }}</span>
  </div>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    badge: {
      type: [String, Number],
      default: null
    },
    active: {
      type: Boolean,
      default: false
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    iconPath(name) {
      const icons = {
        home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0l6-6m-6-6l-2-2',
        menu: 'M4 6h16M4 10h16M4 14h16M4 18h16',
        mail: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        calendar: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
        'chart-bar': 'M9 17v-2m3 2v-4m3 4v-2m3-4v-2M5 21h14a2 2 0 002-2V7a2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
        'book-open': 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.523 5.754 18 7.5 18s3.332.523 4.5 1.247m0-13c1.168-.77 2.754-1.247 4.5-1.247s3.332.477 4.5 1.247v13c-1.168.77-2.754 1.247-4.5 1.247s-3.332-.477-4.5-1.247V6.253z'
      };
      return icons[name] || '';
    }
  }
};
</script>