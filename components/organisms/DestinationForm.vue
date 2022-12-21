<template>
  <div>
      <AddressForm />
      <AddressSearch />
      <BelongForm @scan-department="scanDepartment" @scan-division="scanDivision" />
      <CorporationName @scan-corp="scanCorp" />
      <NumberForm @scan-tel="scanTel" @scan-fax="scanFax" />
      <PersonnelForm />
      <ProjectForm />
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
 
 public departmentval: string ='';
 public divisionval: string ='';
 public corpval: string = '';
 public telval: string = '';
 public faxval: string = '';


 // 部署名
 scanDepartment(val: string): void{
  this.departmentval = val;
 }
// 課名
 scanDivision(val: string): void{
  this.divisionval = val;
 }
// 会社名
 scanCorp(val: string): void{
    this.corpval = val;
  }
// TEL番号
  scanTel(val: string): void{
    this.telval = val;
  }
// FAX番号
  scanFax(val: string): void{
    this.faxval = val;
  }

}
</script>