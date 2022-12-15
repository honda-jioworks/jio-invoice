<template>
  <v-text-field v-model="postalCode2" @input="getPostalCodeTwo" :counter="4" solo> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class FourNumbersTextBox extends Vue {
  // データベースから受け取った郵便番号の後ろ4桁
  @Prop({ type: String })
  postalCode2!: string;
  // データベースから受け取った電話番号の中4桁
  @Prop({ type: String })
  telNumber2!: string;
  // データベースから受け取った電話番号の後ろ4桁
  @Prop({ type: String })
  telNumber3!: string;
  // 入力された郵便番号の前3桁をmoleculesに送る
  @Emit()
  getPostalCodeTwo(val: string): string {
    return val;
  }
}
</script>
<style lang="scss" scoped>
.v-text-field {
  width: 75%;
}
</style>
