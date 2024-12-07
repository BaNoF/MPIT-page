<template>
    <div class="cont3">
        <span class="span" id="spans">{{$t('more')}}</span>
        <div class="sqare3">
            <div class="content">
                <h2 class="title">{{$t('moreinfo1')}} <br> {{$t('moreinfo2')}}</h2>
                <p class="description">{{$t('moredesc1')}} <br> {{$t('moredesc2')}}</p>
                <form action="https://travel-ykt.ru/dostoprimechatelnosti" target="_blank">
                <button class="button">{{$t('morebutton')}}</button>
            </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: "global" })
</script>

<style scoped>
.cont3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Pasta;
    position: relative;
    text-align: center;
    padding: 200px 0;
}

.span {
    font-family: Pasta;
    font-size: 4rem;
    order: 1;
}

.sqare3 {
    width: 75rem;
    height: 39rem;
    background-image: url('/src/addback.jpg');
    background-size: cover; 
    background-position: center; 
    transition: background-color 0.5s ease;
    border-radius: 25px;
    order: 2; 
    display: flex; 
    align-items: flex-start; 
    padding: 20px;
}

.content {
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 150px 0 150px 40px;
    color: black;
}

.title {
    font-size: 1.5rem;
    margin: 0;
}

.description {
    font-size: 1rem;
    font-family: Pasta2;
    font-weight: 900;
    margin: 10px 0; 
}

.button {
    padding: 10px 20px;
    background-color: #1f1f1f;
    color: white;
    border: none; 
    border-radius: 5px;
    cursor: pointer;
}

@media (max-width: 768px) {
    .span {
        font-size: 2rem;
    }

    .sqare3 {
        width: 90%;
        height: auto;
        padding: 10px;
    }

    .content {
        align-items: center; 
        text-align: center;
    }

    .title {
        font-size: 1.2rem; 
    }

    .description {
        font-size: 0.9rem; 
    }

    .button {
        padding: 8px 16px;
    }
}
</style>