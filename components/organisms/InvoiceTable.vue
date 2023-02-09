<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="10"
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
      <v-icon color="primary" @click="editInvoice(item)">
        mdi-pencil-outline
      </v-icon>
    </template>
    <template #[`item.delete`]="{ item }">
      <v-icon color="error" @click="deleteInvoice(item)">
        mdi-delete-outline</v-icon
      >
    </template>
    <template #[`item.copy`]="{ item }">
      <v-icon color="green" @click="copyInvoice(item)"
        >mdi-content-copy
      </v-icon>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop, Watch } from 'nuxt-property-decorator'
import axios from 'axios'
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

  @Prop()
  date!: string

  @Watch('date')
  changeDate() {
    alert(this.date)
  }

  headers = [
    { text: '日付', align: 'start', sortable: false, value: 'invoice_date' },
    { text: '請求書No.', value: 'invoice_num' },
    { text: '得意先名', value: 'cstm_name' },
    { text: '件名', value: 'invoice_title' },
    { text: '発行', value: 'issued_check' },
    { text: '金額', value: 'price' },
    { text: '更新', value: 'actions', sortable: false },
    { text: '削除', value: 'delete', sortable: false },
    { text: '複写', value: 'copy', sortable: false },
  ]

  desserts = [
    {
      invoice_id: '',
      invoice_date: '',
      invoice_num: '',
      cstm_name: '',
      invoice_title: '',
      issued_check: '',
      price: '',
    },
  ]

  editedIndex = -1

  editedInvoice = {
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
  editInvoice(invoice: any) {
    this.editedIndex = this.desserts.indexOf(invoice)
    this.editedInvoice = Object.assign({}, invoice)
    alert(JSON.stringify(this.$store.state.invoice))
    axios
      .post('/custmer', {
        invoice_id: this.$store.state.invoice.invoice_id,
        invoice_date: this.$store.state.invoice.invoice_date,
        invoice_num: this.$store.state.invoice.invoice_num,
        cstm_name: this.$store.state.invoice.cstm_name,
        invoice_title: this.$store.state.invoice.invoice_title,
        issued_check: this.$store.state.invoice.issued_check,
        price: this.$store.state.invoice.price,
      })
      .then(function (response) {
        alert(response.data)
      })
    // 更新
  }

  deleteInvoice(invoice: any) {
    this.editedIndex = this.desserts.indexOf(invoice)
    this.editedInvoice = Object.assign({}, invoice)
    this.desserts.splice(this.editedIndex, 1)
    alert(JSON.stringify(this.$store.state.invoice.invoice_id))
    axios
      .delete('/invoice', {
        params: {
          invoice_id: this.$store.state.invoice.invoice_id,
        },
      })
      .then(function (response) {
        alert(response.data)
      })
    // 削除
  }

  copyInvoice(invoice: any) {
    this.editedIndex = this.desserts.indexOf(invoice)
    this.editedInvoice = Object.assign({}, invoice)
    this.desserts.push(this.editedInvoice)
    alert(JSON.stringify(this.$store.state.invoice.invoice_id))
    // 複写
  }
}
</script>

<style lang="scss" scoped>
.groundwork {
  background-color: rgb(91, 91, 243);
}
</style>
