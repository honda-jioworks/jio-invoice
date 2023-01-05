<template>
  <v-container class="Accountcolor">
    <!-- 1段目 -->
    <v-row>
      <v-col cols="4"><TransactionSection class="mb-n5" @keep-id="keepId" /></v-col>
      <v-col cols="4"><TaxProcessing class="mb-n5" @send-tax="getZeiShori" /></v-col>
    </v-row>
    <!-- 2段目 -->
    <v-row>
      <v-col cols="4"><DepositAccount class="mb-n5" @send-nyukinsaki="getNyukinsaki" /></v-col>
      <v-col cols="4"><ClosingDate class="mb-n5" @send-shimebi="getShimebi" /></v-col>
      <v-col cols="4"
        ><RecoveryCycle class="mb-n5" @send-cyclemonth="getCyclemonth" @send-cycledate="getCycledate"
      /></v-col>
    </v-row>
    <!-- 3段目 -->
    <v-row>
      <v-col cols="4"><StartingBalance class="mb-n5" @send-starting-balance="getStartingBalance" /></v-col>
      <v-col cols="4"><BettingRate class="mb-n5" @send-kakeritsu="getKakeritsu" /></v-col>
    </v-row>
    <!-- 4段目 -->
    <v-row>
      <v-col cols="4"><PriceCategory class="mb-n5" @send-price-category="getPriceCategory" /></v-col>
    </v-row>
    <!-- 5段目 -->
    <v-row>
      <v-col cols="4"><TaxRounding class="mb-n5" @send-tax-rounding="getTaxRounding" /></v-col>
      <v-col cols="4"
        ><PriceQuantityRounding class="mb-n5" @send-price-quantity-rounding="getPriceQuantityRounding"
      /></v-col>
      <v-col cols="4"><PriceCalcRounding class="mb-n5" @send-price-calc-rounding="getPriceCalcRounding" /></v-col>
    </v-row>
    <!-- 6段目 -->
    <v-row>
      <v-col cols="4"><TaxAddIndicateCheck class="mb-5" @send-tax-add-indicate-check="getTaxAddIndicateCheck" /></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
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
import TaxAddIndicateCheck from '../molecules/TaxAddIndicateCheck.vue';

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
export default class TransactionForm extends Vue {
  value: any = '';
  zeiShoriVal: string = '';
  nyukinsakiVal: string = '';
  shimebiVal: string = '';
  cyclemonthVal: string = '';
  cycledateVal: string = '';
  startingBalanceVal: string = '';
  kakeritsuVal: string = '';
  priceCategoryVal: string = '';
  taxRoundingVal: string = '';
  priceQuantityRoundingVal: string = '';
  priceCalcRoundingVal: string = '';
  taxAddIndicateCheckVal: boolean = false;

  keepId(sectionId: any): void {
    this.value = sectionId;
  }
  getZeiShori(val: string): void {
    this.zeiShoriVal = val;
  }
  getNyukinsaki(val: string): void {
    this.nyukinsakiVal = val;
  }
  getShimebi(val: string): void {
    this.shimebiVal = val;
  }
  getCyclemonth(val: string): void {
    this.cyclemonthVal = val;
  }
  getCycledate(val: string): void {
    this.cycledateVal = val;
  }
  getStartingBalance(val: string): void {
    this.startingBalanceVal = val;
  }
  getKakeritsu(val: string): void {
    this.kakeritsuVal = val;
  }
  getPriceCategory(val: string): void {
    this.priceCategoryVal = val;
  }
  getTaxRounding(val: string): void {
    this.taxRoundingVal = val;
  }
  getPriceQuantityRounding(val: string): void {
    this.priceQuantityRoundingVal = val;
  }
  getPriceCalcRounding(val: string): void {
    this.priceCalcRoundingVal = val;
  }
  getTaxAddIndicateCheck(val: boolean): void {
    this.taxAddIndicateCheckVal = val;
  }
  test3() {
    alert(
      this.value +
        this.zeiShoriVal +
        this.nyukinsakiVal +
        this.shimebiVal +
        this.cyclemonthVal +
        this.cycledateVal +
        this.startingBalanceVal +
        this.kakeritsuVal +
        this.priceCategoryVal +
        this.taxRoundingVal +
        this.priceQuantityRoundingVal +
        this.priceCalcRoundingVal +
        this.taxAddIndicateCheckVal
    );
  }
}
</script>

<style lang="scss" scoped>
.Accountcolor {
  background-color: white;
}
</style>
