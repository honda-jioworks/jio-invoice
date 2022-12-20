<template>
  <InvoiceList/>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import InvoiceList from '@/components/templates/InvoiceList.vue'
@Component({ components: { InvoiceList}})
export default class DisplayInvoiceList extends Vue {
}
</script>