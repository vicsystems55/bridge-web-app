<template>
      <div class="flex-1 ml-0 lg:ml-5 p-6">
        <div class="bg-white rounded-md shadow-md p-4 mb-6">
          <h2 class="text-xl font-semibold text-gray-700 mb-4">Logistics / Dashboard</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div class="bg-indigo-100 rounded-md p-4 flex items-center justify-between">
              <div>
                <div class="text-2xl font-bold text-indigo-700">42</div>
                <div class="text-sm text-gray-600">On route vehicles</div>
                <div class="text-xs text-green-500">+18.2% than last week</div>
              </div>
              <svg class="w-10 h-10 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-.004-3.998A2 2 0 019 17zm6 0a2 2 0 11-.004-3.998A2 2 0 0115 17zm-2-7a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <div class="bg-orange-100 rounded-md p-4 flex items-center justify-between">
              <div>
                <div class="text-2xl font-bold text-orange-700">8</div>
                <div class="text-sm text-gray-600">Vehicles with errors</div>
                <div class="text-xs text-red-500">-8.7% than last week</div>
              </div>
              <svg class="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div class="bg-pink-100 rounded-md p-4 flex items-center justify-between">
              <div>
                <div class="text-2xl font-bold text-pink-700">27</div>
                <div class="text-sm text-gray-600">Deviated from route</div>
                <div class="text-xs text-green-500">+4.3% than last week</div>
              </div>
              <svg class="w-10 h-10 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5M3 21v-4a2 2 0 012-2h6a2 2 0 012 2v4m0 0v-3a2 2 0 012-2h2a2 2 0 012 2v3m-6-3V7a2 2 0 012-2h2a2 2 0 012 2v7"></path></svg>
            </div>
            <div class="bg-teal-100 rounded-md p-4 flex items-center justify-between">
              <div>
                <div class="text-2xl font-bold text-teal-700">13</div>
                <div class="text-sm text-gray-600">Late vehicles</div>
                <div class="text-xs text-red-500">-2.5% than last week</div>
              </div>
              <svg class="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
          </div>
  
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div class="bg-white rounded-md shadow-md p-4">
              <h3 class="text-lg font-semibold text-gray-700 mb-3">Vehicles overview</h3>
              <div class="mb-2">
                <div class="flex justify-between text-sm text-gray-600 mb-1">
                  <span>On the way</span>
                  <span>39.3%</span>
                </div>
                <div class="bg-gray-200 rounded-full h-2.5">
                  <div class="bg-indigo-500 h-2.5 rounded-full" style="width: 39.3%"></div>
                </div>
              </div>
              <div class="mb-2">
                <div class="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Unloading</span>
                  <span>26.3%</span>
                </div>
                <div class="bg-gray-200 rounded-full h-2.5">
                  <div class="bg-green-500 h-2.5 rounded-full" style="width: 26.3%"></div>
                </div>
              </div>
              <div class="mb-2">
                <div class="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Loading</span>
                  <span>17.4%</span>
                </div>
                <div class="bg-gray-200 rounded-full h-2.5">
                  <div class="bg-yellow-500 h-2.5 rounded-full" style="width: 17.4%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Waiting</span>
                  <span>14.6%</span>
                </div>
                <div class="bg-gray-200 rounded-full h-2.5">
                  <div class="bg-gray-500 h-2.5 rounded-full" style="width: 14.6%"></div>
                </div>
              </div>
            </div>
  
            <div class="bg-white rounded-md shadow-md p-4">
              <div class="flex justify-between items-center mb-3">
                <h3 class="text-lg font-semibold text-gray-700">Shipment statistics</h3>
                <select class="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm">
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  </select>
              </div>
              <div class="h-48 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                Chart goes here (replace with your actual chart component)
              </div>
              <div class="flex justify-center mt-4 space-x-4 text-sm text-gray-600">
                <div class="flex items-center">
                  <span class="w-3 h-3 rounded-full bg-orange-500 mr-2"></span>
                  <span>Shipment</span>
                </div>
                <div class="flex items-center">
                  <span class="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                  <span>Delivery</span>
                </div>
              </div>
            </div>
          </div>
  
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="bg-white rounded-md shadow-md p-4">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Delivery Performance</h3>
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-600">On Time</span>
                <span class="text-base font-medium text-green-600">92%</span>
              </div>
              <div class="bg-gray-200 rounded-full h-2.5 mb-4">
                <div class="bg-green-500 h-2.5 rounded-full" style="width: 92%"></div>
              </div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-600">Delayed</span>
                <span class="text-base font-medium text-red-600">8%</span>
              </div>
              <div class="bg-gray-200 rounded-full h-2.5">
                <div class="bg-red-500 h-2.5 rounded-full" style="width: 8%"></div>
              </div>
            </div>
  
            <div class="bg-white rounded-md shadow-md p-4">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Reasons for delivery exceptions</h3>
              <ul class="space-y-2">
                <li class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">Traffic</span>
                  <span class="text-base font-medium text-gray-700">35%</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">Weather</span>
                  <span class="text-base font-medium text-gray-700">25%</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">Vehicle issues</span>
                  <span class="text-base font-medium text-gray-700">20%</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">Wrong address</span>
                  <span class="text-base font-medium text-gray-700">15%</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">Other</span>
                  <span class="text-base font-medium text-gray-700">5%</span>
                </li>
              </ul>
            </div>
  
            <div class="bg-white rounded-md shadow-md p-4">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">Orders</h3>
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-600">Received</span>
                <span class="text-base font-medium text-blue-600">120</span>
              </div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-600">Dispatched</span>
                <span class="text-base font-medium text-green-600">95</span>
              </div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-600">Pending</span>
                <span class="text-base font-medium text-orange-600">20</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-600">Cancelled</span>
                <span class="text-base font-medium text-red-600">5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>