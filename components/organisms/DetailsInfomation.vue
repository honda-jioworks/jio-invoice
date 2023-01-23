<template>
  <v-container :items="desserts">
    <v-sheet>
      <div>
        <!-- 1段目 -->
        <v-row>
          <v-col cols="5"
            ><ConsumptionTax
              v-for="item in desserts"
              :key="item.company_id"
              :consumption_val.sync="item.consumptionTaxVal"
              :consumption_items="consumption_items"
              class="mb-n5" /></v-col
          ><v-col cols="5"
            ><ConsumptionTaxRounding
              v-for="item in desserts"
              :key="item.company_id"
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
              :key="item.company_id"
              :mulUnitPriceQuantityRounding_val.sync="item.mulUnitPriceQuantityRoundingVal"
              :taxrounding_items="taxrounding_items"
              class="mb-n5"
          /></v-col>
          <v-col cols="5"
            ><UnitPriceCulculationRounding
              v-for="item in desserts"
              :key="item.company_id"
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
              :key="item.company_id"
              :decimalalPart_val.sync="item.decimalalPartVal"
              :decimalalPart_items="check_items"
              class="mb-n5"
          /></v-col>
          <v-col cols="5"
            ><NumberOfDigits
              v-for="item in desserts"
              :key="item.company_id"
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
              :key="item.company_id"
              :amountOfWithholdingTax_val.sync="item.amountOfWithholdingTaxVal"
              :amountOfWithholdingTax_items="check_items"
              @check-bool="checkBool"
              class="mb-n5"
          /></v-col>
          <v-col cols="3"
            ><SubjectName
              v-for="item in desserts"
              :key="item.company_id"
              :subjectName_val.sync="item.textVal"
              :checkVal="bool"
              class="mb-n5"
          /></v-col>
          <v-col cols="3"
            ><TaxRate
              v-for="item in desserts"
              :key="item.company_id"
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
              :key="item.company_id"
              :salaryPaymentDate_val.sync="item.salaryPaymentDateVal"
              :salaryPaymentDate_items="date_items"
              class="mb-n5"
          /></v-col>
          <v-col cols="4"
            ><BonusPaymentDate
              v-for="item in desserts"
              :key="item.company_id"
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
  public consumption_items: Array<string> = ['自動', '軽減自動', 'しない'];
  public taxrounding_items: Array<string> = ['切り上げ', '切り捨て', '四捨五入'];
  public check_items: Array<Object> = ['する', 'しない'];
  public keta_items: Array<string> = [
    '整数7桁 小数なし',
    '整数6桁 小数第1位',
    '整数5桁 小数第2位',
    '整数4桁 小数第3位',
  ];
  public taxRate_items: Array<string> = ['平成24年まで', '平成25年以降'];
  public date_items: Array<string> = [
    '1日',
    '2日',
    '3日',
    '4日',
    '5日',
    '6日',
    '7日',
    '8日',
    '9日',
    '10日',
    '11日',
    '12日',
    '13日',
    '14日',
    '15日',
    '16日',
    '17日',
    '18日',
    '19日',
    '20日',
    '21日',
    '22日',
    '23日',
    '24日',
    '25日',
    '26日',
    '27日',
    '28日',
    '29日',
    '30日',
    '31日',
    '末日',
  ];

  desserts = [
    {
      company_id: 'company001',
      consumptionTaxVal: '',
      consumptionTaxRoundingVal: '',
      mulUnitPriceQuantityRoundingVal: '',
      unitPriceCulculationRoundingVal: '',
      decimalalPartVal: '',
      numberOfDigitsVal: '',
      amountOfWithholdingTaxVal: '',
      textVal: '',
      taxRateVal: '',
      salaryPaymentDateVal: '',
      bonusPaymentDateVal: '',
    },
  ];

  editedRegister = {
    company_id: '',
    officeName: '',
    consumptionTaxRoundingVal: '',
    mulUnitPriceQuantityRoundingVal: '',
    unitPriceCulculationRoundingVal: '',
    decimalalPartVal: '',
    numberOfDigitsVal: '',
    amountOfWithholdingTaxVal: '',
    textVal: '',
    taxRateVal: '',
    salaryPaymentDateVal: '',
    bonusPaymentDateVal: '',
  };

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
