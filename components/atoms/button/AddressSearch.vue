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
  postalCode1!: string;
  // データベースから受け取った郵便番号の後ろ4桁
  @Prop({ type: String })
  postalCode2!: string;

  //入力された郵便番号をもとに住所情報を生成
  async makeAddress() {
    this.zipCode = this.postalCode1 + '-' + this.postalCode2;
    try {
      const address = await fetchAddressByZipcode(this.zipCode);
      const { region, locality, street, extended } = address;
      this.addressVal = region + locality + street + extended;
    } catch {}
  }
  //郵便番号から住所に変換しmoleculesに送る
  @Emit()
  sendAddress(_: string): string {
    return this.addressVal;
  }
}
</script>
