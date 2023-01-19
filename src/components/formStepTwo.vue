<script lang="ts">
import { ref } from 'vue'
import { Api } from '../service/requestApi'
import { enderecoPadrao, IEndereco } from '../Interface/index'
const step = ref(0)

export default {
    data() {
        return {
            step: 0,
            cep: '',
            name: '',
            cpf: '',
            dataDeNascimento: '',
            salario: '',
            numero: '',
            complemento: ''
        }
    },
    setup() {
        let endereco: any = ref(enderecoPadrao)
        async function getData(cep: string) {

            if (cep.length === 8) {
                try {
                    const response = await Api.get(`${cep}/json`)
                    endereco.value = response.data

                    return response.data

                } catch (error) {
                    console.error(error)
                }
            }

        }
        return {
            getData,
            endereco
        }
    }
}





</script>

<template>


    <div class="mb-4">

        <label class="block text-gray-700 text-sm font-bold mb-2" for="userCep">
            CEP
        </label>
        <input v-model="cep" @keyup="getData(cep)"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usercp" type="text" placeholder="Digite seu cep">
    </div>


    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="userCidade">
            Cidade
        </label>

        <input v-model="endereco.localidade"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userCidade" type="text" placeholder="Digite sua cidade">
    </div>

    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="userRua">
            Rua
        </label>
        <input v-model="endereco.logradouro"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userRua" type="text" placeholder="Digite sua rua">
    </div>

    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="userDataNascimento">
            Bairro
        </label>
        <input v-model="endereco.bairro"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userDataNascimento" type="text" placeholder="Digite o seu bairro">
    </div>

    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="userDataNascimento">
            Estado
        </label>
        <input v-model="endereco.uf"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userDataNascimento" type="text" placeholder="UF">
    </div>

    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="userDataNascimento">
            Numero
        </label>
        <input v-model="numero"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userDataNascimento" type="text" placeholder="Digite seu número">
    </div>

    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="userDataNascimento">
            Complemento
        </label>
        <input v-model="complemento"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userDataNascimento" type="text" placeholder="Complemento">
    </div>




</template>
