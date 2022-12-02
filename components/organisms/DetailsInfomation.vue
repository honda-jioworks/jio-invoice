<template>
  <v-sheet class="abc">
    <v-container no-gutters>
      <v-row>
        <v-col cols="12"><ConsumptionTax /></v-col>
        <v-col cols="12"><ConsumptionTaxRounding /></v-col>
        <v-col cols="12"><MulUnitPriceQuantityRounding /></v-col>
        <v-col cols="12"><UnitPriceCulculationRounding /></v-col>
        <v-col cols="12"><DecimalalPart /></v-col>
        <v-col cols="12"><NumberOfDigits /></v-col>
        <v-col cols="12"><AmountOfWithholdingTax @check-bool="checkBool" /></v-col>
        <v-col cols="12"><SubjectName :checkVal="bool" /></v-col>
        <v-col cols="12"><TaxRate :checkVal="bool" /></v-col>
        <v-col cols="12"><SalaryPaymentDate /></v-col>
        <v-col cols="12"><BonusPaymentDate /></v-col>
      </v-row>
    </v-container>
  </v-sheet>
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
export default class DetailsInfomation extends Vue {
  private bool: boolean = false;
  checkBool(val: boolean): void {
    this.bool = val;
  }
}
</script>
