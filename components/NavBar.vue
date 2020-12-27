<template>
  <div class="flex items-center justify-between mt-4 mx-5 sm:mx-0">
    <div class="sm:ml-16">
      <div class="text-3xl">logo</div>
    </div>
    <button class="h-10 w-10 sm:hidden">
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
        to="localPath('/','fr')"
        class="text-base font-medium"
      >
        {{ $t(`${item}`) }}
      </NuxtLink>
    </div>
    <div class="hidden sm:block mr-16">
      <button
        class="transition duration-500 ease-in-out rounded-full bg-red-500 w-32 h-10 text-white font-bold text-lg focus:outline-none transform hover:scale-110 motion-reduce:transform-none mt-2"
      >
        Donner
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      menuItems: ['home', 'discover', 'about-us', 'contact-us'],
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
