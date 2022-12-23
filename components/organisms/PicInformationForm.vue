<template>
    <div>
      <v-row no-gutters>
      <v-col cols="12">
        <CalendarForm @scan-date="scanDate" @get-new-number="getNewNumber"/></v-col></v-row>
        <v-row no-gutters>
      <v-col cols="12">
        <PrivateCompanyInformation  /></v-col></v-row>
        <v-row no-gutters>
      <v-col cols="12">
        <PicName @scan-person="scanPerson" /></v-col></v-row>
        <v-row no-gutters>
      <v-col cols="12">
        <AccountInformation @scan-one="scanOne" @scan-two="scanTwo" @scan-three="scanThree" /></v-col></v-row>
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
    public dateval: string ='';
    public nameval: string ='';
    public oneval: string ='';
    public twoval: string ='';
    public threeval: string ='';
    public newNumber: string = '';

// 日付
scanDate(val: string):void{
  this.dateval = val;

}
// 担当者名
scanPerson(val: string): void{
  this.nameval = val;

}
// 口座情報
scanOne(val: string): void{
  this.oneval = val;

}
scanTwo(val: string): void{
  this.twoval = val;

}
scanThree(val: string): void{
  this.threeval = val;

}
getNewNumber(val: string): void {
    this.newNumber = val;

  }
}

