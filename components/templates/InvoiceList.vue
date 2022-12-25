<template>
  <InvoiceTable />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import InvoiceTable from '@/components/organisms/InvoiceTable.vue'

@Component({
  components: {
    InvoiceTable,
  },
})
export default class InvoiceList extends Vue {}
</script>
