<template>
  <v-container class="Accountcolor">
    <!-- 1段目 -->
    <v-row>
      <v-col cols="4"
        ><TransactionSection
          v-for="item in desserts"
          :key="item.transaction_id"
          :value.sync="item.transaction"
          :items="items"
          class="mb-n5"
      /></v-col>
      <v-col cols="4"
        ><TaxProcessing
          v-for="item in desserts"
          :key="item.tax_id"
          :value.sync="item.tax"
          :items="taxitems"
          class="mb-n5"
      /></v-col>
    </v-row>
    <!-- 2段目 -->
    <v-row>
      <v-col cols="4"><ClosingDate class="mb-n5" /></v-col>
      <v-col cols="4"><RecoveryCycle class="mb-n5" /></v-col>
    </v-row>
    <!-- 3段目 -->
    <v-row>
      <v-col cols="4"
        ><StartingBalance v-for="item in desserts" :key="item.balance_id" :value.sync="item.balance" class="mb-n5"
      /></v-col>
      <v-col cols="4"
        ><BettingRate v-for="item in desserts" :key="item.betting_id" :value.sync="item.betting" class="mb-n5"
      /></v-col>
    </v-row>
    <!-- 4段目 -->
    <v-row>
      <v-col cols="4"
        ><PriceCategory
          v-for="item in desserts"
          :key="item.category_id"
          :value.sync="item.category"
          :items="categoryitems"
          class="mb-n5"
      /></v-col>
    </v-row>
    <!-- 5段目 -->
    <v-row>
      <v-col cols="4"
        ><TaxRounding
          v-for="item in desserts"
          :key="item.taxrounding_id"
          :value.sync="item.taxrounding"
          :items="taxroundingitems"
          class="mb-n5"
      /></v-col>
      <v-col cols="4"
        ><PriceQuantityRounding
          v-for="item in desserts"
          :key="item.pricerounding_id"
          :value.sync="item.pricerounding"
          :items="priceroundingitems"
          class="mb-n5"
      /></v-col>
      <v-col cols="4"
        ><PriceCalcRounding
          v-for="item in desserts"
          :key="item.pricecalc_id"
          :value.sync="item.pricecalc"
          :items="pricecalcitems"
          class="mb-n5"
      /></v-col>
    </v-row>
    <!-- 6段目 -->
    <v-row>
      <v-col cols="4"
        ><TaxAddIndicateCheck v-for="item in desserts" :key="item.taxcheck_id" :value.sync="item.taxcheck" class="mb-5"
      /></v-col>
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
import TaxProcessing from '../molecules/TaxProcessing.vue';
import TransactionSection from '../molecules/TransactionSection.vue';
import TaxAddIndicateCheck from '../molecules/TaxAddIndicateCheck.vue';

@Component({
  components: {
    TransactionSection,
    TaxProcessing,
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
  items: Array<string> = ['掛売上', '即時売上'];
  taxitems: Array<string> = ['内税', '外税', '合計請求', '税なし'];
  deposititems: Array<string> = ['PayPay銀行アストロ支店', '三井住友銀行千代田支店', 'Fizz', 'Buzz'];
  categoryitems: Array<string> = ['定価（上代）', '販売単価1', '販売単価2', '販売単価3', '販売単価4', '販売単価5'];
  taxroundingitems: Array<string> = ['基本情報に従う', '切り上げ', '切り捨て', '四捨五入'];
  priceroundingitems: Array<string> = ['基本情報に従う', '切り上げ', '切り捨て', '四捨五入'];
  pricecalcitems: Array<string> = ['基本情報に従う', '切り上げ', '切り捨て', '四捨五入'];

  desserts = [
    {
      transaction_id: '',
      transaction: '',
      tax_id: '',
      tax: '',
      deposit_id: '',
      deposit: '',
      balance_id: '',
      balance: '',
      betting_id: '',
      betting: '',
      category_id: '',
      category: '',
      taxrounding_id: '',
      taxrounding: '',
      pricerounding_id: '',
      pricerounding: '',
      pricecalc_id: '',
      pricecalc: '',
      taxcheck_id: '',
      taxcheck: false,
    },
  ];
}
</script>

<style lang="scss" scoped>
.Accountcolor {
  background-color: white;
}
</style>
