<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import { formFunctions } from '../stores/store'

const validateInputs = formFunctions()


</script>

<template>

    <div class="mb-4">

        <label class="block text-gray-700 text-sm font-bold mb-2" for="userSalario">
            Salário
        </label>
        <Field name="userSalario"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userSalario" type="text" placeholder="Digite seu salário"/>
        <ErrorMessage name="userSalario" />
    </div>


</template>
