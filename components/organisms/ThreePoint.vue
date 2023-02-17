<template>
  <div>
    <v-row>
      <v-col cols="12"><InvoiceIssueTable /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import InvoiceIssueTable from '@/components/organisms/InvoiceIssueTable.vue';
@Component({ components: { InvoiceIssueTable } })
export default class ThreePoint extends Vue {}
</script>
