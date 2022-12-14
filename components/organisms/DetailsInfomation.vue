<template>
  <div>
  <!-- 1段目 -->
    <v-row>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><ConsumptionTax class="mb-n5" /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><ConsumptionTaxRounding class="mb-n5" /></v-col>
    </v-row>
  <!-- 2段目 -->
    <v-row> 
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><MulUnitPriceQuantityRounding class="mb-n5" /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><UnitPriceCulculationRounding class="mb-n5" /></v-col>
    </v-row>
  <!-- 3段目 -->
    <v-row> 
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><DecimalalPart class="mb-n5" /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><NumberOfDigits class="mb-n5" /></v-col>
    </v-row>
  <!-- 4段目 -->
    <v-row> 
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><AmountOfWithholdingTax @check-bool="checkBool" class="mb-n5" /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><SubjectName :checkVal="bool" class="mb-n5" /></v-col>
      <v-col cols="12" sm="6" lg="4" md="4" xl="4"><TaxRate :checkVal="bool" class="mb-n5" /></v-col>
    </v-row>
  <!-- 5段目 -->
    <v-row>   
      <v-col cols="12" sm="6" lg="3" md="4" xl="4"><SalaryPaymentDate class="mb-n5" /></v-col>
    </v-row>
  <!-- 6段目 -->
    <v-row>  
      <v-col cols="12" sm="6" lg="3" md="4" xl="4"><BonusPaymentDate class="mb-n5" /></v-col>
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
export default class DetailsInfomation extends Vue {
  public bool: boolean = false;
  checkBool(val: boolean): void {
    this.bool = val;
  }
}
</script>
<style lang="scss" scoped>
@media  screen and (max-width: 768px) {
  
}
  

</style>

