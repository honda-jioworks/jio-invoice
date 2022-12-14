<template>
  <v-sheet class="abc">
    <v-container no-gutters>
      <v-row>
        <v-col cols="12"><ConsumptionTax @scan-select="scanConsumptionTax" /></v-col>
        <v-col cols="12"><ConsumptionTaxRounding @scan-select="scanConsumptionTaxRounding" /></v-col>
        <v-col cols="12"><MulUnitPriceQuantityRounding @scan-select="scanMulUnitPriceQuantityRounding" /></v-col>
        <v-col cols="12"><UnitPriceCulculationRounding @scan-select="scanUnitPriceCulculationRounding" /></v-col>
        <v-col cols="12"><DecimalalPart @scan-select="scanDecimalalPart" /></v-col>
        <v-col cols="12"><NumberOfDigits @scan-select="scanNumberOfDigits" /></v-col>
        <v-col cols="12"><AmountOfWithholdingTax @check-bool="checkBool" /></v-col>
        <v-col cols="12"><SubjectName :checkVal="bool" @scan-text="scanText" /></v-col>
        <v-col cols="12"><TaxRate :checkVal="bool" @scan-select="scanTaxRate" /></v-col>
        <v-col cols="12"><SalaryPaymentDate @scan-select="scanSalaryPaymentDate" /></v-col>
        <v-col cols="12"><BonusPaymentDate @scan-select="scanBonusPaymentDate" /></v-col>
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
  private consumptionTaxVal: string = ''; //消費税
  private consumptionTaxRoundingVal: string = ''; //消費税の端数処理
  private mulUnitPriceQuantityRoundingVal: string = '';
  private unitPriceCulculationRoundingVal: string = '';
  private decimalalPartVal: string = '';
  private numberOfDigitsVal: string = '';
  private textVal: string = '';
  private taxRateVal: string = '';
  private salaryPaymentDateVal: string = '';
  private bonusPaymentDateVal: string = '';

  scanConsumptionTax(val: string): void {
    this.consumptionTaxVal = val;
  }

  scanConsumptionTaxRounding(val: string): void {
    this.consumptionTaxRoundingVal = val;
  }

  scanMulUnitPriceQuantityRounding(val: string): void {
    this.mulUnitPriceQuantityRoundingVal = val;
  }

  scanUnitPriceCulculationRounding(val: string): void {
    this.unitPriceCulculationRoundingVal = val;
  }

  scanDecimalalPart(val: string): void {
    this.decimalalPartVal = val;
  }

  scanNumberOfDigits(val: string): void {
    this.numberOfDigitsVal = val;
  }

  private bool: boolean = false;
  checkBool(val: boolean): void {
    this.bool = val;
  }
  scanText(val: string): void {
    this.textVal = val;
  }

  scanTaxRate(val: string): void {
    this.taxRateVal = val;
  }
  scanSalaryPaymentDate(val: string): void {
    this.salaryPaymentDateVal = val;
  }
  scanBonusPaymentDate(val: string): void {
    this.bonusPaymentDateVal = val;
  }
}
</script>
