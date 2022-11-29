<template>
  <v-sheet class="abc">
    <!-- ヘッダー -->
    <!-- コンテンツエリア -->
    <v-container fluid>
      <v-row>
        <v-col cols="4"><OfficeName :officeName="officeName" /></v-col>
        <v-col cols="4"><CEOName :CEOName="CEOName" /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"
          ><PostalCode
            :officePostalCode="postalCode"
            :postalCode1="postalCode1"
            :postalCode2="postalCode2"
            @send-address="sendAddress"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"
          ><OfficeAddress :postalCode1="postalCode1" :postalCode2="postalCode2" :addressVal="address"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><OfficeAddress2 /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7" md="6"><TelNumber :telNumber="telNumber" /></v-col>
        <v-col cols="7" md="6"><FAXNumber /></v-col>
      </v-row>
      <v-row> </v-row>
      <v-row>
        <v-col cols="12"><OfficeURL /></v-col>
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
import { file } from '@babel/types';
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
  private officeName: string = '株式会社jioworks';
  private CEOName: string = '横田　龍介';
  private postalCode: string = '1600022';
  private postalCode1: string = this.postalCode.substr(0, 3);
  private postalCode2: string = this.postalCode.substr(3, 4);
  private address: string = '';
  private address1: string = '東京都新宿区新宿5-11-1';
  private address2: string = 'ホーメスト新宿ビル9F';
  private telNumber: string = '03-6709-8269';
  private faxNumber: string = '03-6709-8279';
  private officeUrl: string = 'https://jioworks.com';
  fileName: any = 'ファイル名が表示されます';

  sendAddress(val: string): void {
    this.address = val;
  }
  //Emitで貰った値がfileNameに格納される。
  scanFile(fileName: any) {
    this.fileName = fileName;
  }
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
</style>
