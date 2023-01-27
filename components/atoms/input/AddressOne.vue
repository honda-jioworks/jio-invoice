<template>
  <v-text-field
    :return-value.sync="value_in"
    :rules="rule"
    v-model="value_in"
    :label="label"
    counter
    :address1="address1"
    :newAddress="newAddress"
  >
  </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, PropSync } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class AddressOne extends Vue {
  public sample: string = '';

  @PropSync('value', { type: String })
  value_in!: any;

  @Prop()
  label!: any;

  @Prop()
  rule!: Array<object>;

  @Prop({ type: String })
  address1!: String;

  // 入力された郵便番号をもとに生成された住所情報
  @Prop({ type: String })
  newAddress!: string;
}
</script>
<style lang="scss" scoped>
.v-text-field {
  width: 100%;
}
</style>
