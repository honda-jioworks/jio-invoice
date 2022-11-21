<template>
  <v-sheet class="pageback">
    <v-container fluid>
      <v-row>
        <v-col cols="12"><TransactionSection @get-section="getSection" /></v-col>
      </v-row>
      <p>値：{{ section }}</p>
      <v-row>
        <v-col cols="12"><TaxProcessing @get-process="getProcess" /></v-col>
      </v-row>
      <p>値：{{ process }}</p>
      <v-row>
        <v-col cols="12"><DepositAccount /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><ClosingDate @get-closing="getClosing" /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"><RecoveryCycle @get-month="getMonth" @get-date="getDate" /></v-col>
      </v-row>
      <p>値：{{ month }} {{ date }}</p>
      <v-row>
        <v-col cols="7"><EmployeesBox @get-employee="getEmployee" /></v-col>
      </v-row>
      <p>値：{{ employee }}</p>
      <v-row>
        <v-col cols="7"><StartingBalance @get-balance="getBalance" /></v-col>
      </v-row>
      <p>値：{{ balance }}</p>
      <v-row>
        <v-col cols="7"><BettingRate @get-rate="getRate" /></v-col>
      </v-row>
      <p>値：{{ rate }}</p>
      <v-row>
        <v-col cols="7"><PriceCategory @get-category="getCategory" /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"><TaxRounding @get-taxrounding="getTaxrounding" /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"><PriceQuantityRounding @get-pqrounding="getPqrounding" /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"><PriceCalcRounding @get-pcrounding="getPcrounding" /></v-col>
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
import EmployeesBox from '../molecules/EmployeesBox.vue';
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
    EmployeesBox,
  },
})
export default class TransactionForm extends Vue {
  section: any = '';
  process: any = '';
  closing: any = '';
  month: any = '';
  date: any = '';
  employee: any = '';
  balance: any = '';
  rate: any = '';
  category: any = '';
  taxrnd: any = '';
  pqrounding: any = '';
  pcrounding: any = '';

  getSection(section: any): void {
    this.section = section;
  }

  getProcess(process: any): void {
    this.process = process;
  }

  getClosing(closing: any): void {
    this.closing = closing;
  }

  getMonth(month: any): void {
    this.month = month;
  }

  getDate(date: any): void {
    this.date = date;
  }

  getEmployee(employee: any): void {
    this.employee = employee;
  }

  getBalance(balance: any): void {
    this.balance = balance;
  }

  getRate(rate: any): void {
    this.rate = rate;
  }

  getCategory(category: any): void {
    this.category = category;
  }

  getTaxrounding(taxrnd: any): void {
    this.taxrnd = taxrnd;
  }

  getPqrounding(pqrounding: any): void {
    this.pqrounding = pqrounding;
  }

  getPcrounding(pcrounding: any): void {
    this.pcrounding = pcrounding;
  }
}
</script>
