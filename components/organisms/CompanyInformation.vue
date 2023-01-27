<template>
  <v-container :headers="headers" :items="desserts">
    <v-sheet>
      <v-row dense>
        <v-col cols="5"
          ><OfficeName v-for="item in desserts" :key="item.officeName_id" :officename_val.sync="item.officeName" />
        </v-col>
        <v-col cols="5"
          ><CEOName v-for="item in desserts" :key="item.CEOName_id" :CEOName_val.sync="item.CEOName"
        /></v-col>
        <v-spacer />
      </v-row>
      <v-row>
        <v-col cols="5"
          ><PostalCode
            v-for="item in desserts"
            :key="item.company_id"
            :postalCode_val.sync="item.postalCode"
            @send-address="sendAddress"
            @get-postal-code="getPostalCode"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="8"
          ><OfficeAddress
            v-for="item in desserts"
            :key="item.company_id"
            :addressOne_val.sync="item.addressOne"
            :addressOne="addressOne"
            :postalCode="postalCode"
            :address1="address1"
            :newAddress="newAddress"
            @change-address="changeAddress"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="8"
          ><OfficeAddress2 v-for="item in desserts" :key="item.company_id" :address2_val.sync="item.addressTwo"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="5"
          ><TelNumber v-for="item in desserts" :key="item.company_id" :telNumber_val.sync="item.telNumber"
        /></v-col>
        <v-col cols="5"
          ><NumberOfFax v-for="item in desserts" :key="item.company_id" :faxNumber_val.sync="item.faxNumber"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="6"
          ><OfficeURL v-for="item in desserts" :key="item.company_id" :officeUrl_val.sync="item.officeUrl"
        /></v-col>
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
  desserts = [
    {
      officeName_id: 'officeName_id',
      officeName: '株式会社jioworks',
      CEOName_id: 'CEOName_id',
      CEOName: '横田　龍介',
      postalCode: '1600022',
      addressOne: '東京都新宿区新宿5-11-1',
      addressTwo: 'ホーメスト新宿ビル9F',
      telNumber: '0367098269',
      faxNumber: '0367098279',
      officeUrl: 'https://jioworks.com',
    },
  ];

  public address1: string = '';
  public address: string = this.address1;

  sample(desserts: any) {
    console.log(desserts.addressOne);
    return (desserts.addressOne = this.address1);
  }

  // ファイル名の初期値を定義
  fileName: any = 'ファイル名が表示されます';

  //Emitで貰った値がfileNameに格納される。
  scanFile(fileName: any) {
    this.fileName = fileName;
  }
  // 生成された住所情報をaddress1に代入
  sendAddress(val: string): void {
    this.desserts[0].addressOne = val;
  }
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
.Name {
  margin-right: -80px;
}
</style>
