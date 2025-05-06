<template>
    <div class="p-6 space-y-6">
      <!-- Page Title -->
      <div class="text-sm text-gray-400 mb-2">eCommerce / <span class="text-gray-800 font-semibold">Product List</span></div>
  
      <!-- Summary Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard title="In-store Sales" value="$5,345.43" orders="5k orders" change="+5.7%" positive />
        <SummaryCard title="Website Sales" value="$674,347.12" orders="21k orders" change="+12.4%" positive />
        <SummaryCard title="Discount" value="$14,235.12" orders="6k orders" />
        <SummaryCard title="Affiliate" value="$8,345.23" orders="150 orders" change="-3.5%" />
      </div>
  
      <!-- Filter & Actions -->
      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <h2 class="text-gray-700 font-semibold text-lg">Filter</h2>
          <div class="flex items-center space-x-2">
            <select class="border rounded px-3 py-2 text-sm">
              <option>7</option>
              <option>10</option>
              <option>25</option>
            </select>
            <button class="bg-gray-200 text-gray-500 px-4 py-2 rounded text-sm cursor-not-allowed">Export</button>
            <button class="bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700">+ Add Product</button>
          </div>
        </div>
  
        <!-- Table -->
        <div class="overflow-x-auto mt-4">
          <table class="min-w-full text-sm text-left border-t">
            <thead>
              <tr class="text-gray-600 bg-gray-50">
                <th class="px-4 py-2"><input type="checkbox" /></th>
                <th class="px-4 py-2">Product</th>
                <th class="px-4 py-2">Category</th>
                <th class="px-4 py-2">Stock</th>
                <th class="px-4 py-2">SKU</th>
                <th class="px-4 py-2">Price</th>
                <th class="px-4 py-2">Qty</th>
                <th class="px-4 py-2">Status</th>
                <th class="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="9" class="text-center text-gray-500 py-6">Loading...</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Pagination -->
        <div class="flex justify-between items-center px-4 py-3 border-t text-sm text-gray-600">
          <div>Showing 0 to 0 of 0 entries</div>
          <div class="space-x-2">
            <button class="bg-gray-100 px-3 py-1 rounded text-gray-400 cursor-not-allowed">Previous</button>
            <button class="bg-gray-100 px-3 py-1 rounded text-gray-400 cursor-not-allowed">Next</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Basic reusable summary card
  defineProps(['title', 'value', 'orders', 'change', 'positive'])
  
  const SummaryCard = defineComponent({
    props: ['title', 'value', 'orders', 'change', 'positive'],
    template: `
      <div class="bg-white p-4 rounded shadow flex items-center justify-between space-x-4">
        <div>
          <div class="text-gray-500 text-sm">{{ title }}</div>
          <div class="text-xl font-semibold text-gray-800">{{ value }}</div>
          <div class="text-gray-400 text-sm flex items-center space-x-1">
            <span>{{ orders }}</span>
            <span v-if="change" :class="positive ? 'text-green-500' : 'text-red-500'" class="ml-1 font-medium">
              {{ change }}
            </span>
          </div>
        </div>
        <div class="text-gray-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 10h2l.4 2M7 10h2l.4 2M11 10h2l.4 2M15 10h2l.4 2M19 10h2l.4 2" />
          </svg>
        </div>
      </div>
    `
  });
  </script>  