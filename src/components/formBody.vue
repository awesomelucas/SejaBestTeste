<script setup lang="ts">
import formStepTwoVue from './formStepTwo.vue';
import formStepThree from './formStepThree.vue'
import FormStepOne from './formStepOne.vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { ref, reactive, computed, render } from 'vue';


const currentStep = ref(0);
const end = ref('')

const schemas = [
    yup.object({
        username: yup.string().required("Nome é um campo obrigatorio *"),
        userCpf: yup.string().required("CPF é um campo obrigatorio *").matches(/.{11,}/, "CPF deve conter 11 digitos *"),
        userDataNascimento: yup.date().required("Data de nascimento é um campo obrigatorio *"),
        // userCep: yup.string().required("CEP é um campo obrigatorio").matches(/.{8,}/, "CEP deve conter 8 digitos")
    }),
    yup.object({
        userCep: yup.string().required("CEP é um campo obrigatorio *").matches(/.{8,}/, "CEP deve conter 8 digitos *"),
        userUf: yup.string().required("UF é um campo obrigatorio *").matches(/.{2,}/, "Formato incorreto *"),
        userCidade: yup.string().required("Cidade é um campo obrigatorio *"),
        userBairro: yup.string().required("Bairro é um campo obrigatorio *"),
        userRua: yup.string().required("Rua é um campo obrigatorio *"),
        userNumero: yup.string().required("Numero é um campo obrigatorio *"),
    }),
    yup.object({
        userSalario: yup.string().required("Salário é um campo obrigatorio *"),

    }),
];

const currentSchema = computed(() => {
    return schemas[currentStep.value];
});

function nextStep(values: any) {

    if (currentStep.value === 3) {
        return end.value = 'inProgres';

    }

    currentStep.value++;
}

function prevStep() {
    if (currentStep.value <= 0) {
        return;
    }

    currentStep.value--;
}

function start() {

    end.value='' 
    currentStep.value = 0;
}

</script>

<template>
    <section v-if="end !== 'inProgres'"
        class="transition ease-in duration-700 conteiner bg-orange-50 rounded-2xl w-10/12 md:w-10/12 lg:w-7/12 p-5">

        <h2 v-if="currentStep !== 3" class="text-2xl text-gray-700 text-center pt-6 font-bold">Simulação</h2>
        <h3 v-if="currentStep === 3" class="text-2xl text-orange-500 text-center font-bold">Confirme suas informações
        </h3>
        <Form @submit="nextStep" :validation-schema="currentSchema" keep-values v-slot="{ handleSubmit, values }"
            class="rounded px-8 pt-6 pb-8 mb-4 flex flex-col ">
            <FormStepOne v-if="currentStep === 0" class="transition ease-in duration-700" />

            <formStepTwoVue v-if="currentStep === 1" class="transition ease-in duration-700" />

            <formStepThree v-if="currentStep === 2" class="transition ease-in duration-700" />


            <div v-if="currentStep === 3" class="flex flex-col gap-3 md:flex-row md:justify-around">

                <div>
                    <h4 class=" text-lg text-orange-500 font-medium mb-4">Informações Pessoais</h4>
                    <p class="text-sm">Nome: {{ values.username }}</p>
                    <p class="text-sm">CPF: {{ values.userCpf }}</p>
                    <p class="text-sm">Data de nascimento: {{ values.userDataNascimento }}</p>
                    <p class="text-sm">Salário: R$ {{ values.userSalario }},00</p>
                </div>

                <div>
                    <h4 class="text-lg text-orange-500 font-medium mb-4">Endereço</h4>
                    <p class="text-sm">CEP: {{ values.userCep }}</p>
                    <p class="text-sm">UF: {{ values.userUf }}</p>
                    <p class="text-sm">Cidade: {{ values.userCidade }}</p>
                    <p class="text-sm">Bairro: {{ values.userBairro }}</p>
                    <p class="text-sm">Rua: {{ values.userRua }}</p>
                    <p class="text-sm">Numéro: R$:{{ values.userNumero }},00</p>
                    <p class="text-sm">Complemento: {{ values.userComplemento }}</p>
                </div>

            </div>

            <div class="flex flex-col">
                <button v-if="currentStep === 3" type="submit"
                    class="text-lg shadow w-1/2 self-center bg-orange-400 hover:bg-orange-500 py-2 px-4 mt-10 focus:outline-none rounded-3xl text-white font-bold">
                    Enviar
                </button>

                <button v-if="currentStep !== 3" type="submit"
                    class="text-lg shadow w-40 self-center bg-orange-400 hover:bg-orange-500 py-2 px-4  focus:outline-none rounded-3xl text-white font-bold">
                    Avançar
                </button>

                <button v-if="currentStep !== 0" type="button" @click="prevStep" class="text-sm mt-6">
                    Voltar
                </button>
            </div>
        </Form>
    </section>

    <section v-if="end === 'inProgres'" class="flex flex-col gap-10">
        <h2 class="text-2xl text-orange-500 text-center font-bold">Deseja realizar uma nova simulação?</h2>
        <button @click="start()" type="submit"
            class="text-lg shadow w-40 self-center bg-orange-400 hover:bg-orange-500 py-2 px-4  focus:outline-none rounded-3xl text-white font-bold">
            Iniciar
        </button>
    </section>


</template>
