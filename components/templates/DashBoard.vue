<template>
  <div>
    <MostRecentSalesAmount />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import MostRecentSalesAmount from '~/components/organisms/MostRecentSalesAmount.vue'
@Component({ components: { MostRecentSalesAmount } })
export default class DashBoard extends Vue {}
</script>
