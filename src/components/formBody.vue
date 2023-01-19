<script setup lang="ts">
import formStepTwoVue from './formStepTwo.vue';
import formStepThree from './formStepThree.vue'
import FormStepOne from './formStepOne.vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { ref, reactive, computed } from 'vue';
import {formFunctions} from '../stores/store'

const formFunction = formFunctions()
const data = formFunction.schemas

const currentSchema = computed(() => {
  return data;
});
</script>

<template>
    <section class="conteiner bg-orange-50 rounded-t-3xl self-end">

        <h2 class="text-2xl text-gray-700 text-center pt-6 font-bold">Simulação</h2>

        <Form @submit="formFunction.nextStep"
      :validation-schema="currentSchema"
      keep-values
      v-slot="{ handleSubmit, values }" class="rounded px-8 pt-6 pb-8 mb-4">
            <FormStepOne  v-if="formFunction.count === 0" />

            <formStepTwoVue v-if="formFunction.count === 1" />

            <formStepThree v-if="formFunction.count === 2"/>

            <div class="flex justify-center" v-if="formFunction.count !== 2" @click="formFunction.nextStep">
                <button id="btn" type="button"
                    class="text-lg shadow w-1/2 self-center bg-orange-400 hover:bg-orange-500 py-2 px-4 mt-4 focus:outline-none rounded-3xl text-white font-bold">Avançar</button>
            </div>

            <div class="flex justify-center" v-if="formFunction.count === 2">
                <button id="btn" type="button"
                    class="text-lg shadow w-1/2 self-center bg-orange-400 hover:bg-orange-500 py-2 px-4 mt-4 focus:outline-none rounded-3xl text-white font-bold">Enviar</button>
            </div>

            <pre>{{ values }}</pre>
        </Form>


    </section>
</template>
