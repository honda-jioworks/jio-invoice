<template>
  <v-text-field :rules="nameRules" v-model="newAddress2" @input="changeAddressTwo"> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class AddressTwo extends Vue {
  nameRules: Array<object> = [(v: string) => !!v || '項目を入力してください'];
  private newAddress2: string = '';
  // データベースから受け取った住所情報の後半部分
  @Prop({ type: String })
  address2!: string;
  // 入力された住所の後半部分をmoleculesに送信する
  @Emit()
  changeAddressTwo(val: string): string {
    return val;
  }
  // ページ読み込み時にデータベースに登録されている住所の後半部分を表示
  created() {
    this.newAddress2 = this.address2;
  }
}
</script>
<style lang="scss" scoped>
.v-text-field {
  width: 100%;
}
</style>
