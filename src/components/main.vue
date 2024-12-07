<template>
    <div class="cont">
        <div class="square">
            <img src="/src/decor.png" alt="" class="img">
            <div class="square2">
                <h1 class="h1">{{$t('maintext')}}</h1>
                <p class="p">{{$t('maindescription')}}</p>
                <button class="button">{{$t('mainbutton')}}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const {t} = useI18n({useScope: "global"})
</script>

<style scoped>
.cont {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-family: "Pasta";
}

.h1 {
    font-size: 2rem;
    text-align: center;
}

.p {
    margin-top: 20px;
    text-align: center;
    font-family: Pasta2;
}

.button {
    font-size: 2rem;
    padding: 0.2rem 2rem;
    color: rgb(139, 17, 113);
    border: 1px solid rgb(0, 0, 255);
    border-radius: 50vh;
    cursor: pointer;
    margin-top: 20px;
}
.button:hover {
    box-shadow: 0 4px 30px rgba(0, 255, 157, 0.1); /* МЕНЯЕММ */
}

.square {
    margin: 100px;
    width: 90rem;
    height: 60vh;
    transform: rotate(2deg);
    backdrop-filter: blur(17.6px);
    -webkit-backdrop-filter: blur(17.6px);
    border-radius: 16px;
    box-shadow: 0 4px 340px rgba(139, 17, 113, 0.1);
    background: rgba(139, 17, 113, 0.2);
    position: relative;
}

.square2 {
    width: 90rem;
    height: 60vh;
    transform: rotate(-2deg);
    border-radius: 16px;
    background: rgb(255, 255, 255);
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.square2::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    border: 2px dashed rgb(0, 0, 0);
    pointer-events: none;
    z-index: -1;
}

.img {
    width: 7rem;
    height: 7rem;
    position: absolute;
    top: -10px;
    left: -45px;
    z-index: 2;
}

@media (max-width: 1366px) {
    .square {
        margin: 80px;
        width: 80vw;
        height: 50vh;
    }

    .square2 {
        width: 80vw;
        height: 50vh;
    }
}

@media (max-width: 1024px) {
    .img {
        width: 5rem;
        height: 5rem;
    }
    .button {
        font-size: 1rem;
    }
    .p{
        font-size: 2rem;
    }
    .h1{
        font-size: 1rem;
    }
    .square {
        margin: 60px;
        width: 85vw;
        height: 45vh;
    }

    .square2 {
        width: 85vw;
        height: 45vh;
    }
}

    @media (max-width: 768px) {
        .img {
            width: 4rem;
            height: 4rem;
        }
        .button {
            font-size: 0.7rem;
        }
        .square {
            margin: 40px;
            width: 90vw;
            height: 40vh;
        }
        .p{
        font-size: 0.7rem;
    }
        .h1{
            font-size: 0.7rem;
        }

        .square2 {
            width: 90vw;
            height: 40vh;
        }
    }

@media (max-width: 540px) {
    .square {
        margin: 20px;
        width: 95vw;
        height: 35vh;
    }

    .square2 {
        width: 95vw;
        height: 35vh;
    }
}

@media (max-width: 480px) {
    .square {
        margin: 10px;
        width: 95vw;
        height: 30vh;
    }

    .square2 {
        width: 95vw;
        height: 30vh;
    }
}
</style>