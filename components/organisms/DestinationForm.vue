<template>
  <div>
    <v-row no-gutters
      ><v-col cols="12"><Headers /></v-col
    ></v-row>
    <v-row no-gutters
      ><v-col cols="12"><Headers3 /></v-col
    ></v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <BlueLabel1 />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"
        ><AddressSearch
          @scan-postal="scanPostal"
          :PostalCode="postalcodeval"
          @send-address="sendAddress"
          :postalCodeVal="postalCodeVal" /></v-col
    ></v-row>
    <v-row no-gutters>
      <v-col cols="12"> <AddressForm @change-address="changeAddress" :addressVal="address" /></v-col
    ></v-row>

    <v-row no-gutters>
      <v-col cols="12"><CorporationName @scan-corp="scanCorp" /></v-col
    ></v-row>
    <v-row no-gutters>
      <v-col cols="12"><BelongForm @scan-department="scanDepartment" @scan-division="scanDivision" /></v-col
    ></v-row>
    <v-row no-gutters>
      <v-col cols="12"
        ><PersonnelForm @scan-position="scanPosition" @scan-staff="scanStaff" @scan-honorific="scanHonorific" /></v-col
    ></v-row>
    <v-row no-gutters>
      <v-col cols="12"><NumberForm @scan-tel="scanTel" @scan-fax="scanFax" /></v-col
    ></v-row>
    <v-row dense>
      <v-col cols="12"><ProjectForm @scan-project="scanProject" /></v-col
    ></v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import AddressForm from '~/components/molecules/AddressForm.vue';
import AddressSearch from '~/components/molecules/AddressSearch.vue';
import BelongForm from '~/components/molecules/BelongForm.vue';
import CorporationName from '~/components/molecules/CorporationName.vue';
import NumberForm from '~/components/molecules/NumberForm.vue';
import PersonnelForm from '~/components/molecules/PersonnelForm.vue';
import ProjectForm from '~/components/molecules/ProjectForm.vue';
import BlueLabel1 from '~/components/atoms/label/BlueLabel1.vue';
import Headers from '~/components/molecules/Headers.vue';
import Headers3 from '~/components/molecules/Headers3.vue';
import AddressForm2 from '~/components/molecules/AddressForm2.vue';
@Component({
  components: {
    AddressForm,
    AddressSearch,
    BelongForm,
    CorporationName,
    NumberForm,
    PersonnelForm,
    ProjectForm,
    BlueLabel1,
    Headers,
    Headers3,
    AddressForm2,
  },
})
export default class DestinationForm extends Vue {
  public address: string = '';
  public addressval: string = '';
  public postalcodeval: string = '';
  public postalCode: string = '';
  public postalCodeVal: string = this.postalCode;
  public changeAddressVal: string = '';
  public departmentval: string = '';
  public divisionval: string = '';
  public corpval: string = '';
  public telval: string = '';
  public faxval: string = '';
  public potisionval: string = '';
  public staffval: string = '';
  public honorificval: string = '';
  public projectval: string = '';

  // 住所
  scanAddress(val: string): void {
    this.addressval = val;
  }
  //住所をmoleculesから受け取る
  sendAddress(val: string): void {
    this.address = val;
  }
  changeAddress(val: string): void {
    //住所をmoleculesから受け取りorganismsで出力
    this.changeAddressVal = val;
  }
  // 郵便番号
  scanPostal(val: string): void {
    this.postalcodeval = val;
  }
  // 部署名
  scanDepartment(val: string): void {
    this.departmentval = val;
  }
  // 課名
  scanDivision(val: string): void {
    this.divisionval = val;
  }
  // 会社名
  scanCorp(val: string): void {
    this.corpval = val;
  }
  // TEL番号
  scanTel(val: string): void {
    this.telval = val;
  }
  // FAX番号
  scanFax(val: string): void {
    this.faxval = val;
  }
  // 役職
  scanPosition(val: string): void {
    this.potisionval = val;
  }
  // 担当者
  scanStaff(val: string): void {
    this.staffval = val;
  }
  // 敬称
  scanHonorific(val: string): void {
    this.honorificval = val;
  }
  // 案件名
  scanProject(val: string): void {
    this.projectval = val;
  }
}
</script>
