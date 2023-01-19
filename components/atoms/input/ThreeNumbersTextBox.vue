<template>
  <v-text-field :return-value.sync="value_in" :rules="rule" v-model="value_in" :label="label" counter="11" solo>
  </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, PropSync } from 'nuxt-property-decorator';
@Component({})
export default class ThreeNumbersTextBox extends Vue {
  @PropSync('value', { type: String })
  value_in!: any;

  @Prop()
  label!: any;

  @Prop()
  rule!: Array<object>;

  @Prop({ type: String })
  postalCode!: string;
}
</script>
<style lang="scss" scoped>
.v-text-field {
  padding: auto, auto, auto, auto;
  margin: auto, auto, auto, auto;
}
</style>
