<script lang="ts">
import pageTitle from './components/pageTitle.vue'
import FormStepOne from './components/formStepOne.vue'
import FormBody from './components/formBody.vue'


export default {
  name: "App",
  components:{
    pageTitle,
    FormBody,
  }
}

</script>

<template>
  <section class="bg-orange-200 min-h-screen grid">
    <pageTitle msg="SejaBest Test"/>
    <FormBody/>
  </section>
</template>

<style scoped>

</style>
