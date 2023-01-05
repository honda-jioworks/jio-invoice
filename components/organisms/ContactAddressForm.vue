<template>
  <v-container class="color">
    <!--1行目-->
    <v-row>
      <v-col cols="6">
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
      <v-col cols="6">
        <!--住所-->
        <AddressInput class="mt-n10" :addressVal="address" @change-address="changeAddress" />
        <!--郵便番号と住所の行間詰め-->
      </v-col>
      <v-spacer />
    </v-row>
    <!--3行目-->
    <v-row class="mt-n5">
      <v-col cols="4">
        <!--役職-->
        <PostBox @get-postbox="getPostbox" />
      </v-col>
      <v-col cols="4">
        <!--部署-->
        <DepartmentInput @get-depertment="getDepertment" />
      </v-col>
      <v-col cols="4">
        <!--担当者名-->
        <HonorificBox @get-manager="getManager" @get-honorific="getHonorific" />
      </v-col>
    </v-row>
    <!--4行目-->
    <v-row>
      <v-col cols="4">
        <!--担当者携帯-->
        <PhoneNumber class="mt-n5" @get-number="getNumber" />
      </v-col>
      <v-col cols="5">
        <!--担当者メール-->
        <EmailInput class="mt-n5" @get-email="getEmail" :getClick="email" @sendAddress="getAddress" />
      </v-col>
    </v-row>
    <!--5行目-->
    <v-row class="mt-n5">
      <v-col cols="4">
        <!--TEL-->
        <TelNumberInput class="mt-n5" @get-telnumber="getTelnumber" />
      </v-col>
      <v-col cols="4">
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
  test2() {
    alert(
      this.address +
        this.postalCodeVal +
        this.postalCode +
        this.depertment +
        this.postbox +
        this.manager +
        this.honorific +
        this.number +
        this.email +
        this.addressValue +
        this.telnumber +
        this.faxnumber
    );
  }
}
</script>
<style lang="scss" scoped>
.color {
  background: white;
}
</style>
