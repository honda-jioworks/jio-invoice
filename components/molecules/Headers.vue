<template>
  <v-row no-gutters
    ><v-col cols="5"><Customers /></v-col>
    <v-col cols="3"><BettingRate /></v-col>
    <v-col cols="3"><UnitPriceCategory /></v-col>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import TargetPeriod from '@/components/atoms/input/TargetPeriod.vue';
import Customers from '@/components/atoms/input/Customers .vue';
import BettingRate from '@/components/atoms/input/BettingRate.vue';
import UnitPriceCategory from '@/components/atoms/input/UnitPriceCategory.vue';

@Component({
  components: {
    TargetPeriod,
    Customers,
    BettingRate,
    UnitPriceCategory,
  },
})
export default class Headers extends Vue {}
</script>
<style lang="scss" scoped></style>
