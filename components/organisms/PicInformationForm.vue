<template>
    <div>
        <CalendarForm @scan-date="scanDate" />
        <PrivateCompanyInformation />
        <PicName />
        <AccountInformation />
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

// 日付
scanDate(val: string):void{
  this.dateval = val;
  console.log(this.dateval)
}
  }
</script>