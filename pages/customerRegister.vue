<template>
  <v-container fluid>
    <CustomerRegisterForm />
    <EmployeesRegisterForm />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CustomerRegisterForm from '~/components/organisms/CustomerRegisterForm.vue';
import EmployeesRegisterForm from '~/components/organisms/EmployeesRegisterForm.vue';

@Component({ components: { CustomerRegisterForm, EmployeesRegisterForm } })
export default class CustomerRegister extends Vue {}
</script>
