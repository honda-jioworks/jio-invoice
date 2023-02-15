<template>
  <v-select
    :label="label"
    :items="items"
    v-model="selected_in"
    :rules="rule"
    @input="checkBool"
    @blur="input"
  ></v-select>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop, PropSync } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class DoOrNot extends Vue {
  public check: string = '';
  @Emit()
  checkBool(): boolean {
    if (this.selected_in == 'する') {
      //this.check
      return true;
    } else if (this.selected_in == 'しない') {
      //this.check
      return false;
    } else {
      return false;
    }
  }
  @PropSync('selected', { type: String })
  selected_in!: string;

  @Prop()
  items!: Array<object>;

  @Prop()
  label!: string;

  @Prop()
  rule!: Array<object>;

  @Prop({ type: String, required: true })
  field!: string;

  input() {
    switch (this.field) {
      case 'decimalalPart_in':
        this.$store.commit('company/set', { decimalalPartVal: this.selected_in });
        break;
      case 'amountOfWithholdingTax_in':
        this.$store.commit('company/set', { amountOfWithholdingTaxVal: this.selected_in });
        break;
    }
  }
}
</script>
