<template>
  <v-sheet>
    <div><PostalCode /></div>
    <div><Address /></div>
    <div><Department /></div>
    <div><Post /></div>
    <div><Charge /></div>
    <div><Phone /></div>
    <div><Email /></div>
    <div><Telnumber /></div>
    <div><Faxnumber /></div>

    <!-- 
    <v-container fluid>
      <v-row>
        <v-col cols="12"><TransactionSection /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><TaxProcessing /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><DepositAccount /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><ClosingDate /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"><RecoveryCycle /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"><StartingBalance /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"><BettingRate /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"><PriceCategory /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"><TaxRounding /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"><PriceQuantityRounding /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"><PriceCalcRounding /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"><TaxAddIndicateCheck /></v-col>
      </v-row>
    </v-container> -->
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PostalCode from '~/components/molecules/PostalCode.vue';
import Address from '@/components/molecules/Address.vue';
import Department from '@/components/molecules/Post.vue';
import Post from '@/components/molecules/Department.vue';
import Charge from '@/components/molecules/Charge.vue';
import Phone from '@/components/molecules/Phone.vue';
import Email from '@/components/molecules/Email.vue';
import Telnumber from '@/components/molecules/Telnumber.vue';
import Faxnumber from '@/components/molecules/Faxnumber.vue';
// import PriceCalcRounding from '../molecules/PriceCalcRounding.vue';
// import PriceQuantityRounding from '../molecules/PriceQuantityRounding.vue';
// import TaxRounding from '../molecules/TaxRounding.vue';
// import PriceCategory from '../molecules/PriceCategory.vue';
// import BettingRate from '../molecules/BettingRate.vue';
// import StartingBalance from '../molecules/StartingBalance.vue';
// import RecoveryCycle from '../molecules/RecoveryCycle.vue';
// import ClosingDate from '../molecules/ClosingDate.vue';
// import DepositAccount from '../molecules/DepositAccount.vue';
// import TaxProcessing from '../molecules/TaxProcessing.vue';
// import TransactionSection from '../molecules/TransactionSection.vue';

@Component({
  components: {
    Address,
    PostalCode,
    Post,
    Department,
    Charge,
    Phone,
    Email,
    Telnumber,
    Faxnumber,
    // TaxProcessing,
    // DepositAccount,
    // ClosingDate,
    // RecoveryCycle,
    // StartingBalance,
    // BettingRate,
    // PriceCategory,
    // TaxRounding,
    // PriceQuantityRounding,
    // PriceCalcRounding,
    // TaxAddIndicateCheck,
  },
})
export default class CustomerRegisterForm extends Vue {
  // 登録処理など記述していくのか？
}
</script>
