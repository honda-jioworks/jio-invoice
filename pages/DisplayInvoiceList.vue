<template>
  <div>
    <MonthCalender @save="save" />
    <InvoiceTable :date="date" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import InvoiceTable from '@/components/organisms/InvoiceTable.vue'
import MonthCalender from '@/components/organisms/MonthCalender.vue'
@Component({
  components: {
    InvoiceTable,
    MonthCalender,
  },
})
export default class DisplayInvoiceList extends Vue {
  date: string = ''

  save(date: string) {
    this.date = date
  }
}
</script>
