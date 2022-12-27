<template>
  <v-row
    ><v-col cols="3"><Customers /></v-col>
    <v-col cols="1"><Copys /></v-col>
    <v-col cols="1"><BettingRate /></v-col>
    <v-col cols="2"><UnitPriceCategory /></v-col>
    <v-col cols="3"><PaymentDestination /></v-col>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import BilingAmountt from '@/components/atoms/input/BilingAmountt.vue';
import TargetPeriod from '@/components/atoms/input/TargetPeriod.vue';
import Customers from '@/components/atoms/input/Customers .vue';
import Copys from '@/components/atoms/input/Copys.vue';
import BettingRate from '@/components/atoms/input/BettingRate.vue';
import UnitPriceCategory from '@/components/atoms/input/UnitPriceCategory.vue';
import PaymentDestination from '@/components/atoms/input/PaymentDestination.vue';

@Component({
  components: { BilingAmountt, TargetPeriod, Customers, Copys, BettingRate, UnitPriceCategory, PaymentDestination },
})
export default class Headers extends Vue {}
</script>
<style lang="scss" scoped></style>
