<template>
    <div>
        <AddressForm />
        <AddressSearch />
        <BelongForm />
        <CorporationName />
        <NumberForm />
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
    
  }
</script>