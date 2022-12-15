<template>
  <div>
    <v-row>
      <v-col cols="6">消費税：</v-col>
      <v-col cols="6"><AutomaticCalculation @scan-select="scanSelect" /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
import ConsumptionTaxlabel from '@/components/atoms/label/ConsumptionTaxlabel.vue';
import AutomaticCalculation from '@/components/atoms/select/AutomaticCalculation.vue';
@Component({ components: { ConsumptionTaxlabel, AutomaticCalculation } })
export default class ConsumptionTax extends Vue {
  @Emit()
  scanSelect(val: string): string {
    return val;
  }
}
</script>
