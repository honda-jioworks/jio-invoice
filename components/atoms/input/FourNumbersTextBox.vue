<template>
  <v-text-field :rules="nameRules" v-model="postalCode2" @input="getPostalCodeTwo" :counter="4" solo> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
@Component({})
export default class FourNumbersTextBox extends Vue {
  nameRules: Array<object> = [
    (v: string) => !!v || '項目を入力してください',
    (v: string) => /^[+,-]?([0-9]\d*|0)$/.test(v) || '数値を入力してください',
    (v: string) => /^[+,-]?([0-9]{0,4})$/.test(v) || '4桁以内で入力してください',
  ];
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
  width: 70%;
}
</style>
