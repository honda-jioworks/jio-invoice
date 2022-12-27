<template>
  <div>
    <HeaderList />
    <MonthCalender />
    <InvoiceTable />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Headerorg from '~/components/organisms/Headerorg.vue'
import InvoiceTable from '@/components/organisms/InvoiceTable.vue'
import MonthCalender from '@/components/organisms/MonthCalender.vue'
import HeaderList from '@/components/organisms/HeaderList.vue'

@Component({
  components: {
    InvoiceTable,
    MonthCalender,
    Headerorg,
    HeaderList,
  },
})
export default class InvoiceList extends Vue {}
</script>
