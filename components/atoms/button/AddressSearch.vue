<template>
  <div>
    <v-btn v-model="addressVal" @mouseover="makeAddress()" @click="sendAddress"> 住所を検索 </v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';
import { fetchAddressByZipcode } from '@/plugins/yubinbango';

@Component({ components: {} })
export default class AddressSearch extends Vue {
  private zipCode: string = '';
  // 住所
  private addressVal: string = '';
  // データベースから受け取った郵便番号の前3桁
  @Prop({ type: String })
  postalCode!: string;

  //入力された郵便番号をもとに住所情報を生成
  async makeAddress() {
    this.zipCode = this.postalCode;
    //awaitを利用している箇所のエラーはcatchで受け取ることができないため
    //try catchは同期処理の時に記載するもの
    await fetchAddressByZipcode(this.zipCode)
      .then((address) => {
        //　非同期処理が成功した場合
        const { region, locality, street, extended } = address;
        this.addressVal = region + locality + street + extended;
      })
      .catch((error) => {
        //非同期処理が失敗した場合の処理
        console.log(error);
        alert('郵便番号の処理に失敗しました。\rlnしばらく時間を置いてから再度実施してください');
      });
  }
  //郵便番号から住所に変換しmoleculesに送る
  @Emit()
  sendAddress(_: string): string {
    return this.addressVal;
  }
}
</script>
