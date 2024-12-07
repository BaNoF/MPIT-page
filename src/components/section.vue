<template>
  <div class="cont2">
    <span class="span" id="spans">{{$t('toursel')}}</span>
  <swiper :pagination="true" :navigation="isMobile" class="mySwiper" :breakpoints="breakpoints"  id="Test">
    <swiper-slide>
      <div class="card bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
        <img src="/src/ZYAAAgHYyeA-1920.jpg" alt="Avatar 1" class="rounded-full w-24 h-24 mb-4">
        <h2 class="text-lg font-bold">{{$t('summertour')}}</h2>
        <p class="text-center">{{$t('summerdesc')}}</p>
        <a class="mt-4 bg-blue-500 text-white py-2 px-4 rounded" href="/src/zakaz1.html">{{$t('swabutton')}}</a>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
        <img src="/src/ZYAAAgHYyeA-1920.jpg" alt="Avatar 2" class="rounded-full w-24 h-24 mb-4">
        <h2 class="text-lg font-bold">{{$t('wintertour')}}</h2>
        <p class="text-center">{{$t('winterdesc')}}</p>
        <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onclick="window.location.href = '/';">{{$t('swabutton')}}</button>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
        <img src="/src/ZYAAAgHYyeA-1920.jpg" alt="Avatar 3" class="rounded-full w-24 h-24 mb-4">
        <h2 class="text-lg font-bold">{{$t('autumntour')}}</h2>
        <p class="text-center">{{$t('autumndesc')}}</p>
        <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onclick="window.location.href = '/';">{{$t('swabutton')}}</button>
      </div>
    </swiper-slide>
  </swiper>
</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const {t} = useI18n({useScope: "global"})
</script>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      isMobile: false,
      breakpoints: {
        640: {
          slidesPerView: 1, 
          navigation: true,
        },
        1024: {
          slidesPerView: 3,
          navigation: false, 
        },
      },
    };
  },
  mounted() {
    this.isMobile = window.innerWidth < 640; 
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 640;
    },
  },
}
</script>

<style scoped>
  .text-center{
    font-family: Pasta2;

  }
#Test{
  font-family: Pasta;
}
.span{
  font-family: pasta;
}
.mySwiper {
  width: 100%;
  height: 100%;
}
.card {
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.05);
}
.cont2{
  text-align: center;
  padding: 200px 0 200px 0;
}
.span{
  font-size: 4rem;
}
@media (max-width: 768px) {
    .span{
      font-size: 2rem;
    }
}
</style>