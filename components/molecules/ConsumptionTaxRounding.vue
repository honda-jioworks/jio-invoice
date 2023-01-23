<template>
  <div class="text-right">
    <v-row dense>
      <v-col col="6" class="wrap04"> 消費税の端数処理: </v-col>
      <v-col col="6" class="wrap05">
        <Rounding :label="label" :rule="rule" :selected.sync="taxrounding_in" :items="taxrounding_items" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator';
import Rounding from '@/components/atoms/select/Rounding.vue';
@Component({ components: { Rounding } })
export default class ConsumptionTaxRounding extends Vue {
  @PropSync('taxrounding_val', { type: String })
  taxrounding_in!: string;

  @Prop()
  taxrounding_items!: Array<string>;

  label: string = '消費税の端数処理';

  rule: Array<object> = [(v: String) => !!v || '項目を選択してください'];
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
