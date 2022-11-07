<template>
  <div>
    <h1>得意先登録画面を作っていきます</h1>
    <h2>まずはscriptとかは一旦気にせずラベルとテキストボックスを置くところから始めましょう</h2>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import ConsumptionTaxlabel from '~/components/atoms/label/ConsumptionTaxlabel.vue';
import DetailsInfomation from '@/components/organisms/DetailsInfomation.vue';
@Component({ components: { ConsumptionTaxlabel, DetailsInfomation } })
export default class customerRegister extends Vue {}
</script>
