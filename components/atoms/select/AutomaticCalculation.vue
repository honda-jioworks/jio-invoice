<template>
  <v-select v-model="selected_in" :items="items" :rules="rule" @blur="input" :label="label"></v-select>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class AutomaticCalculation extends Vue {
  @PropSync('selected', { type: String })
  selected_in!: string;

  @Prop()
  items!: Array<string>;

  @Prop()
  label!: string;

  @Prop()
  rule!: Array<object>;

  input() {
    this.$store.commit('company/set', { consumptionTaxVal: this.selected_in });
  }
}
</script>
