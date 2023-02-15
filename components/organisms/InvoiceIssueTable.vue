<template>
  <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1" hide-default-footer>
    <template v-slot:top>
      <v-container>
        <v-row class="d-flex">
          <v-col cols="2">
            <v-subheader>請求額</v-subheader>

            <v-col @change="inputAmount"> &yen;{{ totalAmount }} </v-col>
          </v-col>
          <v-col cols="2">
            <v-subheader>消費税等</v-subheader>
            <v-col @change="TaxAmount"> &yen;{{ taxAmount }} </v-col>
          </v-col>
          <v-col cols="4" class="ml-auto">
            <v-subheader>対象期間</v-subheader>
            <v-row class="d-flex align-center">
              <v-col cols="5">
                <v-text-field input type="date" @blur="inputStart" v-model="dayStart" @input="dayStart"
              /></v-col>
              <v-col align="center"> 〜</v-col>
              <v-col cols="5"
                ><v-text-field input type="date" @blur="inputEnd" v-model="dayEnd" @input="dayEnd"
              /></v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <v-toolbar flat>
        <v-toolbar-title>請求書一覧</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
      </v-toolbar>
    </template>
    <template v-slot:[`item.division_val`]="props">
      <DivisionEditer :division_val.sync="props.item.division_val" :division_items="division_items" />
    </template>
    <template v-slot:[`item.productcode_val`]="props">
      <ProductCodeEditer :productcode_val.sync="props.item.productcode_val" />
    </template>
    <template v-slot:[`item.productname_val`]="props">
      <ProductNameEditer :productname_val.sync="props.item.productname_val" />
    </template>
    <template v-slot:[`item.quanitity_val`]="props">
      <QuanitityEditer :quanitity_val.sync="props.item.quanitity_val" />
    </template>
    <template v-slot:[`item.unit_val`]="props">
      <UnitEditer :unit_val.sync="props.item.unit_val" :unit_items="unit_items" />
    </template>
    <template v-slot:[`item.unitprice_val`]="props">
      <UnitPriceEditer :unitprice_val.sync="props.item.unitprice_val" />
    </template>
    <template v-slot:[`item.amount_val`]="props">
      <AmountEditer :amount="amount(props.item.quanitity_val, props.item.unitprice_val)" />
    </template>
    <template v-slot:[`item.remarks_val`]="props">
      <RemarksEditer :remarks_val.sync="props.item.remarks_val" />
    </template>
    <template v-slot:[`item.tax_val`]="props">
      <TaxEditer :tax_val.sync="props.item.tax_val" :tax_items="tax_items" />
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon color="primary" @click="editInvoice(item)">mdi-pencil-outline</v-icon>
    </template>
    <template v-slot:[`item.delete`]="{ item }">
      <v-icon color="error" @click="deleteInvoice(item)">mdi-delete-outline</v-icon>
    </template>
    <template v-slot:[`item.copy`]="{ item }">
      <v-icon color="green" @click="copyInvoice(item)">mdi-content-copy</v-icon>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Vue, Component, Watch, Emit } from 'nuxt-property-decorator';
import AmountEditer from '@/components/molecules/AmountEditer.vue';
import DivisionEditer from '@/components/molecules/DivisionEditer.vue';
import ProductCodeEditer from '@/components/molecules/ProductCodeEditer.vue';
import ProductNameEditer from '@/components/molecules/ProductNameEditer.vue';
import QuanitityEditer from '@/components/molecules/QuanitityEditer.vue';
import RemarksEditer from '@/components/molecules/RemarksEditer.vue';
import TaxEditer from '@/components/molecules/TaxEditer.vue';
import UnitEditer from '@/components/molecules/UnitEditer.vue';
import UnitPriceEditer from '@/components/molecules/UnitPriceEditer.vue';

@Component({
  components: {
    AmountEditer,
    DivisionEditer,
    ProductCodeEditer,
    ProductNameEditer,
    QuanitityEditer,
    RemarksEditer,
    TaxEditer,
    UnitEditer,
    UnitPriceEditer,
  },
})
export default class InvoiceIssueTable extends Vue {
  unit_items: Array<string> = ['人月', '印月', '日', '時間', '人時', '名', '式', 'ヶ月', 'ページ'];
  tax_items: Array<string> = ['10%', '税なし'];
  division_items: Array<string> = ['通常', '値引', '返品', 'メモ', '小計', '文章行', '表題', '改頁', '空行', '源泉外'];

