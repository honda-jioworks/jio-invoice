<template>
  <v-sheet class="pageback">
    <v-container fluid>
      <v-row>
        <v-col cols="12"><TransactionSection @get-section="getSection" /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><TaxProcessing @get-process="getProcess" /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><DepositAccount @get-account="getAccount" /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12"><ClosingDate @get-closing="getClosing" /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"><RecoveryCycle @get-month="getMonth" @get-date="getDate" /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"><EmployeesBox @get-employee="getEmployee" /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"><StartingBalance @get-balance="getBalance" /></v-col>
      </v-row>
      <v-row>
        <v-col cols="7"><BettingRate @get-rate="getRate" /></v-col>
      </v-row>
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
        <v-col cols="7"><TaxAddIndicateCheck @get-tax="getTax" /></v-col>
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
  section: string = '';
  process: string = '';
  closing: string = '';
  month: string = '';
  date: string = '';
  employee: string = '';
  balance: string = '';
  rate: string = '';
  category: string = '';
  taxrnd: string = '';
  pqrounding: string = '';
  pcrounding: string = '';
  tax: boolean = false;
  account: string ='';

  // 取引区分
  getSection(section: string): void {
    this.section = section;
  }

  // 税処理
  getProcess(process: string): void {
    this.process = process;

  }

  // 入金先
  getAccount(account: string): void {
    this.account = account;
  }

  // 締日
  getClosing(closing: string): void {
    this.closing = closing;
  }

  // 回収サイクル
  getMonth(month: string): void {
    this.month = month;
  }

  // 回収サイクル
  getDate(date: string): void {
    this.date = date;
  }

  // 自社担当者
  getEmployee(employee: string): void {
    this.employee = employee;
  }

  // 開始残高
  getBalance(balance: string): void {
    this.balance = balance;
  }

  // 掛掛率
  getRate(rate: string): void {
    this.rate = rate;
  }

  // 単価区分
  getCategory(category: string): void {
    this.category = category;
  }

  // 消費税の端数処理
  getTaxrounding(taxrnd: string): void {
    this.taxrnd = taxrnd;
  }

  // 単価×数量の端数処理
  getPqrounding(pqrounding: string): void {
    this.pqrounding = pqrounding;
  }

  // 単価計算の端数処理
  getPcrounding(pcrounding: string): void {
    this.pcrounding = pcrounding;
  }

  // 合計請求書で消費税を合算表示する
  getTax(tax: boolean): void {
    this.tax = tax;
  }
}
</script>
