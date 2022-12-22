<template>
  <v-text-field :rules="nameRules" v-model="newAddress" @input="changeAddress"> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class AddressOne extends Vue {
  nameRules: Array<object> = [(v: string) => !!v || '項目を入力してください'];
  // データベースから受け取った住所情報の前半部分
  @Prop({ type: String })
  address1!: string;
  // 入力された郵便番号をもとに生成された住所情報
  @Prop({ type: String })
  newAddress!: string;
  // 入力された住所の前半部分をmoleculesに送信する
  @Emit()
  changeAddress(val: string): string {
    return val;
  }
  // ページ読み込み時にデータベースに登録されている住所の前半部分を表示
  created() {
    this.newAddress = this.address1;
  }
}
</script>
<style lang="scss" scoped>
.v-text-field {
  width: 100%;
}
</style>
