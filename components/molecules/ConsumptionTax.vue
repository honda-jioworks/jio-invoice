<template>
  <div>
    <v-row dense>
      <v-col col="6" class="wrap04">
        <v-col cols="12"> 消費税： </v-col>
      </v-col>
      <v-col col="6" class="wrap05">
        <v-col cols="12"><AutomaticCalculation @scan-select="scanSelect" /></v-col>
      </v-col>
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
<style lang="scss" scoped>
.wrap04 {
  margin-top: 15px;
}
.wrap05 {
  margin-top: 7px;
  margin-left: 25px;
}
</style>
