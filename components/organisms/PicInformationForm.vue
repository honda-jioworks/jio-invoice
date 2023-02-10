<template>
  <div>
    <v-row no-gutters
      ><v-col><Headers2 /></v-col
    ></v-row>
    <v-row no-gutters>
      <v-col cols="12"> <CalendarForm @scan-date="scanDate" @get-new-number="getNewNumber" /></v-col
    ></v-row>
    <v-row no-gutters>
      <v-col cols="12"> <PrivateCompanyInformation /></v-col
    ></v-row>
    <v-row no-gutters>
      <v-col cols="12"> <PicName @scan-person="scanPerson" /></v-col
    ></v-row>
    <v-row no-gutters>
      <v-col cols="12"> <AccountInformation @scan-one="scanOne" @scan-two="scanTwo" @scan-three="scanThree" /></v-col
    ></v-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import AccountInformation from '~/components/molecules/AccountInformation.vue';
import PrivateCompanyInformation from '~/components/molecules/PrivateCompanyInformation.vue';
import PicName from '~/components/molecules/PicName.vue';
import CalendarForm from '~/components/molecules/CalendarForm.vue';
import Headers2 from '~/components/molecules/Headers2.vue';

@Component({
  components: {
    AccountInformation,
    PrivateCompanyInformation,
    PicName,
    CalendarForm,
    Headers2,
  },
})
export default class PicInformationForm extends Vue {
  public dateval: string = '';
  public nameval: string = '';
  public oneval: string = '';
  public twoval: string = '';
  public threeval: string = '';
  public newNumber: string = '';

  scanDate(val: string): void {
    this.dateval = val;
    // 日付値保持確認
  }

  scanPerson(val: string): void {
    this.nameval = val;
    // 担当者名値保持確認
  }

  scanOne(val: string): void {
    this.oneval = val;
    // 口座情報1段目値保持確認
  }

  scanTwo(val: string): void {
    this.twoval = val;
    // 口座情報2段目値保持確認
  }

  scanThree(val: string): void {
    this.threeval = val;
    // 口座情報3段目値保持確認
  }

  getNewNumber(val: string): void {
    this.newNumber = val;
    // 請求書ナンバー値保持確認
  }
}
</script>
