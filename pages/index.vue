<template>
  <div class="">
    <div class="mx-7 sm:mx-12">
      <div
        class="sm:w-11/12 text-4xl leading-relaxed sm:text-7xl sm:font-bold sm:leading-normal mt-10 sm:mt-20"
      >
        Bring joy in hearts through your donation
      </div>
      <div class="bg-red-100 transform -rotate-1 w-full rounded-3xl">
        <div
          class="h-148 sm:h-112 mt-16 sm:mt-20 w-full bg-red-500 transform -rotate-2 bg-gradient-to-r from-pink-500 via-red-400 to-red-300 rounded-3xl"
        ></div>
      </div>
      <div class="absolute top-160 mt-10 sm:mt-0 sm:top-120 left-16 sm:left-24">
        <div
          class="text-white text-3xl sm:text-4xl w-10/12 sm:w-2/5 sm:leading-snug font-bold"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </div>
        <div class="hidden sm:block text-white w-5/12 mt-7 leading-10 text-lg">
          Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
          sollicitudin, lorem quis bibend auctor, nisi elit consequa, nec
          sollicitudin, lorem quis bibend auctor, nisi elit consequa, nec
          sollicitudin, lorem quis bibend auctor
        </div>
        <div class="mt-5">
          <button
            class="flex items-center transition duration-500 ease-in-out rounded-full bg-white w-32 h-10 text-pink-600 font-bold text-lg focus:outline-none transform hover:scale-110 motion-reduce:transform-none mt-2"
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
      <img
        class="absolute left-0 sm:left-184 w-full sm:w-2/5 rounded-lg sm:right-24 sm:h-136 top-96 sm:top-96"
        src="https://images.pexels.com/photos/3213283/pexels-photo-3213283.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt="woman selling market"
      />
      <div class="flex flex-col sm:flex-row sm:mt-48 w-full">
        <div class="sm:w-1/2">
          <p
            class="font-bold text-5xl leading-snug sm:leading-relaxed sm:w-9/12 mt-10 sm:mt-24"
          >
            Lorem Ipsum is simply dummy text
          </p>
          <p class="mt-10 leading-loose text-xl sm:w-9/12">
            Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem quis bibend auctor, nisi elit consequa, nec
            sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
            cursus a sit amet mauris. Morbi accumsan ipsum velit.
          </p>
          <div class="flex space-x-4 mt-10 mb-10 sm:mb-0">
            <button>
              <svg
                class="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button>
              <svg
                class="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          class="flex sm:flex-wrap overflow-x-scroll sm:overflow-x-hidden w-full sm:-mr-48"
        >
          <div
            v-for="i in 4"
            :key="i"
            class="h-auto w-full sm:w-80 mx-2 sm:mx-10 flex-3 sm:flex-initial rounded-xl group hover:bg-red-500 hover:shadow-xl"
            :class="{ 'mt-16': i % 2 !== 0, 'mb-16': i % 2 === 0 }"
          >
            <img
              class="h-64 w-full object-cover rounded-t-xl"
              src="https://images.pexels.com/photos/1190208/pexels-photo-1190208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="happy children"
            />
            <div
              class="border border-red-100 shadow-xl rounded-b-xl group-hover:text-white group-hover:text-lg group-hover:font-bold group-hover:border-transparent"
            >
              <div class="mx-3 mb-4">
                <div class="flex space-x-2 mt-6">
                  <div class="text-lg">Elements 1</div>
                  <div class="text-lg">Elements 1</div>
                </div>
                <div class="my-4 text-xl font-medium leading-8 w-11/12">
                  lorem ipsum title title title title title title title
                  titletitle
                </div>
                <div class="">30.000 de 5O.000 FCFA</div>
                <div
                  class="h-2 w-full rounded-lg bg-red-300 my-4 group-hover:bg-white"
                ></div>
                <div class="my-4 mx-3">70 days left</div>
                <button
                  class="flex items-center group-hover:bg-white group-hover:text-red-500 transition duration-500 ease-in-out rounded-full bg-red-500 w-32 h-10 text-white font-bold text-lg focus:outline-none transform hover:scale-110 motion-reduce:transform-none mt-2"
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
          </div>
        </div>
      </div>
    </div>
    <div class="sm:mx-16">
      <div class="bg-red-500 w-full mt-20 pb-28">
        <div class="flex flex-col sm:flex-row mx-10 sm:mx-20 pt-20">
          <div class="sm:w-1/2">
            <div class="italic text-4xl text-white">Play your part</div>
            <div
              class="text-white text-5xl sm:text-5xl font-bold leading-relaxed sm:leading-snug sm:mt-5"
            >
              Your donation help Many people in need.
            </div>
          </div>
          <div>
            <div
              v-for="i in 3"
              :key="i"
              class="flex flex-col sm:flex-row sm:space-x-8 sm:ml-20 mt-8"
            >
              <img
                class="h-48 w-64"
                src="https://rightcause.qodeinteractive.com/wp-content/uploads/2020/03/h1-e-img3.jpg"
                alt="children"
              />
              <div class="">
                <div class="text-white text-lg leading-7 font-bold mt-4 mb-2">
                  May 13, 2020 hahotoe
                </div>
                <div class="text-3xl leading-snug text-white font-bold">
                  Together we can beat poverty
                </div>
                <div class="text-white mt-4">
                  <svg
                    class="text-white h-10 w-8 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p class="inline-block font-bold text-xl">Learn more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row sm:space-x-40 m-10 sm:m-0">
      <img
        class="sm:h-200 w-full sm:w-1/3 sm:-mt-124"
        src="https://images.pexels.com/photos/4260646/pexels-photo-4260646.jpeg?cs=srgb&dl=pexels-august-de-richelieu-4260646.jpg&fm=jpg"
        alt="father playing"
      />
      <div class="mt-20">
        <div class="italic text-4xl text-red-500">Play your part</div>
        <div class="mt-4 text-5xl sm:text-7xl font-bold leading-snug">
          If we Don't help save, theme who will ?
        </div>
        <div class="mt-12 text-xl font-medium leading-loose w-11/12">
          Lorem ipsum et lorem nisi quis Lorem Ipsum. Proin gravida nibh vel
          velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
          nisi elit consequa, nec sagittis sem nibh id elit. mauris.
        </div>
      </div>
    </div>
    <div class="mt-16 sm:mt-28 mx-10 sm:mx-40">
      <div class="flex flex-col sm:flex-row sm:space-x-32">
        <div>
          <div class="text-5xl font-bold leading-snug">Donation Goal</div>
          <div class="text-xl font-medium leading-snug mt-4 sm:w-11/12">
            Lorem ipsum et lorem nisi quis Lorem Ipsum. Proin gravida nibh vel
          </div>
        </div>
        <div class="text-red-500 text-7xl sm:text-9xl font-bold mt-10 sm:mt-0">
          $500.000
        </div>
      </div>
    </div>
    <div
      class="h-1.5 w-full bg-gray-200 mt-20"
      @mouseover="mouseover"
      @mouseleave="mouseleave"
    ></div>

    <div class="carousel-wrapper">
      <div class="carousel" style="width: 100%">
        <div
          v-for="(years, $yearsIndex) of carousel"
          :key="$yearsIndex"
          class="w-full"
        >
          <div class="flex items-center space-x-64 mx-9">
            <label
              v-for="(year, $yearIndex) of years"
              :key="$yearIndex"
              class="radio--btn"
              @mouseover="mouseover"
            >
              <input
                v-model="donationYearSelected"
                type="radio"
                name="donationYear"
                :value="year"
              />
              <div
                class="h-6 w-6 bg-white border-4 border-red-500 cursor-pointer"
              ></div>
              <div class="text-xl mt-4 font-medium -ml-3 cursor-pointer">
                {{ year }}
              </div>
            </label>
          </div>
        </div>
      </div>
      <button
        class="h-6 w-6 absolute -left-1 focus:outline-none text-indigo-50 hover:text-red-500"
        style="margin-top: -5.1rem"
        @click="changeSlide(-1)"
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        class="h-6 w-6 absolute -right-2 focus:outline-none text-indigo-50 hover:text-red-500"
        style="margin-top: -5.1rem"
        @click="changeSlide(1)"
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
    <div class="flex flex-col sm:flex-row mt-32 relative">
      <div class="sm:w-1/2">
        <img
          class="h-72 sm:h-148 w-full"
          src="https://cdn.pixabay.com/photo/2016/11/04/12/43/child-1797643_960_720.jpg"
        />
      </div>
      <div
        class="relative h-48 sm:h-148 sm:w-1/2 bg-red-500 pb-32 overflow-y-hidden"
      >
        <div v-for="i in 6" :key="i" class="flex mx-4 mt-8">
          <div class="text-white text-6xl font-bold mt-2">01</div>
          <div class="ml-10">
            <div class="text-4xl leading-relaxed font-bold text-white">
              Help Children Campaign
            </div>
            <div class="text-lg text-white mt-4 font-medium w-11/12">
              lorem ipsum zebra lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem Ipsum
            </div>
          </div>
        </div>
      </div>
      <div class="absolute w-full sm:w-1/2 sm:right-0 top-120 sm:top-124">
        <div class="flex">
          <div
            class="bg-gray-300 w-full h-24 flex flex-col items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          </div>
          <div
            class="bg-red-300 w-full h-24 flex flex-col items-center justify-center"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row sm:space-x-40 mt-20 mb-32">
      <div class="sm:w-1/2 mx-12 pt-16">
        <div class="text-red-500 italic text-4xl mb-4">Become Volunteer</div>
        <div class="font-bold text-3xl sm:text-6xl mb-5 sm:leading-relaxed">
          Signup Today, let's Do This !
        </div>
        <form action="">
          <div class="flex space-x-4">
            <input
              class="w-1/2 h-16 border border-gray-300 shadow-sm focus:outline-none focus:border-red-500"
              type="text"
              placeholder="Name"
            />
            <input
              class="w-1/2 h-16 border border-gray-300 shadow-sm focus:outline-none focus:border-red-500"
              type="email"
              placeholder="Email"
            />
          </div>
          <div class="mt-8">
            <select
              class="h-16 w-full bg-white border border-gray-300 focus:outline-none focus:border-red-500"
            >
              <option value="">Donations</option>
              <option value="">Volonteer</option>
            </select>
          </div>
          <div class="mt-8">
            <textarea
              id=""
              class="w-full border border-gray-300 focus:outline-none focus:border-red-500"
              name=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>

          <button
            class="transition duration-500 ease-in-out rounded-full bg-red-500 w-40 h-16 text-white font-bold text-lg focus:outline-none transform hover:scale-110 motion-reduce:transform-none mt-2"
          >
            Submit
          </button>
        </form>
      </div>
      <img
        class="h-112 sm:h-200 mt-20 sm:w-1/3 px-8 sm:px-0"
        src="https://images.pexels.com/photos/5905497/pexels-photo-5905497.jpeg?cs=srgb&dl=pexels-katerina-holmes-5905497.jpg&fm=jpg"
        alt=""
      />
    </div>
    <div class="bg-red-100">
      <div>
        <div class="pt-10 sm:pt-40 mx-10 sm:mx-32">
          <div class="flex flex-col sm:flex-row">
            <div class="sm:mr-16">
              <div class="italic text-red-500 text-2xl leading-snug">
                Play your part
              </div>
              <div
                class="font-extrabold text-4xl leading-relaxed sm:text-6xl sm:leading-snug sm:w-11/12"
              >
                These people need us. join the rigtht cause
              </div>
              <div class="flex flex-col sm:flex-row sm:space-x-16 mt-8">
                <div class="text-lg leading-10 font-medium sm:w-1/2">
                  This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequa, nec sagittis sem nibh id
                  elit. Duis sed odio sit amet nibh vulputate cursus a sit amet
                  mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
                  tincidunt auctor a ornare odio. Sed non mauris vitae erat
                  consequat auctor eu in elit. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeoauris
                  in erat
                </div>
                <div
                  class="text-lg leading-10 font-medium mt-5 sm:mt-0 sm:w-1/2"
                >
                  This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequa Show you care, give a
                  share. There is clarity in charity. What have you given today?
                  Potential meets opportunity. There’s no place like home.
                </div>
              </div>
            </div>
            <div class="mt-2 sm:mt-0">
              <img
                class="h-96 sm:h-118 w-96 rounded-t-lg"
                src="https://images.pexels.com/photos/1190208/pexels-photo-1190208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="children in joy"
              />
              <div class="bg-red-500 h-48 sm:w-96 px-8 pt-6">
                <div
                  class="text-white text-2xl sm:text-3xl font-bold leading-relaxed"
                >
                  By giving a little you will help out a lot
                </div>
                <div class="flex space-x-2 mt-5">
                  <div class="text-xl leading-snug font-bold text-white">
                    Devenez volontaire
                  </div>

                  <svg
                    class="text-white h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-red-100">
      <div class="mx-5 sm:mx-24">
        <div
          class="flex items-center justify-center bg-white h-32 sm:h-64 w-full shadow-xl relative top-16 sm:top-32"
        >
          <div class="text-red-500 font-bold text-2xl sm:text-8xl">
            Let's end Poverty Together
          </div>
        </div>
      </div>
    </div>

    <div class="bg-red-500 h-auto w-full">
      <div class="pt-32 sm:pt-64 mx-4 sm:mx-24">
        <div class="flex flex-col sm:flex-row">
          <div class="text-5xl font-bold text-white sm:hidden">
            Get in Touch
          </div>
          <div class="w-11/12">
            <div class="text-5xl font-bold text-white hidden sm:block">
              Get in Touch
            </div>
            <div class="text-white text-2xl font-medium mt-8 sm:w-96">
              When people help people, change happens. What have you given
              today?
            </div>
            <div class="text-white mt-5 text-xl">Call :023232323232</div>
            <div class="text-white mt-5 text-lg">
              Email: samaritanfund@gmail.com
            </div>
          </div>
          <div class="flex flex-wrap mt-10 sm:mt-0">
            <img
              v-for="i in 6"
              :key="i"
              class="h-72 sm:h-48 w-full sm:w-48 m-2"
              src="https://images.pexels.com/photos/4384288/pexels-photo-4384288.jpeg?cs=srgb&dl=pexels-kalz%F0%9F%93%B8%F0%9F%87%BA%F0%9F%87%AC-4384288.jpg&fm=jpg"
              alt="children in joy"
            />
          </div>
        </div>
      </div>
      <div
        class="mt-8 sm:mt-32 mx-8 sm:mx-32 flex flex-col sm:flex-row text-white pb-5 sm:pb-8"
      >
        <div class="flex flex-col sm:flex-row sm:space-x-10 sm:flex-1">
          <div class="sm:text-2xl font-medium">About</div>
          <div class="sm:text-2xl font-medium">Donations</div>
          <div class="sm:text-2xl font-medium">Volonteer</div>
        </div>
        <div class="mt-5 sm:mt-0">
          © Copyright {{ currentYear }} samaritanfund
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      donationYearSelected: null,
      showChevron: false,
      carousel: {
        0: [2021, 2020, 2021, 2022, 2023],
        1: [2024, 2025, 2026, 2027, 2028],
      },
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
  methods: {
    changeSlide(delta) {
      const carousel = this.$el.querySelector('.carousel')
      const width = carousel.offsetWidth
      console.log(carousel.scrollLeft)
      carousel.scrollTo(carousel.scrollLeft + width * delta, 0)
    },
    mouseover() {
      console.log(1)
      this.showChevron = true
    },
    mouseleave() {
      this.showChevron = false
    },
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
.video-background {
  position: relative;
  height: 600px;
  width: 88%;
  background-color: #dfdbe5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='16' viewBox='0 0 20 16'%3E%3Cg fill='%23cf2420' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 .04C2.6.22 4.99 1.1 7 2.5A13.94 13.94 0 0 1 15 0h4c.34 0 .67.01 1 .04v2A12 12 0 0 0 7.17 12h5.12A7 7 0 0 1 20 7.07V14a5 5 0 0 0-3-4.58A5 5 0 0 0 14 14H0V7.07c.86.12 1.67.4 2.4.81.75-1.52 1.76-2.9 2.98-4.05C3.79 2.83 1.96 2.2 0 2.04v-2z'/%3E%3C/g%3E%3C/svg%3E");
  left: 10rem;
}

.carousel {
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  @apply relative;
  @apply -top-3.5;
}

.carousel > * {
  flex: 1 0 100%;
  scroll-snap-align: start;
}

.radio--btn input[type='radio'] {
  display: none;
}

.radio--btn input[type='radio']:checked + div {
  @apply bg-red-500;
}
</style>
