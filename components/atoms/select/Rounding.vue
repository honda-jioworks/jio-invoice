<template>
  <v-select v-model="selected_in" :items="items" :rules="rule" :label="label" @blur="input"></v-select>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class Rounding extends Vue {
  @PropSync('selected', { type: String })
  selected_in!: string;

  @Prop()
  items!: Array<string>;

  @Prop()
  label!: string;

  @Prop()
  rule!: Array<object>;

  @Prop({ type: String, required: true })
  field!: string;

  input() {
    switch (this.field) {
      case 'taxrounding_in':
        this.$store.commit('company/set', { consumptionTaxRoundingVal: this.selected_in });
        break;
      case 'mulUnitPriceQuantityRounding':
        this.$store.commit('company/set', { mulUnitPriceQuantityRoundingVal: this.selected_in });
        break;
      case 'unitPriceCulculationRounding_in':
        this.$store.commit('company/set', { unitPriceCulculationRoundingVal: this.selected_in });
        break;
    }
  }
}
</script>
