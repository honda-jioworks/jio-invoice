<template>
  <v-container fluid>
    <v-sheet class="abc">
      <v-row dense>
        <v-col cols="12" xl="6"><OfficeName :officeName="officeName" /></v-col>
        <v-col cols="12" xl="6"><CEOName :CEOName="CEONameVal" /></v-col>
        <v-col cols="2"></v-col>
      </v-row>
      <v-row>
        <v-col cols="6"
          ><PostalCode
            :postalCode1="postalCode1"
            :postalCode2="postalCode2"
            @send-address="sendAddress"
            @get-postal-code-one="getPostalCodeOne"
            @get-postal-code-two="getPostalCodeTwo"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xl="6"
          ><OfficeAddress
            :address1="address1"
            :postalCode1="postalCode1"
            :postalCode2="postalCode2"
            :newAddress="address1"
            @change-address="changeAddress"
        /></v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" xl="6"><OfficeAddress2 :address2="address2" @change-address-two="changeAddressTwo" /></v-col>
      </v-row>
      <v-row n>
        <v-col cols="12" md="12" xl="6"
          ><TelNumber
            :telNumber="telNumber"
            @send-tel-number-one="getTelNumberOne"
            @send-tel-number-two="getTelNumberTwo"
            @send-tel-number-three="getTelNumberThree"
        /></v-col>
        <v-col cols="12" md="6" xl="6"
          ><NumberOfFax
            :faxNumber="faxNumber"
            @send-fax-number-one="getFaxNumberOne"
            @send-fax-number-two="getFaxNumberTwo"
            @send-fax-number-three="getFaxNumberThree"
        /></v-col>
      </v-row>

      <v-row>
        <v-col cols="12" xl="6"><OfficeURL :officeUrl="officeUrl" /></v-col>
      </v-row>
      <v-row>
        <v-col cols="auto"><FileLocation @scan-file="scanFile" /></v-col>
        <v-col cols="auto"><FileName :fileName="fileName" /></v-col>
      </v-row>
    </v-sheet>
  </v-container>
  <!-- フッター -->
  <!-- ただし、全体のヘッダやフッタはlayouts側で作ってるため基本的にはコンテンツだけで大丈夫なはず -->
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref } from 'nuxt-property-decorator';
import OfficeName from '@/components/molecules/OfficeName.vue';
import CEOName from '@/components/molecules/CEOName.vue';
import PostalCode from '@/components/molecules/PostalCode.vue';
import OfficeAddress from '@/components/molecules/OfficeAddress.vue';
import OfficeAddress2 from '@/components/molecules/OfficeAddress2.vue';
import TelNumber from '@/components/molecules/TelNumber.vue';
import NumberOfFax from '~/components/molecules/NumberOfFax.vue';
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
    NumberOfFax,
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
  //　電話番号の前3桁を取得
  private telNumber1: string = this.telNumber.substr(0, 3);
  //　電話番号の中4桁を取得
  private telNumber2: string = this.telNumber.substr(3, 4);
  //　電話番号の後ろ4桁を取得
  private telNumber3: string = this.telNumber.substr(3, 4);
  //　FAXの電話番号の前3桁を取得
  private faxNumber1: string = this.faxNumber.substr(0, 3);
  //　FAXの電話番号の中4桁を取得
  private faxNumber2: string = this.faxNumber.substr(3, 4);
  //　FAXの電話番号の後ろ4桁を取得
  private faxNumber3: string = this.faxNumber.substr(3, 4);
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
  // 入力された電話番号の前をtelNumber1に代入する
  getTelNumberOne(val: string): void {
    this.telNumber1 = val;
  }
  // 入力された電話番号の中をtelNumber2に代入する
  getTelNumberTwo(val: string): void {
    this.telNumber2 = val;
  }
  // 入力された電話番号の後ろをtelNumber3に代入する
  getTelNumberThree(val: string): void {
    this.telNumber3 = val;
  }
  // 入力されたFAX番号の後ろをfaxNumber1に代入する
  getFaxNumberOne(val: string): void {
    this.faxNumber1 = val;
  }
  // 入力されたFAX番号の後ろをfaxNumber2に代入する
  getFaxNumberTwo(val: string): void {
    this.faxNumber2 = val;
  }
  // 入力されたFAX番号の後ろをfaxNumber3に代入する
  getFaxNumberThree(val: string): void {
    this.faxNumber3 = val;
  }
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
</style>
