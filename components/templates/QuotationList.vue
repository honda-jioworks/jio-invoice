<template>
  <div>
    <QuotaitionTable />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Headerorg from '~/components/organisms/Headerorg.vue'
import HeaderList from '~/components/organisms/HeaderList.vue'
import QuotaitionTable from '~/components/organisms/QuotationTable.vue'
@Component({
  components: {
    QuotaitionTable,
    Headerorg,
    HeaderList,
  },
})
export default class QuotationList extends Vue {}
</script>
