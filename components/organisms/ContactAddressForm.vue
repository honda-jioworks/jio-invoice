<template>
  <v-container class="color">
    <!--1行目-->
    <v-row>
      <v-col cols="12" sm="4" md="4" lg="4" xl="4">
        <!--郵便番号-->
        <PostalCode
          @scan-postal-code="scanPostalCode"
          :officePostalCode="postalCode"
          @send-address="sendAddress"
          :postalCodeVal="postalCodeVal"
        />
      </v-col>
      <v-spacer />
    </v-row>
    <!--2行目-->
    <v-row>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <!--住所-->
        <AddressInput class="mt-n10" :addressVal="address" @change-address="changeAddress" />
        <!--郵便番号と住所の行間詰め-->
      </v-col>
      <v-spacer />
    </v-row>
    <!--3行目-->
    <v-row>
      <v-col cols="6" sm="6" md="6" lg="3" xl="3">
        <!--役職-->
        <PostBox class="mt-n5" @get-postbox="getPostbox" />
      </v-col>
      <v-col cols="6" sm="6" md="6" lg="3" xl="3">
        <!--部署-->
        <DepartmentInput class="mt-n5" @get-depertment="getDepertment" />
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <!--担当者名-->
        <HonorificBox class="mt-n5" @get-manager="getManager" @get-honorific="getHonorific" />
      </v-col>
      <v-spacer />
    </v-row>
    <!--4行目-->
    <v-row>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <!--担当者携帯-->
        <PhoneNumber @get-number="getNumber" class="mt-n5" />
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <!--担当者メール-->
        <EmailInput class="mt-n5" @get-email="getEmail" v-bind:getClick="email" @sendAddress="getAddress" />
      </v-col>
    </v-row>
    <!--5行目-->
    <v-row>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <!--TEL-->
        <TelNumberInput class="mt-n5" @get-telnumber="getTelnumber" />
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <!--FAX-->
        <FaxNumberInput class="mt-n5" @get-faxnumber="getFaxnumber" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PostalCode from '@/components/molecules/PostalCode.vue';
import AddressInput from '@/components/molecules/AddressInput.vue';
import DepartmentInput from '@/components/molecules/DepartmentInput.vue';
import PostBox from '@/components/molecules/PostBox.vue';
import HonorificBox from '@/components/molecules/HonorificBox.vue';
import PhoneNumber from '@/components/molecules/PhoneNumber.vue';
import EmailInput from '@/components/molecules/EmailInput.vue';
import TelNumberInput from '~/components/molecules/TelNumberInput.vue';
import FaxNumberInput from '~/components/molecules/FaxNumberInput.vue';

@Component({
  components: {
    PostalCode,
    AddressInput,
    DepartmentInput,
    PostBox,
    HonorificBox,
    PhoneNumber,
    EmailInput,
    TelNumberInput,
    FaxNumberInput,
  },
})
export default class ContactAddressForm extends Vue {
  public postalCode: string = '';
  public postalCodeVal: string = this.postalCode;
  public address: string = '';
  public changeAddressVal: string = '';
  public depertment: string = '';
  public postbox: string = '';
  public manager: string = '';
  public number: string = '';
  public email: string = '';
  public telnumber: string = '';
  public faxnumber: string = '';
  public honorific: string = '';
  public addressValue: string = '';

  scanPostalCode(val: string): void {
    //郵便番号をmoleculesから受け取る
    this.postalCodeVal = val;
  }

  sendAddress(val: string): void {
    //住所をmoleculesから受け取る
    this.address = val;
  }

  changeAddress(val: string): void {
    //住所をmoleculesから受け取りorganismsで出力
    this.changeAddressVal = val;
  }
  // 部署
  getDepertment(val: string): void {
    this.depertment = val;
  }

  //役職
  getPostbox(val: string): void {
    this.postbox = val;
  }

  // 担当者名
  getManager(val: string): void {
    this.manager = val;
  }
  // 敬称
  getHonorific(val: string): void {
    this.honorific = val;
  }
  // 担当者番号
  getNumber(val: string): void {
    this.number = val;
  }
  // 担当者メール
  getEmail(val: string): void {
    this.email = val;
  }
  // 送るボタン
  emailVal(val: string): void {
    this.addressValue = val;
  }
  // TEL
  getTelnumber(val: string): void {
    this.telnumber = val;
  }
  // FAX
  getFaxnumber(val: string): void {
    this.faxnumber = val;
  }
}
</script>
<style lang="scss" scoped>
.color {
  background: white;
}
</style>
