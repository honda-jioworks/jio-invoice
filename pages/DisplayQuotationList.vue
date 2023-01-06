<template>
  <div>
    <QuotationList />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import QuotationList from '~/components/templates/QuotationList.vue'
@Component({ components: { QuotationList } })
export default class DisplayQuotationList extends Vue {}
</script>
