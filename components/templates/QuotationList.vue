<template>
  <div>
    <MonthCalender @save="save" />
    <QuotaitionTable :date="date" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import MonthCalender from '~/components/organisms/MonthCalender.vue'
import QuotaitionTable from '~/components/organisms/QuotationTable.vue'
@Component({
  components: {
    QuotaitionTable,
    MonthCalender,
  },
})
export default class QuotationList extends Vue {
  date: string = ''

  save(date: string) {
    this.date = date
  }
}
</script>
