<template>
  <v-container>
    <v-sheet>
      <div>
        <!-- 1段目 -->
        <v-row>
          <v-col cols="5"><ConsumptionTax @scan-select="scanConsumptionTax" class="mb-n5" /></v-col
          ><v-col cols="5"><ConsumptionTaxRounding @scan-select="scanConsumptionTaxRounding" class="mb-n5" /></v-col>
        </v-row>
        <!-- 2段目 -->
        <v-row>
          <v-col cols="5"
            ><MulUnitPriceQuantityRounding @scan-select="scanMulUnitPriceQuantityRounding" class="mb-n5"
          /></v-col>
          <v-col cols="5"
            ><UnitPriceCulculationRounding @scan-select="scanUnitPriceCulculationRounding" class="mb-n5"
          /></v-col>
        </v-row>
        <!-- 3段目 -->
        <v-row>
          <v-col cols="5"><DecimalalPart @scan-select="scanDecimalalPart" class="mb-n5" /></v-col>
          <v-col cols="5"><NumberOfDigits @scan-select="scanNumberOfDigits" class="mb-n5" /></v-col>
        </v-row>
        <!-- 4段目 -->
        <v-row>
          <v-col cols="5"><AmountOfWithholdingTax @check-bool="checkBool" class="mb-n5" /></v-col>
          <v-col cols="3"><SubjectName :checkVal="bool" @scan-text="scanText" class="mb-n5" /></v-col>
          <v-col cols="3"><TaxRate :checkVal="bool" @scan-select="scanTaxRate" class="mb-n5" /></v-col>
        </v-row>
        <!-- 5段目 -->
        <v-row>
          <v-col cols="4"><SalaryPaymentDate @scan-select="scanSalaryPaymentDate" class="mb-n5" /></v-col>
          <v-col cols="4"><BonusPaymentDate @scan-select="scanBonusPaymentDate" class="mb-n5" /></v-col>
        </v-row>
      </div>
    </v-sheet>
  </v-container>
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
  public bool: boolean = false;
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

  value2() {
    alert(
      this.consumptionTaxVal +
        this.consumptionTaxRoundingVal +
        this.mulUnitPriceQuantityRoundingVal +
        this.unitPriceCulculationRoundingVal +
        this.decimalalPartVal +
        this.numberOfDigitsVal +
        this.textVal +
        this.taxRateVal +
        this.salaryPaymentDateVal +
        this.bonusPaymentDateVal
    );
  }
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
}
.groundwork {
  background-color: gray;
}
</style>
