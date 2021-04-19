<template>
  <div
    class="container h-screen mx-auto flex flex-col justify-center items-center"
  >
    <div class="ml-2 logo flex flex-col items-center space-y-2">
      <img
        src="https://www.vultr.com/favicon/android-chrome-512x512.png"
        alt=""
        srcset=""
        class="h-12"
      />
      <h3 class="mt-4 font-bold text-2xl text-gray-900">
        Sign in to your account
      </h3>
      <p class="text-gray-600 text-sm">
        Or
        <span class="text-sm text-blue-700">start your 14-day free trial</span>
      </p>
    </div>
    <div
      class="card mt-4 flex flex-col space-y-4 px-8 py-8 w-1/3 rounded-lg bg-white border border-gray-200 items-center justify-center"
    >
      <div class="flex flex-col w-full">
        <label id="email" class="text-gray-700 text-sm">Email address</label>
        <input
          aria-labelledby="email"
          type="text"
          class="rounded border-gray-300 bg-white shadow outline-none border-opacity-75 focus:outline-none focus:ring"
        />
      </div>
      <div class="flex flex-col w-full">
        <label id="password" class="text-gray-700 text-sm">Password</label>
        <input
          aria-labelledby="password"
          type="password"
          class="rounded border-gray-300 bg-white shadow border-opacity-75 outline-none focus:outline-none focus:ring"
        />
      </div>

      <div class="flex w-full justify-between">
        <div class="flex space-x-2 items-center">
          <input
            aria-labelledby="remember-me"
            type="checkbox"
            class="rounded border-gray-300 border-opacity-75 bg-white shadow outline-none focus:outline-none focus:ring"
          />
          <label id="remember-me" class="text-sm text-gray-700"
            >Remember me</label
          >
        </div>
        <button
          href="#"
          class="text-blue-700 text-sm outline-none focus:outline-none focus:ring"
        >
          Forgot your password?
        </button>
      </div>

      <div class="w-full">
        <button
          class="h-12 w-full rounded-lg text-sm text-white text-center bg-blue-700"
        >
          Sign in
        </button>
      </div>

      <div class="flex w-full items-center">
        <hr class="bg-gray-500 h-0.5 w-1/3" />
        <p class="text-gray-500 text-sm text-center w-1/3">Or continue with</p>
        <hr class="bg-gray-500 h-0.5 w-1/3" />
      </div>

      <div class="w-full flex space-x-2">
        <button
          aria-label="facebook login"
          class="rounded-lg border-gray-300 flex justify-center items-center border w-1/3 h-10 shadow hover:bg-blue-700 text-gray-500 hover:text-gray-100 outline-none border-opacity-75 focus:outline-none focus:ring"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
            />
          </svg>
        </button>
        <button
          aria-label="twitter login"
          class="hover:bg-blue-700 text-gray-500 hover:text-gray-100 rounded-lg border-gray-300 flex justify-center items-center border w-1/3 h-10 shadow outline-none border-opacity-75 focus:outline-none focus:ring"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
            />
          </svg>
        </button>
        <button
          aria-label="google login"
          class="hover:bg-blue-700 text-gray-500 hover:text-gray-100 rounded-lg border-gray-300 flex justify-center items-center border w-1/3 h-10 shadow border-opacity-75 outline-none focus:outline-none focus:ring"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
