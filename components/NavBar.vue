<template>
  <div>
    <div class="flex items-center justify-between mt-4 mx-5 sm:mx-0">
      <div class="sm:ml-16">
        <div class="text-3xl">logo</div>
      </div>
      <button
        class="h-10 w-10 focus:outline-none sm:hidden"
        @click="showMenu = !showMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </button>

      <div class="hidden sm:flex sm:space-x-12">
        <NuxtLink
          v-for="(item, $itemIndex) in menuItems"
          :key="$itemIndex"
          to="/"
          class="text-base font-medium"
        >
          {{ $t(`${item}`) }}
        </NuxtLink>
      </div>
      <div class="hidden sm:block mr-16">
        <button
          class="flex items-center transition duration-500 ease-in-out rounded-full bg-red-500 w-32 h-10 text-white font-bold text-lg focus:outline-none transform hover:scale-110 motion-reduce:transform-none mt-2"
        >
          <svg
            class="h-6 w-6 ml-4 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            />
          </svg>
          Donner
        </button>
      </div>
    </div>
    <div
      v-show="showMenu"
      class="absolute bg-red-400 z-10 h-3/5 w-full sm:hidden"
    >
      <div class="mx-6 flex flex-col pt-5">
        <NuxtLink
          v-for="(item, $itemIndex) in menuItems"
          :key="$itemIndex"
          to="/"
          class="text-xl font-bold text-white leading-snug my-4"
        >
          {{ $t(`${item}`) }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      menuItems: ['home', 'discover', 'about-us', 'contact-us'],
      showMenu: false,
      //   {
      //     item: this.$t('home'),
      //   },
      //   {
      //     item: this.$t('discover'),
      //   },
      //   {
      //     item: this.$t('about-us'),
      //   },
      //   {
      //     item: this.$t('contact-us'),
      //   },
      // ],
    }
  },
}
</script>
