<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
    hide-default-footer
  >
    <template #top>
      <div>
        <v-toolbar flat>
          <v-toolbar-title>見積書一覧</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </div>
    </template>
    <template #[`item.quotation_date`]="props">
      <QuotationDateEditor
        :quotation_date.sync="props.item.quotation_date"
      ></QuotationDateEditor>
    </template>
    <template #[`item.quotation_num`]="props">
      <QuotationNumberEditor
        :quotation_num.sync="props.item.quotation_num"
      ></QuotationNumberEditor>
    </template>
    <template #[`item.cstm_name`]="props">
      <CustomerNameEditor
        :cstm_name.sync="props.item.cstm_name"
      ></CustomerNameEditor>
    </template>
    <template #[`item.quotation_title`]="props">
      <QuotationTitleEditor
        :quotation_title.sync="props.item.quotation_title"
      ></QuotationTitleEditor>
    </template>
    <template #[`item.issued_check`]="props">
      <IssuedCheckEditor
        :issued_check.sync="props.item.issued_check"
      ></IssuedCheckEditor>
    </template>
    <template #[`item.received_check`]="props">
      <ReceivedCheckEditor :received_check.sync="props.item.received_check">
      </ReceivedCheckEditor>
    </template>
    <template #[`item.price`]="props">
      <PriceEditor :price.sync="props.item.price"></PriceEditor>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'
import QuotationDateEditor from '../molecules/QuotationDateEditor.vue'
import QuotationNumberEditor from '../molecules/QuotationNumberEditor.vue'
import CustomerNameEditor from '@/components/molecules/CustomerNameEditor.vue'
import QuotationTitleEditor from '@/components/molecules/QuotationTitleEditor.vue'
import IssuedCheckEditor from '@/components/molecules/IssuedCheckEditor.vue'
import ReceivedCheckEditor from '@/components/molecules/ReceivedCheckEditor.vue'
import PriceEditor from '@/components/molecules/PriceEditor.vue'

@Component({
  components: {
    QuotationDateEditor,
    QuotationNumberEditor,
    CustomerNameEditor,
    QuotationTitleEditor,
    IssuedCheckEditor,
    ReceivedCheckEditor,
    PriceEditor,
  },
})
export default class QuotationTable extends Vue {
  // Organismsはセクションコンテンツ（それ単体で一区切りとなるコンテンツ）

  headers = [
    { text: '日付', align: 'start', sortable: false, value: 'quotation_date' },
    { text: '見積書No.', value: 'quotation_num' },
    { text: '得意先名', value: 'cstm_name' },
    { text: '件名', value: 'quotation_title' },
    { text: '発行', value: 'issued_check' },
    { text: '受注', value: 'received_check' },
    { text: '新着', value: '' },
    { text: '金額', value: 'price' },
  ]

  desserts = [
    {
      invoice_id: 'cstmer001',
      quotation_date: '2022/12/26',
      quotation_num: 'JS20-000666',
      cstm_name: 'jioworks',
      quotation_title: '2022年12月度　請求書管理アプリ案件',
      issued_check: '済',
      received_check: '済',
      price: '100,000',
    },
  ]

  editedIndex = -1

  editedCostomer = {
    invoice_id: '',
    quotation_date: '',
    invoice_num: '',
    cstm_name: '',
    invoice_title: '',
    issued_check: '',
    received_check: '',
    price: '',
  }

  created() {
    // 何か処理
  }

  @Emit()
  editCostomer(costmer: any) {
    this.editedIndex = this.desserts.indexOf(costmer)
    this.editedCostomer = Object.assign({}, costmer)
    alert(JSON.stringify(this.editedCostomer))
  }
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: rgb(91, 91, 243);
}
</style>
