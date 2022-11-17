<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <BasicInfomationForm />
      </v-col>
      <v-col cols="12">
        <ContactAddressForm />
      </v-col>
      <v-col cols="12">
        <TransactionForm />
      </v-col>

      <v-col cols="12">
        <AccountInformation />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import BasicInfomationForm from '~/components/organisms/BasicInfomationForm.vue';
import ContactAddressForm from '~/components/organisms/ContactAddressForm.vue';
import TransactionForm from '~/components/organisms/TransactionForm.vue';
import AccountInformation from '~/components/organisms/AccountInformation.vue';

@Component({
  components: { BasicInfomationForm, ContactAddressForm, TransactionForm, AccountInformation },
})
export default class IndexPage extends Vue {}
</script>
