<template>
  <v-text-field :return-value.sync="value_in" :rules="rule" v-model="value_in" :label="label" counter></v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, PropSync } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class AddressTwo extends Vue {
  private newAddress2: string = '';

  @PropSync('value', { type: String })
  value_in!: any;

  @Prop()
  label!: any;

  @Prop()
  rule!: Array<object>;
}
</script>
<style lang="scss" scoped>
.v-text-field {
  width: 100%;
}
</style>
