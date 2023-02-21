<template>
  <v-container :items="desserts">
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
            :key="item.postalCode_id"
            :postalCode_val.sync="item.postalCode"
            @send-address="sendAddress"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="8"
          ><OfficeAddress
            v-for="item in desserts"
            :key="item.addressOne_id"
            :addressOne_val.sync="item.addressOne"
            :address1="address1"
            @change-address="changeAddress"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="8"
          ><OfficeAddress2 v-for="item in desserts" :key="item.addressTwo_id" :address2_val.sync="item.addressTwo"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="5"
          ><TelNumber v-for="item in desserts" :key="item.telNumber_id" :telNumber_val.sync="item.telNumber"
        /></v-col>
        <v-col cols="5"
          ><NumberOfFax v-for="item in desserts" :key="item.faxNumber_id" :faxNumber_val.sync="item.faxNumber"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="6"
          ><OfficeURL v-for="item in desserts" :key="item.officeUrl_id" :officeUrl_val.sync="item.officeUrl"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="auto"><FileLocation @scan-file="scanFile" /></v-col>
        <v-col cols="auto"
          ><FileName
            v-for="item in desserts"
            :key="item.fileName_id"
            :fileNamel_val.sync="item.fileName"
            :fileName="fileName"
        /></v-col>
      </v-row>
    </v-sheet>
  </v-container>
  <!-- フッター -->
  <!-- ただし、全体のヘッダやフッタはlayouts側で作ってるため基本的にはコンテンツだけで大丈夫なはず -->
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
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
      officeName_id: '',
      officeName: '',
      CEOName_id: '',
      CEOName: '',
      postalCode_id: '',
      postalCode: '',
      addressOne_id: '',
      addressOne: '',
      addressTwo_id: '',
      addressTwo: '',
      telNumber_id: '',
      telNumber: '',
      faxNumber_id: '',
      faxNumber: '',
      officeUrl_id: '',
      officeUrl: '',
      fileName_id: '',
      fileName: '',
    },
  ];

  public address1: string = '';
  public address: string = this.address1;

  changeAddress(desserts: any) {
    console.log(desserts.addressOne);
    return (desserts.addressOne = this.address1);
  }

  // ファイル名の初期値を定義
  fileName: any = 'ファイル名が表示されます';

  //Emitで貰った値がfileNameに格納される。
  scanFile(fileName: any) {
    this.desserts[0].fileName = fileName;
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
