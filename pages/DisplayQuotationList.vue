<template>
  <div>
    <MonthCalender @save="save" />

    <QuotationList :date="date" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import QuotationList from '~/components/templates/QuotationList.vue'
@Component({ components: { QuotationList } })
export default class DisplayQuotationList extends Vue {
  date: string = ''

  save(date: string) {
    this.date = date
  }
}
</script>
