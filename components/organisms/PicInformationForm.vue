<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12"> <CalendarForm @get-new-number="getNewNumber" /></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12"> <PrivateCompanyInformation /></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12"> <PicName /></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12"> <AccountInformation /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import AccountInformation from '~/components/molecules/AccountInformation.vue';
import PrivateCompanyInformation from '~/components/molecules/PrivateCompanyInformation.vue';
import PicName from '~/components/molecules/PicName.vue';
import CalendarForm from '~/components/molecules/CalendarForm.vue';

@Component({
  components: {
    AccountInformation,
    PrivateCompanyInformation,
    PicName,
    CalendarForm,
  },
})
export default class PicInformationForm extends Vue {
  public newNumber: string = '';

  getNewNumber(val: string): void {
    this.newNumber = val;
  }
}
</script>
