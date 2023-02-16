<template>
  <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1" hide-default-footer>
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>得意先一覧</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <template v-slot:[`item.cstmr_mei`]="props">
      <customer :cstmr_mei.sync="props.item.cstmr_mei" />
    </template>
    <template v-slot:[`item.cstmr_mei_ryaku`]="props">
      <customer-ryaku :cstmr_mei_ryaku.sync="props.item.cstmr_mei_ryaku" />
    </template>
    <template v-slot:[`item.tran_kbn`]="props">
      <torihikiKbn
        :trhk_kbn.sync="props.item.tran_kbn"
        :trhk_kbn_items="trhk_kbn_items"
      />
    </template>
    <template v-slot:[`item.tax_mtd`]="props">
      <tax :tax_mtd.sync="props.item.tax_mtd_kbn" :tax_mtd_items="tax_mtd_items" />
    </template>
    <template v-slot:[`item.ac`]="props">
      <ac :ac.sync="props.item.ac" />
    </template>
    <template v-slot:[`item.cls_day`]="props">
      <close-day :cls_day.sync="props.item.cls_day" :cls_day_items="cls_day_items" />
    </template>
    <template v-slot:[`item.coll_cycl_mon`]="props">
      <coll-cycle
        :coll_cycl.sync="props.item.coll_cycl_mon"
        :coll_cycl_items="coll_cycl_items"
      />
    </template>
    <template v-slot:[`item.coll_cycl_day`]="props">
      <coll-cycle
        :coll_cycl.sync="props.item.coll_cycl_day"
        :coll_cycl_items="cls_day_items"
      />
    </template>
    <template v-slot:[`item.ic_mei`]="props">
      <jisha-ic :jisha_ic.sync="props.item.ic_mei" :jisha_ic_items="jisha_ic_items" />
    </template>
    <template v-slot:[`item.start_bal`]="props">
      <start-bal :start_bal.sync="props.item.start_bal" />
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-btn color="primary" @click="editCostomer(item)"> 更新 </v-btn>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Vue, Component, Watch, Emit, Prop } from 'nuxt-property-decorator';
import DialogCustomerNameEditor from '@/components/molecules/DialogCustomerNameEditor.vue';
import DialogCustomerNameRyakuEditor from '@/components/molecules/DialogCustomerNameRyakuEditor.vue';
import DialogTorihikiKbnSelectEditer from '@/components/molecules/DialogTorihikiKbnSelectEditer.vue';
import DialogTaxSelectEditer from '@/components/molecules/DialogTaxSelectEditer.vue';
import DialogAcEditor from '@/components/molecules/DialogAcEditor.vue';
import DialogCloseDaySelectEditer from '@/components/molecules/DialogCloseDaySelectEditer.vue';
import DialogCollCycleSelectEditer from '@/components/molecules/DialogCollCycleSelectEditer.vue';
import DialogJishaIcSelectEditer from '@/components/molecules/DialogJishaIcSelectEditer.vue';
import DialogStartBalEditer from '@/components/molecules/DialogStartBalEditer.vue';
@Component({
  components: {
    Customer: DialogCustomerNameEditor,
    CustomerRyaku: DialogCustomerNameRyakuEditor,
    TorihikiKbn: DialogTorihikiKbnSelectEditer,
    Tax: DialogTaxSelectEditer,
    Ac: DialogAcEditor,
    CloseDay: DialogCloseDaySelectEditer,
    CollCycle: DialogCollCycleSelectEditer,
    JishaIc: DialogJishaIcSelectEditer,
    StartBal: DialogStartBalEditer,
  },
})
export default class CustomerTable extends Vue {
  // Organismsはセクションコンテンツ（それ単体で一区切りとなるコンテンツ）
  @Prop()
  trhk_kbn_items: Array<string> = [];

  @Prop()
  tax_mtd_items: Array<string> = [];

  @Prop()
  cls_day_items: Array<string> = [];

  @Prop()
  coll_cycl_items: Array<string> = [];

  @Prop()
  jisha_ic_items: Array<string> = [];

  headers = [
    { text: '名称', align: 'start', sortable: false, value: 'cstmr_mei' },
    { text: '略称', value: 'cstmr_mei_ryaku' },
    { text: '取引区分', value: 'tran_kbn' },
    { text: '税処理', value: 'tax_mtd' },
    { text: '入金先', value: 'ac' },
    { text: '締め日', value: 'cls_day' },
    { text: '回収サイクル月', value: 'coll_cycl_mon' },
    { text: '回収サイクル日', value: 'coll_cycl_day' },
    { text: '自社担当者', value: 'ic_mei' },
    { text: '開始残高', value: 'start_bal' },
    { text: '更新', value: 'actions', sortable: false },
  ];

  @Prop()
  desserts = [
    {
      cstmr_id: '',
      cstmr_mei: '',
      cstmr_mei_ryaku: '',
      srch_key_1: '',
      srch_key_2: '',
      tran_kbn: '',
      tax_mtd_kbn: '',
      ac: '',
      cls_day: '',
      coll_cycl_mon: '',
      coll_cycl_day: '',
      ic_mei: '',
      start_bal: 0,
      del_flg: 0,
    },
  ];

  editedIndex = -1;

  editedCostomer = {
    cstmr_id: '',
    cstmr_mei: '',
    cstmr_mei_ryaku: '',
    srch_key_1: '',
    srch_key_2: '',
    tran_kbn: '',
    tax_mtd: '',
    ac: '',
    cls_day: '',
    coll_cycl_mon: '',
    coll_cycl_day: '',
    ic_mei: '',
    start_bal: 0,
    del_flg: 0,
  };

  created() {
    // 何か処理
  }

  @Prop()
  editCostomer(costmer: any) {
    this.editedIndex = this.desserts.indexOf(costmer);
    this.editedCostomer = Object.assign({}, costmer);
    alert(JSON.stringify(this.editedCostomer));
  }
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: white;
}
</style>
