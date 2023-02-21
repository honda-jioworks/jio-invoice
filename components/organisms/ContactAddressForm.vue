<template>
  <v-container class="color" :items="desserts">
    <!--1行目-->
    <v-row>
      <v-col cols="6">
        <!--郵便番号-->
        <PostalCode
          v-for="item in desserts"
          :key="item.postalcode_id"
          :value.sync="item.postalcode"
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
        <AddressInput
          class="mt-n10"
          v-for="item in desserts"
          :key="item.address_id"
          :value.sync="item.address"
          :addressVal="address"
          @change-address="changeAddress"
        />
        <!--郵便番号と住所の行間詰め-->
      </v-col>
      <v-spacer />
    </v-row>
    <v-row class="mt-n5">
      <v-col cols="4">
        <!--役職-->
        <PostBox v-for="item in desserts" :key="item.post_id" :value.sync="item.post" />
      </v-col>
      <v-col cols="4">
        <!--部署-->
        <DepartmentInput v-for="item in desserts" :key="item.department_id" :value.sync="item.department" />
      </v-col>
      <v-col cols="4">
        <!--担当者名-->
        <ManagerBox v-for="item in desserts" :key="item.manager_id" :value.sync="item.manager" />
        <!-- 敬称 -->
        <HonorificBox
          v-for="item in desserts"
          :key="`form-${item.honorific_id}`"
          :value.sync="item.honorific"
          :keisyo_items="keisyo_items"
        />
      </v-col>
    </v-row>
    <!--4行目-->
    <v-row>
      <v-col cols="4">
        <!--担当者携帯-->
        <PhoneNumber v-for="item in desserts" :key="item.phonenumber_id" :value.sync="item.phonenumber" class="mt-n5" />
      </v-col>
      <v-col cols="5">
        <!--担当者メール-->
        <EmailInput
          class="mt-n5"
          v-for="item in desserts"
          :key="item.emailinput_id"
          :value.sync="item.emailinput"
          :getClick="email"
        />
      </v-col>
    </v-row>
    <!--5行目-->
    <v-row class="mt-n5">
      <v-col cols="4">
        <!--TEL-->
        <TelNumberInput v-for="item in desserts" :key="item.telnumber_id" :value.sync="telnumber" class="mt-n5" />
      </v-col>
      <v-col cols="4">
        <!--FAX-->
        <FaxNumberInput v-for="item in desserts" :key="item.faxnumber_id" :value.sync="faxnumber" class="mt-n5" />
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
import ManagerBox from '~/components/molecules/Manager.vue';
import HonorificBox from '~/components/molecules/HonorificBox.vue';
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
    ManagerBox,
    HonorificBox,
    PhoneNumber,
    EmailInput,
    TelNumberInput,
    FaxNumberInput,
  },
})
export default class ContactAddressForm extends Vue {
  keisyo_items: Array<string> = ['殿', '様', '御中'];

  desserts = [
    {
      postalcode_id: '',
      postalcode: '',
      post_id: '',
      post: '',
      address: '',
      address_id: '',
      department_id: '',
      department: '',
      manager_id: '',
      manager: '',
      honorific_id: '',
      honorific: '',
      phonenumber_id: '',
      phonenumber: '',
      emailinput_id: '',
      emailinput: '',
      telnumber_id: '',
      telnumber: 0,
      faxnumber_id: '',
      faxnumber: 0,
    },
  ];

  public postalCode: string = '';
  public postalCodeVal: string = this.postalCode;
  public address: string = '';
  public changeAddressVal: string = '';
  public department: string = '';
  public postbox: string = '';
  public manager: string = '';
  public number: string = '';
  public email: string = '';
  public telnumber: string = '';
  public faxnumber: string = '';
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
}
</script>
<style lang="scss" scoped>
.color {
  background: white;
}
</style>
