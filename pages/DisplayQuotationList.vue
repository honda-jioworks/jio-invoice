<template>
  <div>
    <MonthCalender @save="save" />
    <QuotationTable :date="date" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import MonthCalender from '~/components/organisms/MonthCalender.vue'
import QuotationTable from '~/components/organisms/QuotationTable.vue'
@Component({ components: { QuotationTable, MonthCalender } })
export default class DisplayQuotationList extends Vue {
  date: string = ''

  save(date: string) {
    this.date = date
  }
}
</script>
