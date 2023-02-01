<template>
  <v-container :items="desserts">
    <v-sheet>
      <div>
        <!-- 1段目 -->
        <v-row>
          <v-col cols="5"
            ><ConsumptionTax
              v-for="item in desserts"
              :key="item.consumptionTax_id"
              :consumption_val.sync="item.consumptionTaxVal"
              :consumption_items="consumption_items"
              class="mb-n5" /></v-col
          ><v-col cols="5"
            ><ConsumptionTaxRounding
              v-for="item in desserts"
              :key="item.consumptionTaxRounding_id"
              :taxrounding_val.sync="item.consumptionTaxRoundingVal"
              :taxrounding_items="taxrounding_items"
              class="mb-n5"
          /></v-col>
        </v-row>
        <!-- 2段目 -->
        <v-row>
          <v-col cols="5"
            ><MulUnitPriceQuantityRounding
              v-for="item in desserts"
              :key="item.mulUnitPriceQuantityRounding_id"
              :mulUnitPriceQuantityRounding_val.sync="item.mulUnitPriceQuantityRounding_id"
              :taxrounding_items="taxrounding_items"
              class="mb-n5"
          /></v-col>
          <v-col cols="5"
            ><UnitPriceCulculationRounding
              v-for="item in desserts"
              :key="item.unitPriceCulculationRounding_id"
              :unitPriceCulculationRounding_val.sync="item.unitPriceCulculationRoundingVal"
              :taxrounding_items="taxrounding_items"
              class="mb-n5"
          /></v-col>
        </v-row>
        <!-- 3段目 -->
        <v-row>
          <v-col cols="5"
            ><DecimalalPart
              v-for="item in desserts"
              :key="item.decimalalPart_id"
              :decimalalPart_val.sync="item.decimalalPartVal"
              :decimalalPart_items="check_items"
              class="mb-n5"
          /></v-col>
          <v-col cols="5"
            ><NumberOfDigits
              v-for="item in desserts"
              :key="item.numberOfDigits_id"
              :numberOfDigits_val.sync="item.numberOfDigitsVal"
              :numberOfDigits_items="keta_items"
              class="mb-n5"
          /></v-col>
        </v-row>
        <!-- 4段目 -->
        <v-row>
          <v-col cols="5"
            ><AmountOfWithholdingTax
              v-for="item in desserts"
              :key="item.amountOfWithholdingTax_id"
              :amountOfWithholdingTax_val.sync="item.amountOfWithholdingTaxVal"
              :amountOfWithholdingTax_items="check_items"
              @check-bool="checkBool"
              class="mb-n5"
          /></v-col>
          <v-col cols="3"
            ><SubjectName
              v-for="item in desserts"
              :key="item.text_id"
              :subjectName_val.sync="item.textVal"
              :checkVal="bool"
              class="mb-n5"
          /></v-col>
          <v-col cols="3"
            ><TaxRate
              v-for="item in desserts"
              :key="item.taxRate_id"
              :taxRate_val.sync="item.taxRateVal"
              :taxRate_items="taxRate_items"
              :checkVal="bool"
              class="mb-n5"
          /></v-col>
        </v-row>
        <!-- 5段目 -->
        <v-row>
          <v-col cols="4"
            ><SalaryPaymentDate
              v-for="item in desserts"
              :key="item.salaryPaymentDate_id"
              :salaryPaymentDate_val.sync="item.salaryPaymentDateVal"
              :salaryPaymentDate_items="date_items"
              class="mb-n5"
          /></v-col>
          <v-col cols="4"
            ><BonusPaymentDate
              v-for="item in desserts"
              :key="item.bonusPaymentDate_id"
              :bonusPaymentDate_val.sync="item.bonusPaymentDateVal"
              :bonusPaymentDate_items="date_items"
              class="mb-n5"
          /></v-col>
        </v-row>
      </div>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
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
  @Prop()
  consumption_items: Array<string> = [];

  @Prop()
  taxrounding_items: Array<string> = [];

  @Prop()
  check_items: Array<string> = [];

  @Prop()
  keta_items: Array<string> = [];

  @Prop()
  taxRate_items: Array<string> = [];

  @Prop()
  date_items: Array<string> = [];

  @Prop()
  desserts = [
    {
      consumptionTax_id: 'consumptionTax_id',
      consumptionTaxVal: '',
      consumptionTaxRounding_id: 'consumptionTaxRounding_id',
      consumptionTaxRoundingVal: '',
      mulUnitPriceQuantityRounding_id: 'mulUnitPriceQuantityRounding_id',
      mulUnitPriceQuantityRoundingVal: '',
      unitPriceCulculationRounding_id: 'unitPriceCulculationRounding_id',
      unitPriceCulculationRoundingVal: '',
      decimalalPart_id: 'decimalalPart_id',
      decimalalPartVal: '',
      numberOfDigits_id: 'numberOfDigits_id',
      numberOfDigitsVal: '',
      amountOfWithholdingTax_id: 'amountOfWithholdingTax_id',
      amountOfWithholdingTaxVal: '',
      text_id: 'text_id',
      textVal: '',
      taxRate_id: 'taxRate_id',
      taxRateVal: '',
      salaryPaymentDate_id: 'salaryPaymentDate_id',
      salaryPaymentDateVal: '',
      bonusPaymentDate_id: 'bonusPaymentDate_id',
      bonusPaymentDateVal: '',
    },
  ];

  public bool: boolean = false;

  checkBool(val: boolean): void {
    this.bool = val;
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
