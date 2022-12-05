<template>
  <v-sheet>
    <div>
      <PostalCode
        @scan-postal-code="scanPostalCode"
        :officePostalCode="postalCode"
        @send-address="sendAddress"
        :postalCodeVal="postalCodeVal"
      />
    </div>
    <div><AddressInput :addressVal="address" @change-address="changeAddress" /></div>
    <div><DepartmentInput @get-department="getDepartment" /></div>
    <div><PostBox @get-postbox="getPostbox" /></div>
    <div><HonorificBox @get-manager="getManager" @get-honorific="getHonorific" /></div>
    <div><PhoneNumber @get-number="getNumber" /></div>
    <div><EmailInput @get-email="getEmail" :getClick="email" @send-email="emailVal" /></div>
    <div><TelNumberInput @get-telnumber="getTelnumber" /></div>
    <div><FaxNumberInput @get-faxnumber="getFaxnumber" /></div>
  </v-sheet>
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
import TelNumberInput from '../molecules/TelNumberInput.vue';
import FaxNumberInput from '../molecules/FaxNumberInput.vue';

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
  private postalCode: string = '';
  private postalCodeVal: string = this.postalCode;
  private address: string = '';
  private changeAddressVal: string = '';
  private department: string = '';
  private postbox: string = '';
  private manager: string = '';
  private number: string = '';
  private email: string = '';
  private telnumber: string = '';
  private faxnumber: string = '';
  private honorific: string = '';
  private addressValue: string = '';

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
  //部署
  getDepartment(val: string): void {
    this.department = val;
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