  inputStart() {
    this.$store.commit('invoiceIssue/set', { dayStart: this.dayStart });
  }
  inputEnd() {
    this.$store.commit('invoiceIssue/set', { dayEnd: this.dayEnd });
  }

  headers = [
    { text: '区分', value: 'division_val' },
    { text: '商品コード', value: 'productcode_val' },
    { text: '品名', value: 'productname_val' },
    { text: '数量', value: 'quanitity_val' },
    { text: '単位', value: 'unit_val' },
    { text: '単価', value: 'unitprice_val' },
    { text: '金額', value: 'amount_val' },
    { text: '備考', value: 'remarks_val' },
    { text: '消費税', value: 'tax_val' },
    { text: '更新', value: 'actions', sortable: false },
    { text: '削除', value: 'delete', sortable: false },
    { text: '複写', value: 'copy', sortable: false },
  ];

  desserts = [
    {
      cstmr_id: 'cstmer001',
      division_val: '通常',
      productcode_val: '',
      productname_val: '',
      quanitity_val: '1',
      unit_val: '',
      unitprice_val: '',
      amount_val: '',
      remarks_val: '',
      tax_val: '10%',
    },
    {
      cstmr_id: 'cstmer002',
      division_val: '通常',
      productcode_val: '',
      productname_val: '',
      quanitity_val: '1',
      unit_val: '',
      unitprice_val: '',
      amount_val: '',
      remarks_val: '',
      tax_val: '10%',
    },
  ];

  editedIndex = -1;

  editedInvoice = {
    cstmr_id: '',
    division_val: '',
    productcode_val: '',
    productname_val: '',
    quanitity_val: '',
    unit_val: '',
    unitprice_val: '',
    amount_val: '',
    remarks_val: '',
    tax_val: '10%',
  };

  @Emit()
  editInvoice(invoice: any) {
    this.editedIndex = this.desserts.indexOf(invoice);
    this.editedInvoice = Object.assign({}, invoice);
    this.editedInvoice.amount_val = String(this.amount(invoice.quanitity_val, invoice.unitprice_val));
    alert(JSON.stringify(this.editedInvoice));
    // 更新ボタン
  }

  deleteInvoice(invoice: any) {
    this.editedIndex = this.desserts.indexOf(invoice);
    this.editedInvoice = Object.assign({}, invoice);
    this.desserts.splice(this.editedIndex, 1);
    alert(JSON.stringify(invoice.cstmr_id));
    // 削除ボタン
  }

  copyInvoice(invoice: any) {
    this.editedIndex = this.desserts.indexOf(invoice);
    this.editedInvoice = Object.assign({}, invoice);
    this.desserts.push(this.editedInvoice);
    alert(JSON.stringify(invoice.cstmr_id));
    // 複写ボタン
  }

  dayStart(date: any) {
    alert(JSON.stringify(date));
    // 開始年月を値保持確認
  }

  dayEnd(date: any) {
    alert(JSON.stringify(date));
    // 終了年月を値保持確認
  }

  get amount() {
    return (quanitity: string, unitprice: string) => {
      const retVal = Number(quanitity) * Number(unitprice);
      return retVal ? retVal : 0;
    };
    // データテーブル内の数量と単価の乗算
  }

  get totalAmount() {
    let totalAmount = 0;
    this.desserts.forEach((item) => {
      totalAmount += Math.round(Number(item.quanitity_val) * Number(item.unitprice_val) * 1.1);
    });
    return totalAmount;
    // データテーブル内の計算を合計額へ表示
  }

  get taxAmount() {
    let taxAmount = 0;
    this.desserts.forEach((item) => {
      taxAmount += Math.round(Number(item.quanitity_val) * Number(item.unitprice_val) * 0.1);
    });
    return taxAmount;
    // データテーブル内の計算を消費税等へ表示
  }
  get inputAmount(): Number {
    this.$store.commit('invoiceIssue/set', { totalAm: this.totalAmount });
    return this.totalAmount;
  }
  get TaxAmount(): Number {
    this.$store.commit('invoiceIssue/set', { taxAmount: this.taxAmount });
    return this.totalAmount;
  }
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: white;
}
.v-subheader {
  background-color: rgb(236, 65, 84);
  color: white;
  justify-content: center;
}
</style>
