<template>
  <div>
    <v-btn @mouseover="makeAddress" @click="sendAddress"> 住所を検索 </v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';
import { Core as YubinBangoCore } from 'yubinbango-core';
@Component({ components: {} })
export default class AddressSearch extends Vue {
  // 住所
  private address: string = '';
  // データベースから受け取った郵便番号の前3桁
  @Prop({ type: String })
  postalCode1!: string;
  // データベースから受け取った郵便番号の後ろ4桁
  @Prop({ type: String })
  postalCode2!: string;
  // 入力された郵便番号をもとに住所情報を生成
  makeAddress(_: string): void {
    let newPostalCode: string = this.postalCode1 + this.postalCode2;
    new YubinBangoCore(newPostalCode, (addr: { region: string; locality: string; street: string }) => {
      this.address = addr.region; // 都道府県
      this.address += addr.locality; // 市区町村
      this.address += addr.street; // 町域
    });
  }
  // 生成した住所情報をmoleculesに送る
  @Emit()
  sendAddress(_: string): string {
    return this.address;
  }
}
</script>
