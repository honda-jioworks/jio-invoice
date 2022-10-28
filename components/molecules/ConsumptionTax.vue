<template>
  <div>
    <v-container mt-0 pt-0>
      <v-row>
        <v-col cols="6"><ConsumptionTaxlabel /></v-col>
        <v-col cols="6"><AutomaticCalculation /></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import ConsumptionTaxlabel from '@/components/atoms/label/ConsumptionTaxlabel.vue';
import AutomaticCalculation from '@/components/atoms/select/AutomaticCalculation.vue';
@Component({ components: { ConsumptionTaxlabel, AutomaticCalculation } })
export default class ConsumptionTax extends Vue {}
</script>
