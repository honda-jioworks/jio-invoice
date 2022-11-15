<template>
  <v-sheet class="pageback">
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
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import TaxAddIndicateCheck from '../molecules/TaxAddIndicateCheck.vue';
import PriceCalcRounding from '../molecules/PriceCalcRounding.vue';
import PriceQuantityRounding from '../molecules/PriceQuantityRounding.vue';
import TaxRounding from '../molecules/TaxRounding.vue';
import PriceCategory from '../molecules/PriceCategory.vue';
import BettingRate from '../molecules/BettingRate.vue';
import StartingBalance from '../molecules/StartingBalance.vue';
import RecoveryCycle from '../molecules/RecoveryCycle.vue';
import ClosingDate from '../molecules/ClosingDate.vue';
import DepositAccount from '../molecules/DepositAccount.vue';
import TaxProcessing from '../molecules/TaxProcessing.vue';
import TransactionSection from '../molecules/TransactionSection.vue';

@Component({
  components: {
    TransactionSection,
    TaxProcessing,
    DepositAccount,
    ClosingDate,
    RecoveryCycle,
    StartingBalance,
    BettingRate,
    PriceCategory,
    TaxRounding,
    PriceQuantityRounding,
    PriceCalcRounding,
    TaxAddIndicateCheck,
  },
})
export default class TransactionForm extends Vue {}
</script>
