<template>
  <div>
    <v-row
      ><v-col cols="12"><BillingAmount /></v-col>
      <v-col cols="12"><InvoiceIssueTable /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import BillingAmount from '@/components/molecules/BillingAmount.vue';
import InvoiceIssueTable from '@/components/organisms/InvoiceIssueTable.vue';
@Component({ components: { BillingAmount, InvoiceIssueTable } })
export default class ThreePoint extends Vue {}
</script>
