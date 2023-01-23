<template>
  <div class="text-right">
    <v-row dense>
      <v-col cols="6" class="wrap04">単価×数量の端数処理:</v-col>
      <v-col cols="6" class="wrap07"
        ><Rounding :label="label" :rule="rule" :selected.sync="mulUnitPriceQuantityRounding" :items="taxrounding_items"
      /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop, PropSync } from 'nuxt-property-decorator';
import Rounding from '@/components/atoms/select/Rounding.vue';
@Component({ components: { Rounding } })
export default class MulUnitPriceQuantityRounding extends Vue {
  @PropSync('mulUnitPriceQuantityRounding_val', { type: String })
  mulUnitPriceQuantityRounding!: string;

  @Prop()
  taxrounding_items!: Array<string>;

  label: string = '単価×数量の端数処理';

  rule: Array<object> = [(v: any) => !!v || '項目を選択してください。'];
}
</script>
<style lang="scss" scoped>
.wrap04 {
  margin-top: 15px;
}
.wrap07 {
  padding-left: 30px;
}
</style>
