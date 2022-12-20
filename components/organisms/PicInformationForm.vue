<template>
    <div>
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
  
  @Component({ components: {
    AccountInformation,
    PrivateCompanyInformation,
    PicName,
    },
 })
  export default class PicInformationForm extends Vue {
    
  }
</script>