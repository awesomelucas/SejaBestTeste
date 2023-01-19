<script lang="ts">
import { ref} from 'vue'
import { Api } from '../service/requestApi'
import {enderecoPadrao, IEndereco} from '../Interface/index'
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
        let endereco:any = ref(enderecoPadrao)
        async function getData(cep:string) {

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
        return{
            getData,
            endereco
        }
    }
}





</script>

<template>
    <section class="conteiner bg-orange-50 rounded-t-3xl self-end">

        <h2 class="text-2xl text-gray-700 text-center pt-6 font-bold">Simular</h2>

        <form action="" class="rounded px-8 pt-6 pb-8 mb-4">
            <div v-if="step === 0">
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

            </div>
            <!-- step2 -->

            <div v-if="step === 1">
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

            </div>


            <div class="flex justify-center">
                <button @click="step++" id="btn" type="button"
                    class="text-lg shadow w-1/2 self-center bg-orange-400 hover:bg-orange-500 py-2 px-4 mt-4 focus:outline-none rounded-3xl text-white font-bold">Avançar</button>
            </div>

        </form>


    </section>
</template>
