<template>
    <div><InvoiceIssueTable /></div>
  </template>
  
  <script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  import InvoiceIssueTable from '@/components/organisms/InvoiceIssueTable.vue';
  @Component({
    components: { InvoiceIssueTable },
  })
  export default class InvoiceIssueList extends Vue {}
  </script>
  