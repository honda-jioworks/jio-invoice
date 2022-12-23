<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12">
        <BlueLabel1 />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <AddressSearch />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <AddressForm />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <CorporationName />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <BelongForm />
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12">
        <PersonnelForm />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <NumberForm />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <ProjectForm />
      </v-col>
    </v-row>
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
  },
})
export default class DestinationForm extends Vue {}
</script>
