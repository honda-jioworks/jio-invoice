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
    <div><DepartmentInput /></div>
    <div><PostBox /></div>
    <div><HonorificBox /></div>
    <div><PhoneNumber /></div>
    <div><EmailInput /></div>
    <div><TelNumberInput /></div>
    <div><FaxNumberInput /></div>
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
export default class CustomerRegisterForm extends Vue {
  private postalCode: string = '';
  private postalCodeVal: string = this.postalCode;
  private address: string = '';
  private changeAddressVal: string = '';

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
}
</script>
