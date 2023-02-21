<template>
  <div class="text-right">
    <v-row>
      <v-col cols="6" class="wrap04">単価計算の端数処理:</v-col>
      <v-col cols="6" class="wrap07"
        ><Rounding
          :label="label"
          :rule="rule"
          :selected.sync="unitPriceCulculationRounding_in"
          :items="taxrounding_items"
          :field="'unitPriceCulculationRounding_in'"
          v-model="unitPriceCulculationRounding_in"
      /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator';
import Rounding from '@/components/atoms/select/Rounding.vue';
@Component({ components: { Rounding } })
export default class UnitPriceCulculationRounding extends Vue {
  @PropSync('unitPriceCulculationRounding_val', { type: String })
  unitPriceCulculationRounding_in!: string;

  @Prop()
  taxrounding_items!: Array<string>;

  label: string = '単価計算の端数処理';

  rule: Array<object> = [(v: String) => !!v || '項目を選択してください'];
}
</script>
<style lang="scss">
.wrap04 {
  margin-top: 15px;
}
.wrap07 {
  padding-left: 18px;
}
</style>
