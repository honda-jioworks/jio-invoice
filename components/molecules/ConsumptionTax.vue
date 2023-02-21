<template>
  <div class="text-right">
    <v-row dense>
      <v-col col="6" class="wrap04"> 消費税 </v-col>
      <v-col cols="6" class="wrap05"
        ><AutomaticCalculation :label="label" :rule="rule" :selected.sync="consumption_in" :items="consumption_items"
      /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator';
import ConsumptionTaxlabel from '@/components/atoms/label/ConsumptionTaxlabel.vue';
import AutomaticCalculation from '@/components/atoms/select/AutomaticCalculation.vue';
@Component({ components: { ConsumptionTaxlabel, AutomaticCalculation } })
export default class ConsumptionTax extends Vue {
  @PropSync('consumption_val', { type: String })
  consumption_in!: string;

  @Prop()
  consumption_items!: Array<string>;

  label: string = '消費税';

  rule: Array<object> = [(v: any) => !!v || '項目を選択してください。'];
}
</script>
<style lang="scss" scoped>
.wrap04 {
  margin-top: 25px;
}
.wrap05 {
  padding-left: 30px;
  margin-top: 10px;
}
</style>
