<script setup lang="ts">

import { Field, ErrorMessage } from 'vee-validate';


</script>

<template>

    <div class="mb-4">

        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Nome
        </label>
        <Field name="username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Digite seu nome" />
        <ErrorMessage name="username" class="text-red-500 font-semibold" />
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="userCpf">
            CPF
        </label>
        <Field name="userCpf"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userCpf" type="number" placeholder="Digite seu cpf" />
        <ErrorMessage name="userCpf" class="text-red-500 font-semibold" />
    </div>

    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="userDataNascimento">
            Data de nascimento
        </label>
        <Field name="userDataNascimento"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userDataNascimento" type="date" placeholder="Digite sua data de nascimento" />
        <ErrorMessage name="userDataNascimento" class="text-red-500 font-semibold" />
    </div>

</template>
