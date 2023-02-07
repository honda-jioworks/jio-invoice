<template>
  <div>
    <v-row>
      <v-col cols="4" class="wrap04">税率:</v-col>
      <v-col cols="8">
        <v-select
          :items="taxRate_items"
          :rules="rule"
          outlined
          :disabled="!checkVal"
          v-model="taxRate_in"
          :label="label"
          @blur="input"
        ></v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class TaxRate extends Vue {
  @PropSync('taxRate_val', { type: String })
  taxRate_in!: string;

  @Prop()
  taxRate_items!: Array<string>;

  label: string = '税率';

  rules: Array<object> = [(v: String) => !!v || '項目を選択してください'];

  @Prop({ type: Boolean })
  checkVal!: boolean;

  input() {
    this.$store.commit('company/set', { taxRateVal: this.taxRate_in });
  }
}
</script>
<style lang="scss" scoped>
.wrap04 {
  margin-top: 15px;
}
.v-select {
  margin-top: 10px;
}
</style>
