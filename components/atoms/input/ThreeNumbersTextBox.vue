<template>
  <v-text-field
    :return-value.sync="value_in"
    :rules="rule"
    v-model="value_in"
    :label="label"
    :counter="counter"
    solo
    @blur="input"
  >
  </v-text-field>
</template>
<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator';
@Component({})
export default class ThreeNumbersTextBox extends Vue {
  @PropSync('value', { type: String })
  value_in!: any;

  @Prop()
  label!: any;

  @Prop()
  rule!: Array<object>;

  @Prop()
  counter!: string;

  @Prop({ type: String, required: true })
  field!: string;

  @Prop({ type: String })
  postalCode!: string;

  input() {
    switch (this.field) {
      case 'postalCode':
        this.$store.commit('company/set', { postalCode: this.value_in });
        break;
      case 'telNumber':
        this.$store.commit('company/set', { telNumber: this.value_in });
        break;
      case 'faxNumber':
        this.$store.commit('company/set', { faxNumber: this.value_in });
        break;
    }
  }
}
</script>
<style lang="scss" scoped>
.v-text-field {
  padding: auto, auto, auto, auto;
  margin: auto, auto, auto, auto;
}
</style>
