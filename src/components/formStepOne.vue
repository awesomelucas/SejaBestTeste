<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import { formFunctions } from '../stores/store'

const validateInputs = formFunctions()

</script>

<template>

    <div class="mb-4">

        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Nome
        </label>
        <Field name="username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Digite seu nome" />
        <ErrorMessage name="username" />
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="userCpf">
            CPF
        </label>
        <Field name="userCpf"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userCpf" type="text" placeholder="Digite seu cpf" />
        <ErrorMessage name="userCpf" />
    </div>

    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="userDataNascimento">
            Data de nascimento
        </label>
        <Field name="userDataNascimento"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userDataNascimento" type="text" placeholder="Digite sua data de nascimento" />
        <ErrorMessage name="userDataNascimento" />
    </div>

</template>
