<template>
  <div><CustomerRegisterForm /></div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CustomerRegisterForm from '~/components/organisms/CustomerRegisterForm.vue';

@Component({ components: { CustomerRegisterForm } })
export default class CustomerRegister extends Vue {}
</script>
