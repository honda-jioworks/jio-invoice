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
        id="NumberEdit"
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
    <template #[`item.actions`]="{ item }">
      <v-icon color="primary" @click="editQuotation(item)">
        mdi-pencil-outline
      </v-icon>
    </template>
    <template #[`item.delete`]="{ item }">
      <v-icon color="error" @click="deleteQuotation(item)">
        mdi-delete-outline</v-icon
      >
    </template>
    <template #[`item.copy`]="{ item }">
      <v-icon color="green" @click="copyQuotation(item)"
        >mdi-content-copy
      </v-icon>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator'
import axios from 'axios'
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

  @Prop()
  date!: string

  @Watch('date')
  changeDate() {
    alert(JSON.stringify(this.date))
  }

  headers = [
    { text: '日付', align: 'start', sortable: false, value: 'quotation_date' },
    { text: '見積書No.', value: 'quotation_num' },
    { text: '得意先名', value: 'cstm_name' },
    { text: '件名', value: 'quotation_title' },
    { text: '発行', value: 'issued_check' },
    { text: '受注', value: 'received_check' },
    { text: '新着', value: '' },
    { text: '金額', value: 'price' },
    { text: '更新', value: 'actions', sortable: false },
    { text: '削除', value: 'delete', sortable: false },
    { text: '複写', value: 'copy', sortable: false },
  ]

  desserts = [
    {
      quotation_id: 'cstmer001',
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

  editedQuotation = {
    quotation_id: '',
    quotation_date: '',
    quotation_num: '',
    cstm_name: '',
    quotation_title: '',
    issued_check: '',
    received_check: '',
    price: '',
  }

  created() {
    // 何か処理
  }

  editQuotation(quotation: any) {
    this.editedIndex = this.desserts.indexOf(quotation)
    this.editedQuotation = Object.assign({}, quotation)
    alert(JSON.stringify(this.$store.state.quotation))
    axios
      .post('/quotation', {
        quotation_id: this.$store.state.quotation.quotation_id,
        quotation_date: this.$store.state.quotation.quotation_date,
        quotation_num: this.$store.state.quotation.quotation_num,
        cstm_name: this.$store.state.quotation.cstm_name,
        quotation_title: this.$store.state.quotation.quotation_title,
        issued_check: this.$store.state.quotation.issued_check,
        price: this.$store.state.quotation.price,
      })
      .then(function (response) {
        alert(response.data)
      })
    // 更新
  }

  deleteQuotation(quotation: any) {
    this.editedIndex = this.desserts.indexOf(quotation)
    this.editedQuotation = Object.assign({}, quotation)
    this.desserts.splice(this.editedIndex, 1)
    alert(JSON.stringify(this.$store.state.quotation.quotation_id))
    axios
      .delete('/quotation', {
        params: {
          quotation_id: this.$store.state.quotation.quotation_id,
        },
      })
      .then(function (response) {
        alert(response.data)
      }) // 削除
  }

  copyQuotation(quotation: any) {
    this.editedIndex = this.desserts.indexOf(quotation)
    this.editedQuotation = Object.assign({}, quotation)
    this.desserts.push(this.editedQuotation)
    alert(JSON.stringify(quotation.quotation_id))
    // 複写
  }
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: rgb(91, 91, 243);
}
</style>
