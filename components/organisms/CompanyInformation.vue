<template>
  <v-sheet class="abc">
    <!-- ヘッダー -->
    <!-- コンテンツエリア -->
    <v-container fluid>
      <v-row>
        <v-col cols="4"><OfficeName :officeName="officeName" /></v-col>
        <v-col cols="4"><CEOName :CEOName="CEONameVal" /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"
          ><PostalCode
            :postalCode1="postalCode1"
            :postalCode2="postalCode2"
            @send-address="sendAddress"
            @get-postal-code-one="getPostalCodeOne"
            @get-postal-code-two="getPostalCodeTwo"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"
          ><OfficeAddress
            :address1="address1"
            :postalCode1="postalCode1"
            :postalCode2="postalCode2"
            :newAddress="address1"
            @change-address="changeAddress"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><OfficeAddress2 :address2="address2" @change-address-two="changeAddressTwo" /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7" md="6"><TelNumber :telNumber="telNumber" /></v-col>
        <v-col cols="7" md="6"><FAXNumber /></v-col>
      </v-row>
      <v-row> </v-row>
      <v-row>
        <v-col cols="12"><OfficeURL :officeUrl="officeUrl" /></v-col>
      </v-row>
      <v-row>
        <v-col cols="auto"><FileLocation @scan-file="scanFile" /></v-col>
        <v-col cols="auto"><FileName :fileName="fileName" /></v-col>
      </v-row>
    </v-container>
    <!-- フッター -->
    <!-- ただし、全体のヘッダやフッタはlayouts側で作ってるため基本的にはコンテンツだけで大丈夫なはず -->
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref } from 'nuxt-property-decorator';
import OfficeName from '@/components/molecules/OfficeName.vue';
import CEOName from '@/components/molecules/CEOName.vue';
import PostalCode from '@/components/molecules/PostalCode.vue';
import OfficeAddress from '@/components/molecules/OfficeAddress.vue';
import OfficeAddress2 from '@/components/molecules/OfficeAddress2.vue';
import TelNumber from '@/components/molecules/TelNumber.vue';
import FAXNumber from '~/components/molecules/NumberOfFax.vue';
import OfficeURL from '@/components/molecules/OfficeURL.vue';
import FileLocation from '@/components/molecules/FileLocation.vue';
import FileName from '@/components/molecules/FileName.vue';
@Component({
  components: {
    OfficeName,
    CEOName,
    PostalCode,
    OfficeAddress,
    OfficeAddress2,
    TelNumber,
    FAXNumber,
    OfficeURL,
    FileLocation,
    FileName,
  },
})
export default class CompanyInfomation extends Vue {
  // データベースから持ってくるデータ
  public officeName: string = '株式会社jioworks';
  public CEONameVal: string = '横田　龍介';
  public postalCode: string = '1600022';
  public address1: string = '東京都新宿区新宿5-11-1';
  public address2: string = 'ホーメスト新宿ビル9F';
  public telNumber: string = '03-6709-8269';
  public faxNumber: string = '03-6709-8279';
  public officeUrl: string = 'https://jioworks.com';
  // 入力された郵便番号をもとに生成された住所情報
  public address: string = this.address1 + this.address2;
  // 郵便番号の前3桁を取得
  public postalCode1: string = this.postalCode.substr(0, 3);
  // 郵便番号の後ろ4桁を取得
  public postalCode2: string = this.postalCode.substr(3, 4);
  // ファイル名の初期値を定義
  fileName: any = 'ファイル名が表示されます';
  // 入力された住所情報の前半部分をaddress1に代入
  changeAddress(val: string): void {
    this.address1 = val;
  }
  // 入力された住所情報の後半部分をaddress1に代入
  changeAddressTwo(val: string): void {
    this.address2 = val;
  }
  // 生成された住所情報をaddress1に代入
  sendAddress(val: string): void {
    this.address1 = val;
  }
  //Emitで貰った値がfileNameに格納される。
  scanFile(fileName: any) {
    this.fileName = fileName;
  }
  // 入力された郵便番号の前3桁をにpostalCode1に代入する
  getPostalCodeOne(val: string): void {
    this.postalCode1 = val;
  }
  // 入力された郵便番号の前3桁をにpostalCode2に代入する
  getPostalCodeTwo(val: string): void {
    this.postalCode2 = val;
  }
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
</style>
