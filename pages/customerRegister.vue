<template>
  <div>
    <DetailsInfomation />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import ConsumptionTaxlabel from '~/components/atoms/label/ConsumptionTaxlabel.vue';
import DetailsInfomation from '@/components/organisms/DetailsInfomation.vue';
@Component({ components: { ConsumptionTaxlabel, DetailsInfomation } })
export default class customerRegister extends Vue {}
</script>
