import { defineStore } from 'pinia'
import * as yup from 'yup';
import { ref, reactive, computed } from 'vue';
import { Api } from '../service/requestApi'

export const formFunctions = defineStore('formFunctions', {

  state: () => {
    return {
      count: 0,

    }
  },

  actions: {
    // let endereco: any = ref(enderecoPadrao)
      nextStep(values: string) {
        if (this.count === 2) {
          console.log('Done: ', JSON.stringify(values, null, 2));
          return;
        }

        this.count++;
      },
      prevStep() {
        if (this.count <= 0) {
          return;
        }
        this.count--;
      },

      schemas() {
        const schemas = [
          yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
          }),
          yup.object({
            password: yup.string().required().min(6),
            confirmPassword: yup
              .string()
              .required()
              .min(6)
              .oneOf([yup.ref('password')], 'Passwords must match'),
          }),
          yup.object({
            address: yup.string().required(),
            postalCode: yup
              .string()
              .required()
              .matches(/^[0-9]+$/, 'Must be numeric'),
          }),
        ];

        return schemas
      },

    },

  })