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
      <v-col cols="4"
        ><DepositAccount
          v-for="item in desserts"
          :key="item.deposit_id"
          :value.sync="item.deposit"
          :items="deposititems"
          class="mb-n5"
      /></v-col>
      <v-col cols="4"><ClosingDate class="mb-n5" /></v-col>
      <v-col cols="4"><RecoveryCycle class="mb-n5" /></v-col>
    </v-row>
    <!-- 3段目 -->
    <v-row>
      <v-col cols="4"><StartingBalance class="mb-n5" /></v-col>
      <v-col cols="4"><BettingRate class="mb-n5" /></v-col>
    </v-row>
    <!-- 4段目 -->
    <v-row>
      <v-col cols="4"><PriceCategory class="mb-n5" /></v-col>
    </v-row>
    <!-- 5段目 -->
    <v-row>
      <v-col cols="4"><TaxRounding class="mb-n5" /></v-col>
      <v-col cols="4"><PriceQuantityRounding class="mb-n5" /></v-col>
      <v-col cols="4"><PriceCalcRounding class="mb-n5" /></v-col>
    </v-row>
    <!-- 6段目 -->
    <v-row>
      <v-col cols="4"><TaxAddIndicateCheck class="mb-5" /></v-col>
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
  items: Array<string> = ['掛売上', '即時売上'];
  taxitems: Array<string> = ['内税', '外税', '合計請求', '税なし'];
  deposititems: Array<string> = ['PayPay銀行アストロ支店', '三井住友銀行千代田支店', 'Fizz', 'Buzz'];

  desserts = [
    {
      transaction_id: '',
      transaction: '',
      tax_id: '',
      tax: '',
      deposit_id: '',
      deposit: '',
    },
  ];
}
</script>

<style lang="scss" scoped>
.Accountcolor {
  background-color: white;
}
</style>
