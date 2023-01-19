<script setup lang="ts">
import { ref, nextTick, Ref } from 'vue'
import { Field, ErrorMessage } from 'vee-validate';

import { Api } from '../service/requestApi'
import { enderecoPadrao, IEndereco, ICepResponse } from '../Interface';

const cep = ref('')
let endereco: Ref<IEndereco> = ref(enderecoPadrao)

async function getData(cep: any) {

    if (cep.length === 8) {
        try {
            const { data }: ICepResponse = await Api.get(`${cep}/json`)
            endereco.value = data
            
            return data

        } catch (error) {
            console.error(error)
        }
    }

}


</script>

<template>


    <div class="mb-4">

        <label class="block text-gray-700 text-sm font-bold mb-2" for="userCep">
            CEP
        </label>
        <Field name="userCep" @keyup="getData(cep)" v-model="cep"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userCep" type="text" placeholder="Digite seu cep" />
        <ErrorMessage name="userCep" class="text-red-500 font-semibold" />
    </div>


    <div class="flex flex-col md:flex-row md:justify-start gap-2">
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="userUf">
                Estado
            </label>
            <Field name="userUf" v-model="endereco.uf"
                class="shadow appearance-none border rounded  w-full md:w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="userUf" type="text" placeholder="UF" />
            <ErrorMessage name="userUf" class="text-red-500 font-semibold"  />
        </div>

        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="userCidade">
                Cidade
            </label>

            <Field name="userCidade"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="userCidade" type="text" placeholder="Digite sua cidade" v-model="endereco.localidade" />
            <ErrorMessage name="userCidade" class="text-red-500 font-semibold" />
        </div>

        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="userBairro">
                Bairro
            </label>
            <Field name="userBairro" v-model="endereco.bairro"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="userBairro" type="text" placeholder="Digite o seu bairro" />
            <ErrorMessage name="userBairro" class="text-red-500 font-semibold" />
        </div>
    </div>

    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="userRua">
            Rua
        </label>
        <Field name="userRua" v-model="endereco.logradouro"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userRua" type="text" placeholder="Digite sua rua" />
        <ErrorMessage name="userRua" class="text-red-500 font-semibold" />
    </div>


    <div class="flex flex-col md:flex-row md:justify-start gap-2">

        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2 " for="userNumero">
                Numero
            </label>
            <Field name="userNumero"
                class="shadow appearance-none border rounded w-full md:w-25 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="userNumero" type="text" placeholder="Digite seu número" />
            <ErrorMessage name="userNumero" />
        </div>

        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="userComplemento">
                Complemento
            </label>
            <Field name="userComplemento"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="userComplemento" type="text" placeholder="Complemento" />
            <ErrorMessage name="userComplemento" />
        </div>
    </div>





</template>
