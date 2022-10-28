<template>
  <div>
    <v-row :align-content="test">
      <v-col cols="6"><ConsumptionTax /></v-col>
      <v-col cols="6"><ConsumptionTaxRounding /></v-col>
    </v-row>
    <v-row>
      <v-col cols="6"><MulUnitPriceQuantityRounding /></v-col>
      <v-col cols="6"><UnitPriceCulculationRounding /></v-col>
    </v-row>
    <v-row>
      <v-col cols="6"><DecimalalPart /></v-col>
      <v-col cols="6"><NumberOfDigits /></v-col>
    </v-row>
    <v-row>
      <v-col cols="6"><AmountOfWithholdingTax /></v-col>
    </v-row>
    <v-row>
      <v-col cols="6"><SubjectName /></v-col>
      <v-col cols="6"><TaxRate /></v-col>
    </v-row>
    <v-row>
      <v-col cols="6"><SalaryPaymentDate /></v-col>
      <v-col cols="6"><BonusPaymentDate /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import ConsumptionTax from '@/components/molecules/ConsumptionTax.vue';
import ConsumptionTaxRounding from '@/components/molecules/ConsumptionTaxRounding.vue';
import MulUnitPriceQuantityRounding from '@/components/molecules/MulUnitPriceQuantityRounding.vue';
import UnitPriceCulculationRounding from '@/components/molecules/UnitPriceCulculationRounding.vue';
import DecimalalPart from '@/components/molecules/DecimalalPart.vue';
import NumberOfDigits from '@/components/molecules/NumberOfDigits.vue';
import AmountOfWithholdingTax from '@/components/molecules/AmountOfWithholdingTax.vue';
import SubjectName from '@/components/molecules/SubjectName.vue';
import TaxRate from '@/components/molecules/TaxRate.vue';
import SalaryPaymentDate from '@/components/molecules/SalaryPaymentDate.vue';
import BonusPaymentDate from '@/components/molecules/BonusPaymentDate.vue';

@Component({
  components: {
    ConsumptionTax,
    ConsumptionTaxRounding,
    MulUnitPriceQuantityRounding,
    UnitPriceCulculationRounding,
    DecimalalPart,
    NumberOfDigits,
    AmountOfWithholdingTax,
    SubjectName,
    TaxRate,
    SalaryPaymentDate,
    BonusPaymentDate,
  },
})
export default class DetailsInfomation extends Vue {}
</script>
