<template>
    <div>
        <CalendarForm @scan-date="scanDate" />
        <PrivateCompanyInformation  />
        <PicName @scan-person="scanPerson" />
        <AccountInformation @scan-one="scanOne" @scan-two="scanTwo" @scan-three="scanThree" />
    </div>
  </template>

  <script lang="ts">
  import {Vue, Component} from 'nuxt-property-decorator';
  import AccountInformation from  '~/components/molecules/AccountInformation.vue';
  import PrivateCompanyInformation from  '~/components/molecules/PrivateCompanyInformation.vue';
  import PicName from  '~/components/molecules/PicName.vue';
  import  CalendarForm from  '~/components/molecules/CalendarForm.vue';
  
  @Component({ components: {
    AccountInformation,
    PrivateCompanyInformation,
    PicName,
    CalendarForm,
    },
 })
  export default class PicInformationForm extends Vue {
    public dateval: string ='';
    public nameval: string ='';
    public oneval: string ='';
    public twoval: string ='';
    public threeval: string ='';

// 日付
scanDate(val: string):void{
  this.dateval = val;
  console.log(this.dateval)
}
// 担当者名
scanPerson(val: string): void{
  this.nameval = val;
  console.log(this.nameval)
}
// 口座情報
scanOne(val: string): void{
  this.oneval = val;
  console.log(this.oneval)
}
scanTwo(val: string): void{
  this.twoval = val;
  console.log(this.twoval)
}
scanThree(val: string): void{
  this.threeval = val;
  console.log(this.threeval)
}
  }
</script>