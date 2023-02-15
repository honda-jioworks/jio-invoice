<template>
  <v-text-field
    :return-value.sync="value_in"
    :rules="rule"
    v-model="value_in"
    :label="label"
    counter
    :address1="address1"
    @change="input"
  >
  </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, PropSync } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class AddressOne extends Vue {
  @PropSync('value', { type: String })
  value_in!: string;

  @Prop()
  label!: any;

  @Prop()
  rule!: Array<object>;

  @Prop({ type: String })
  address1!: String;

  input(): void {
    this.$store.commit('company/set', { addressOne: this.value_in });
  }

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
