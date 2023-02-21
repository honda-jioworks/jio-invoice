<template>
  <div class="text-right">
    <v-row>
      <v-col cols="6" class="wrap11">売上で厳選所得税額を入力:</v-col>
      <v-col cols="6" class="wrap09"
        ><DoOrNot
          :label="label"
          :rule="rule"
          :selected.sync="amountOfWithholdingTax_in"
          :items="amountOfWithholdingTax_items"
          @check-bool="checkBool"
          :field="'amountOfWithholdingTax_in'"
          v-model="amountOfWithholdingTax_in"
      /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop, PropSync } from 'nuxt-property-decorator';
import DoOrNot from '@/components/atoms/select/DoOrNot.vue';
@Component({ components: { DoOrNot } })
export default class AmountOfWithholdingTax extends Vue {
  private bool: boolean = false;

  @PropSync('amountOfWithholdingTax_val', { type: String })
  amountOfWithholdingTax_in!: string;

  @Prop()
  amountOfWithholdingTax_items!: Array<string>;

  label: string = '売上で厳選所得税額を入力';

  rule: Array<object> = [(v: String) => !!v || '項目を選択してください'];

  @Emit()
  checkBool(val: boolean): boolean {
    return (this.bool = val);
  }
}
</script>
<style lang="scss">
.wrap11 {
  margin-top: 25px;
}
.wrap09 {
  padding-left: 30px;
  margin-top: 10px;
}
</style>
