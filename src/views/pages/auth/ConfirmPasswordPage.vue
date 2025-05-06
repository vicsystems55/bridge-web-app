<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
      <!-- Background Accent (Optional Decorative Squares) -->
      <div class="absolute top-10 left-10 w-40 h-40 bg-purple-100 rounded-xl opacity-30 z-0"></div>
      <div class="absolute bottom-10 right-10 w-32 h-32 bg-purple-100 rounded-xl opacity-30 z-0"></div>
  
      <!-- Login Card -->
      <div class="relative z-10 bg-white shadow-lg rounded-lg w-full max-w-md p-8 space-y-6">
        <!-- Logo and Heading -->
        <div class="text-center">
          <div class="text-purple-600 text-3xl font-bold">💜 Vuexy</div>
          <h2 class="mt-4 text-2xl font-semibold text-gray-800">Welcome to Vuexy! 👋</h2>
          <p class="text-gray-500 text-sm">Please sign-in to your account and start the adventure</p>
        </div>
  
        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Email or Username</label>
            <input
              v-model="email"
              type="text"
              required
              placeholder="Enter your email or username"
              class="w-full mt-1 px-4 py-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
  
          <div>
            <div class="flex justify-between items-center">
              <label class="block text-sm font-medium text-gray-700">Password</label>
              <a href="#" class="text-sm text-purple-500 hover:underline">Forgot Password?</a>
            </div>
            <div class="relative">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :fill="showPassword ? 'none' : 'currentColor'" viewBox="0 0 24 24" stroke="currentColor">
                  <path v-if="showPassword" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path v-if="showPassword" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.628 2.042-1.927 3.773-3.65 4.95M15 12a3 3 0 01-6 0" />
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.974 9.974 0 012.221-3.592M21 21L3 3" />
                </svg>
              </button>
            </div>
          </div>
  
          <div class="flex items-center">
            <input id="remember" type="checkbox" class="h-4 w-4 text-purple-600 border-gray-300 rounded" />
            <label for="remember" class="ml-2 block text-sm text-gray-700">Remember Me</label>
          </div>
  
          <button type="submit" class="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">Sign in</button>
        </form>
  
        <!-- Footer -->
        <div class="text-center text-sm text-gray-500">
          New on our platform?
          <a href="#" class="text-purple-600 hover:underline">Create an account</a>
        </div>
  
        <div class="flex items-center justify-between my-4">
          <hr class="w-full border-gray-300" />
          <span class="px-2 text-sm text-gray-400">or</span>
          <hr class="w-full border-gray-300" />
        </div>
  
        <!-- Social Buttons -->
        <div class="flex justify-center space-x-4">
          <button class="bg-gray-100 p-2 rounded hover:bg-gray-200">
            <img src="https://www.svgrepo.com/show/157806/facebook.svg" class="h-5 w-5" alt="Facebook" />
          </button>
          <button class="bg-red-100 p-2 rounded hover:bg-red-200">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="h-5 w-5" alt="Google" />
          </button>
          <button class="bg-blue-100 p-2 rounded hover:bg-blue-200">
            <img src="https://www.svgrepo.com/show/157818/twitter.svg" class="h-5 w-5" alt="Twitter" />
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  const password = ref('')
  const showPassword = ref(false)
  
  const handleSubmit = () => {
    alert(`Logging in with ${email.value}`)
  }
  </script>
  