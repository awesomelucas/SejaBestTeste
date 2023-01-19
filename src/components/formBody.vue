<script lang="ts">
import { ref } from 'vue'
import formStepTwoVue from './formStepTwo.vue';
import formStepThree from './formStepThree.vue'
import FormStepOne from './formStepOne.vue';

const step = ref(0)

export default {
    data() {
        return {
            step: 0,
        }
    },
    components: {
        FormStepOne,
        formStepThree,
        formStepTwoVue
    }
}
</script>

<template>
    <section class="conteiner bg-orange-50 rounded-t-3xl self-end">

        <h2 class="text-2xl text-gray-700 text-center pt-6 font-bold">Simulação</h2>

        <form action="" class="rounded px-8 pt-6 pb-8 mb-4">
            <FormStepOne />
            <formStepTwoVue />
            <formStepThree />

            <div class="flex justify-center">
                <button id="btn" type="submit"
                    class="text-lg shadow w-1/2 self-center bg-orange-400 hover:bg-orange-500 py-2 px-4 mt-4 focus:outline-none rounded-3xl text-white font-bold">Avançar</button>
            </div>

        </form>


    </section>
</template>
