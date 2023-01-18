<template>
  <v-container class="color" :items="desserts">
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
        <PostBox v-for="item in desserts" :key="item.post_id" :value.sync="item.post" />
      </v-col>
      <v-col cols="4">
        <!--部署-->
        <DepartmentInput v-for="item in desserts" :key="item.department_id" :value.sync="item.department" />
      </v-col>
      <v-col cols="4">
        <!--担当者名-->
        <HonorificBox
          v-for="item in desserts"
          :key="item.manager_id"
          :valueManager.sync="item.manager"
          :valueHonorific.sync="item.honorific"
        />
        <ManagerBox />
      </v-col>
    </v-row>
    <!--4行目-->
    <v-row>
      <v-col cols="4">
        <!--担当者携帯-->
        <PhoneNumber class="mt-n5" />
      </v-col>
      <v-col cols="5">
        <!--担当者メール-->
        <EmailInput class="mt-n5" :getClick="email" />
      </v-col>
    </v-row>
    <!--5行目-->
    <v-row class="mt-n5">
      <v-col cols="4">
        <!--TEL-->
        <TelNumberInput class="mt-n5" />
      </v-col>
      <v-col cols="4">
        <!--FAX-->
        <FaxNumberInput class="mt-n5" />
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
import HonorificBox from '~/components/molecules/Manager.vue';
import ManagerBox from '~/components/molecules/Manager.vue';
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
    ManagerBox,
    PhoneNumber,
    EmailInput,
    TelNumberInput,
    FaxNumberInput,
  },
})
export default class ContactAddressForm extends Vue {
  keisyo: Array<string> = ['殿', '様', '御中'];

  desserts = [
    {
      post_id: '',
      post: '',
      department_id: '',
      department: '',
      manager_id: '',
      manager: '',
      honorific: '',
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
}
</script>
<style lang="scss" scoped>
.color {
  background: white;
}
</style>
