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

        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Nome
        </label>
        <input v-model="name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Digite seu nome">
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="userCpf">
            CPF
        </label>
        <input v-model="cpf"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userCpf" type="text" placeholder="Digite seu cpf">
    </div>

    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="userDataNascimento">
            Data de nascimento
        </label>
        <input v-model="dataDeNascimento"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userDataNascimento" type="text" placeholder="Digite sua data de nascimento">
    </div>

</template>
