<template>
  <div class="Transactioncolor">
    <!-- 1段目 -->
    <v-row>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><TransactionSection class="mb-n5" /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><TaxProcessing class="mb-n5" /></v-col>
      </v-row>
     <!-- 2段目 -->
    <v-row>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><DepositAccount class="mb-n5" /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><ClosingDate class="mb-n5" /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><RecoveryCycle class="mb-n5" /></v-col>
    </v-row>
      <!-- 3段目 -->
    <v-row>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><StartingBalance class="mb-n5" /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><BettingRate class="mb-n5" /></v-col>
      </v-row>
      <!-- 4段目 -->
    <v-row>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><PriceCategory class="mb-n5" /></v-col>
    </v-row>
      <!-- 5段目 -->
    <v-row>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><TaxRounding class="mb-n5"/></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><PriceQuantityRounding class="mb-n5" /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><PriceCalcRounding class="mb-n5" /></v-col>
    </v-row>
      <!-- 6段目 -->
    <v-row>
      <v-col cols="12"><TaxAddIndicateCheck class="mb-5" /></v-col>
      </v-row>
  </div>
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
</script>
<style lang="scss" scoped>
.Transactioncolor {
  background-color: white;
}
</style>