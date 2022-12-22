<template>
  <v-text-field :rules="nameRules" :value="postalCode1" @input="getPostalCodeOne" :counter="3" solo> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
@Component({})
export default class ThreeNumbersTextBox extends Vue {
  nameRules: Array<object> = [
    (v: string) => !!v || '項目を入力してください',
    (v: string) => /^[+,-]?([0-9]\d*|0)$/.test(v) || '数値を入力してください',
    (v: string) => /^[+,-]?([0-9]{0,3})$/.test(v) || '3桁以内で入力してください',
  ];
  // データベースから受け取った郵便番号の前3桁
  @Prop({ type: String })
  postalCode1!: string;
  // データベースから受け取った電話番号の前3桁(2桁)
  @Prop({ type: String })
  telNumber1!: string;
  // 入力された郵便番号の前3桁をmoleculesに送る
  @Emit()
  getPostalCodeOne(val: string): string {
    return val;
  }
}
</script>
<style lang="scss" scoped>
.v-text-field {
  padding: auto, auto, auto, auto;
  margin: auto, auto, auto, auto;
  width: 70%;
}
</style>
