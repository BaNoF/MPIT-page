<template>
  <button id="gotop" @click="gotopfunc" v-show="isButtonVisible">
    <box-icon type='solid' name='up-arrow'></box-icon>
  </button>
  <Login />
  <Headers />
  
  <!-- Условное отображение компонентов -->
  <Mains v-if="!showKek" />
  <Section v-if="!showKek" />
  <Add v-if="!showKek" />
  <Contats v-if="!showKek" />
  
  <!-- Компонент Kek отображается, если showKek истинно -->
  <Kek v-if="showKek" />

  <Footers @toggleKek="toggleKek" /> <!-- Слушаем событие toggleKek -->
  <div class="bg-[#111827] text-white">
    <span>Выбрать язык: </span>
    <button @click="setLanguage('ru')" class="pr-2 hover:text-sky-700">Русский</button>
    <button @click="setLanguage('en')" class="hover:text-sky-700">English</button>
  </div>

  <!-- Вставляем дочерний компонент и слушаем событие -->
  <MyButton @toggleKek="toggleKek" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Login from '/src/components/loading.vue';
import Headers from '/src/components/header.vue';
import Mains from '/src/components/main.vue';
import Section from '/src/components/section.vue';
import Footers from '/src/components/footer.vue';
import Contats from '/src/components/contacts.vue';
import Add from '/src/components/add.vue';
import Kek from '/src/components/rule.vue'; // Импортируйте ваш компонент
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const setLanguage = (lang) => {
    locale.value = lang; 
    localStorage.setItem('lang', lang); 
};

const isButtonVisible = ref(false);
const showKek = ref(false); // Состояние для управления отображением компонента Kek

const toggleKek = () => {
    showKek.value = !showKek.value; // Переключаем состояние
    console.log(showKek.value); // Проверка состояния
};

const scrollFunction = () => {
  isButtonVisible.value = document.documentElement.scrollTop > 250;
};

const gotopfunc = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', scrollFunction);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollFunction);
});
</script>

<style scoped>
        @font-face {
            font-family: "Pasta2";
            src: url("/src/circe_regular.woff2") format("woff2");
            font-weight: normal;
            font-style: normal;
        }


@font-face {
  font-family: "Pasta"; 
  src: url("/src/pasta.ttf") format("truetype"); 
  font-style: normal; 
  font-weight: normal; 
}
#gotop {
  position: fixed;
  bottom: 2rem;
  right: 3rem;
  z-index: 1000;
  font-size: 1.8rem;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: blue;
  padding-left: 10px;
  padding-right: 10px;
  transition: 0.5s;
}
#gotop:hover {
  background-color: rgb(0, 140, 255);
}
@media (max-width: 768px) {
  #gotop {
    bottom: 5rem;
    right: 1rem;
  }
}
</style>