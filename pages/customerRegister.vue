<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <BasicInfomationForm />
      </v-col>
      <v-col cols="12">
        <ContactAddressForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import BasicInfomationForm from '~/components/organisms/BasicInfomationForm.vue';
import ContactAddressForm from '~/components/organisms/ContactAddressForm.vue';

@Component({
  components: { BasicInfomationForm, ContactAddressForm },
})
export default class IndexPage extends Vue {}
</script>
