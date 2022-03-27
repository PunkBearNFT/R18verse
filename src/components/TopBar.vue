<template>
  <nav class="px-4 sm:px-4 py-4 rounded" style="background-color: rgb(245,248,255);">
    <div class="container mx-auto flex flex-wrap items-center justify-between w-11/12 lg:flex-row-reverse">
      <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
         
        >
                    <button
            data-collapse-toggle="mobile-menu-4"
            type="button"
            class="md:hidden text-gray-500 hover:bg-gray-100focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg text-sm p-2 inline-flex items-center"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                ]"
              >
                <a href="/" class="nav-a" aria-current="page">HOME</a>
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                ]"
              >
                <a href="/publish" class="nav-a">MARKETPLACE</a>
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                ]"
              >
                <a href="/collection" class="nav-a">COLLECTION</a>
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
      <div class="flex md:order-2"></div>
      <div
        class="hidden md:flex justify-center items-center w-full flex-1 md:w-auto md:order-1"
        id="mobile-menu-4"
      >
        <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
          <li>
            <a href="/" class="nav-a" aria-current="page">HOME</a>
          </li>
          <li>
            <a href="/publish" class="nav-a">MARKETPLACE</a>
          </li>
          <li>
            <a href="/collection" class="nav-a">COLLECTION</a>
          </li>
        </ul>
      </div>
      <button type="button" class="btn-medium">连接到电子钱包</button>
    </div>
  </nav>
</template>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>