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
      <CustomerNameEditor :cstmr_mei.sync="props.item.cstmr_mei"></CustomerNameEditor>
    </template>
    <template v-slot:[`item.cstmr_mei_ryaku`]="props">
      <CustomerNameRyakuEditor :cstmr_mei_ryaku.sync="props.item.cstmr_mei_ryaku"></CustomerNameRyakuEditor>
    </template>
    <template v-slot:[`item.tran_kbn`]="props">
      <TorihikiKbnSelectEditer
        :trhk_kbn.sync="props.item.tran_kbn"
        :trhk_kbn_items="trhk_kbn_items"
      ></TorihikiKbnSelectEditer>
    </template>
    <template v-slot:[`item.tax_mtd`]="props">
      <TaxSelectEditer :tax_mtd.sync="props.item.tax_mtd_kbn" :tax_mtd_items="tax_mtd_items"></TaxSelectEditer>
    </template>
    <template v-slot:[`item.ac`]="props">
      <AcEditor :ac.sync="props.item.ac"></AcEditor>
    </template>
    <template v-slot:[`item.cls_day`]="props">
      <CloseDaySelectEditer :cls_day.sync="props.item.cls_day" :cls_day_items="cls_day_items"></CloseDaySelectEditer>
    </template>
    <template v-slot:[`item.coll_cycl`]="props">
      <CollCycleSelectEditer
        :coll_cycl.sync="props.item.coll_cycl"
        :coll_cycl_items="coll_cycl_items"
      ></CollCycleSelectEditer>
    </template>
    <template v-slot:[`item.jisha_ic`]="props">
      <JishaIcSelectEditer :jisha_ic.sync="props.item.jisha_ic" :jisha_ic_items="jisha_ic_items"></JishaIcSelectEditer>
    </template>
    <template v-slot:[`item.start_bal`]="props">
      <StartBalEditer :start_bal.sync="props.item.start_bal"></StartBalEditer>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-btn color="primary" @click="editCostomer(item)"> 更新 </v-btn>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Vue, Component, Watch, Emit, Prop } from 'nuxt-property-decorator';
import CustomerNameEditor from '@/components/molecules/CustomerNameEditor.vue';
import CustomerNameRyakuEditor from '@/components/molecules/CustomerNameRyakuEditor.vue';
import TorihikiKbnSelectEditer from '@/components/molecules/TorihikiKbnSelectEditer.vue';
import TaxSelectEditer from '@/components/molecules/TaxSelectEditer.vue';
import AcEditor from '@/components/molecules/AcEditor.vue';
import CloseDaySelectEditer from '@/components/molecules/CloseDaySelectEditer.vue';
import CollCycleSelectEditer from '@/components/molecules/CollCycleSelectEditer.vue';
import JishaIcSelectEditer from '@/components/molecules/JishaIcSelectEditer.vue';
import StartBalEditer from '@/components/molecules/StartBalEditer.vue';

@Component({
  components: {
    CustomerNameEditor,
    CustomerNameRyakuEditor,
    TorihikiKbnSelectEditer,
    TaxSelectEditer,
    AcEditor,
    CloseDaySelectEditer,
    CollCycleSelectEditer,
    JishaIcSelectEditer,
    StartBalEditer,
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
    { text: '回収サイクル', value: 'coll_cycl' },
    { text: '自社担当者', value: 'jisha_ic' },
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
      coll_cycl: '',
      jisha_ic: '',
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
    coll_cycl: '',
    jisha_ic: '',
    start_bal: 0,
    del_flg: 0,
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
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: white;
}
</style>
