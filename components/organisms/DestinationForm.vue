<template>
  <div>
      <AddressForm @change-address="changeAddress" :addressVal="address" />
      <AddressSearch 
        @scan-postal="scanPostal"
        :PostalCode="postalcodeval" 
        @send-address="sendAddress"
        :postalCodeVal="postalCodeVal"
       />
      <BelongForm @scan-department="scanDepartment" @scan-division="scanDivision" />
      <CorporationName @scan-corp="scanCorp" />
      <NumberForm @scan-tel="scanTel" @scan-fax="scanFax" />
      <PersonnelForm @scan-position="scanPosition" @scan-staff="scanStaff" @scan-honorific="scanHonorific" />
      <ProjectForm @scan-project="scanProject" />
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator';
import AddressForm from  '~/components/molecules/AddressForm.vue';
import AddressSearch from  '~/components/molecules/AddressSearch.vue';
import BelongForm from  '~/components/molecules/BelongForm.vue';
import CorporationName from  '~/components/molecules/CorporationName.vue';
import NumberForm from  '~/components/molecules/NumberForm.vue';
import PersonnelForm from  '~/components/molecules/PersonnelForm.vue';
import ProjectForm from  '~/components/molecules/ProjectForm.vue';


@Component({ components: {
  AddressForm,
  AddressSearch,
  BelongForm,
  CorporationName,
  NumberForm,
  PersonnelForm,
  ProjectForm,
  },
})
export default class DestinationForm extends Vue {
 public address: string ='';
 public addressval: string ='';
 public postalcodeval: string ='';
 public postalCode: string = '';
 public postalCodeVal: string = this.postalCode;
 public changeAddressVal: string = '';
 public departmentval: string ='';
 public divisionval: string ='';
 public corpval: string = '';
 public telval: string = '';
 public faxval: string = '';
 public potisionval: string = '';
 public staffval: string = '';
 public honorificval: string = '';
 public projectval: string = '';

 // 住所
scanAddress(val: string): void{
  this.addressval = val;
  console.log(this.addressval)
  } 
//住所をmoleculesから受け取る
sendAddress(val: string): void {
    this.address = val;
    console.log(this.address)
  }
changeAddress(val: string): void {
//住所をmoleculesから受け取りorganismsで出力
    this.changeAddressVal = val;
  }
 // 郵便番号
 scanPostal(val: string): void{
  this.postalcodeval = val;
 }
 // 部署名
  scanDepartment(val: string): void{
  this.departmentval = val;
  console.log(this.departmentval)
 }
// 課名
 scanDivision(val: string): void{
  this.divisionval = val;
  console.log(this.divisionval)
 }
  // 会社名
 scanCorp(val: string): void{
  this.corpval = val;
  console.log(this.corpval)
  }
  // TEL番号
  scanTel(val: string): void{
    this.telval = val;
    console.log(this.telval)
  }
  // FAX番号
  scanFax(val: string): void{
    this.faxval = val;
    console.log(this.faxval)
  }
  // 役職
  scanPosition(val: string): void{
    this.potisionval = val;
    console.log(this.potisionval)
  }
  // 担当者
  scanStaff(val: string): void{
    this.staffval = val;
    console.log(this.staffval)
  }
  // 敬称
  scanHonorific(val: string): void{
    this.honorificval = val;
    console.log(this.honorificval)
  }
  // 案件名
  scanProject(val: string): void{
    this.projectval = val;
    console.log(this.projectval)
  }
}
</script>