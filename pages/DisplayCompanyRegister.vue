<template>
  <CompanyRegister />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CompanyRegister from '~/components/templates/CompanyRegister.vue';
@Component({ components: { CompanyRegister } })
export default class DisplayCompanyRegister extends Vue {}
</script>
