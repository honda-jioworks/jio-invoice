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
          <v-toolbar-title>請求先一覧</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </div>
    </template>
    <template #[`item.invoice_date`]="props">
      <InvoiceDateEditor
        :invoice_date.sync="props.item.invoice_date"
      ></InvoiceDateEditor>
    </template>
    <template #[`item.invoice_num`]="props">
      <InvoiceNumberEditor
        :invoice_num.sync="props.item.invoice_num"
      ></InvoiceNumberEditor>
    </template>
    <template #[`item.cstm_name`]="props">
      <CustomerNameEditor
        :cstm_name.sync="props.item.cstm_name"
      ></CustomerNameEditor>
    </template>
    <template #[`item.invoice_title`]="props">
      <InvoiceTitleEditor
        :invoice_title.sync="props.item.invoice_title"
      ></InvoiceTitleEditor>
    </template>
    <template #[`item.issued_check`]="props">
      <IssuedCheckEditor
        :issued_check.sync="props.item.issued_check"
      ></IssuedCheckEditor>
    </template>
    <template #[`item.price`]="props">
      <PriceEditor :price.sync="props.item.price"></PriceEditor>
    </template>
    <template #[`item.actions`]="{ item }">
      <v-btn color="primary" @click="editCostomer(item)"> 更新 </v-btn>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'
import InvoiceDateEditor from '@/components/molecules/InvoiceDateEditor.vue'
import InvoiceNumberEditor from '@/components/molecules/InvoiceNumberEditor.vue'
import CustomerNameEditor from '@/components/molecules/CustomerNameEditor.vue'
import InvoiceTitleEditor from '@/components/molecules/InvoiceTitleEditor.vue'
import IssuedCheckEditor from '@/components/molecules/IssuedCheckEditor.vue'
import PriceEditor from '@/components/molecules/PriceEditor.vue'

@Component({
  components: {
    InvoiceDateEditor,
    InvoiceNumberEditor,
    CustomerNameEditor,
    InvoiceTitleEditor,
    IssuedCheckEditor,
    PriceEditor,
  },
})
export default class InvoiceTable extends Vue {
  // Organismsはセクションコンテンツ（それ単体で一区切りとなるコンテンツ）

  headers = [
    { text: '日付', align: 'start', sortable: false, value: 'invoice_date' },
    { text: '請求書No.', value: 'invoice_num' },
    { text: '得意先名', value: 'cstm_name' },
    { text: '件名', value: 'invoice_title' },
    { text: '発行', value: 'issued_check' },
    { text: '金額', value: 'price' },
    { text: '更新', value: 'actions', sortable: false },
  ]

  desserts = [
    {
      invoice_id: 'cstmer001',
      invoice_date: '2022/12/26',
      invoice_num: 'JS20-000666',
      cstm_name: 'jioworks',
      invoice_title: '2022年12月度　請求書管理アプリ案件',
      issued_check: '済',
      price: '100,000',
    },
  ]

  editedIndex = -1

  editedCostomer = {
    invoice_id: '',
    invoice_date: '',
    invoice_num: '',
    cstm_name: '',
    invoice_title: '',
    issued_check: '',
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
