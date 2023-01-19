<template>
  <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1" hide-default-footer>
    <template v-slot:top>
      <div>
    <v-row>
      <v-col>
        <v-subheader>
          　 請求額 　 　 　 　 　<v-divider class="q1" color="white" vertical></v-divider>　 　 　 　
          　消費税等　
        </v-subheader>
        <v-row no-gutters  background-color="#FFFDE7">
          <v-col>
            {{ amount }}
          </v-col>
          <v-col>
            <v-text-field background-color outlined />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
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
      <AmountEditer :amount= "amount(props.item.quanitity_val, props.item.unitprice_val)" />
    </template>
    <template v-slot:[`item.remarks_val`]="props">
      <RemarksEditer :remarks_val.sync="props.item.remarks_val" />
    </template>
    <template v-slot:[`item.tax_val`]="props">
      <TaxEditer :tax_val.sync="props.item.tax_val" :tax_items="tax_items" />
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-btn color="primary" @click="editCostomer(item)"> 更新 </v-btn>
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
import BillingAmount from '@/components/molecules/BillingAmount.vue';
import { computed } from 'vue';

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
    BillingAmount,
  },
})
export default class InvoiceIssueTable extends Vue {
  // Organismsはセクションコンテンツ（それ単体で一区切りとなるコンテンツ）
  unit_items: Array<string> = ['人月', '印月', '日', '時間', '人時', '名', '式', 'ヶ月', 'ページ'];
  tax_items: Array<string> = ['10%', '税なし'];
  division_items: Array<string> = ['通常', '値引', '返品', 'メモ', '小計', '文章行', '表題', '改頁', '空行', '源泉外'];
  
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
      tax_val: 10 + '%',
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
      tax_val: 10 + '%',
    },
  ];

  editedIndex = -1;

  editedCostomer = {
    division_val: '',
    productcode_val: '',
    productname_val: '',
    quanitity_val: '',
    unit_val: '',
    unitprice_val: '',
    amount_val: '',
    remarks_val: '',
    tax_val: 10 + '%',
  };

  created() {
    // 何か処理
  }
  @Emit()
  editCostomer(costmer: any) {
    this.editedIndex = this.desserts.indexOf(costmer);
    this.editedCostomer = Object.assign({}, costmer);
    alert(JSON.stringify(this.editedCostomer));
  }

  get amount() {
    return (quanitity: string, unitprice: string) => {
      const retVal = Number(quanitity) * Number(unitprice);
      return retVal ? retVal : 0;
    };
  }
  
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: white;
}
.v-subheader {
  background-color: rgb(56, 129, 255);
  color: white;
  justify-content: center;
}
.v-divider {
  color: white;
}
.q1 {
  margin-left: 2%;
}
</style>
