<template>
  <div>
    <customer-view
      :items="items"
      :trhk_kbn_items="trhk_kbn_items"
      :tax_mtd_items="tax_mtd_items"
      :cls_day_items="cls_day_items"
      :coll_cycl_items="coll_cycl_items"
      :jisha_ic_items="jisha_ic_items"
      :ac_items="ac_items"
      :edit-costomer="editCostomer"
      :open-ac="openAc"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import axios from 'axios';
import API_URL from '~/plugins/constants'
import CustomerView from '~/components/templates/CustomerView.vue';
@Component({
  components: { CustomerView },
})
export default class CusetmerViewPage extends Vue {
  // pages内でコンテンツ制御（データ取得・更新などのロジックのみ）を管轄する
  trhk_kbn_items: Array<string> = [];
  tax_mtd_items: Array<string> = [];
  cls_day_items: Array<string> = [];
  coll_cycl_items: Array<string> = [];
  jisha_ic_items: Array<string> = [];
  items: any[] = [];
  ac_items: Array<string> = [];
  async mounted() {
    // APIリクエスト送信
    const trhk_kbn_response = await axios.get(API_URL.HANYO_EDITOR_TRHK_KBN);
    const tax_response = await axios.get(API_URL.HANYO_EDITOR_TAX);
    const cls_response = await axios.get(API_URL.HANYO_EDITOR_CLOSE_DAY);
    const coll_response = await axios.get(API_URL.HANYO_EDITOR_COLL_CYCLE);
    const ic_response = await axios.get(API_URL.HANYO_EDITOR_SHAIN);
    // 戻り値のmsgを変数に格納
    this.trhk_kbn_items = trhk_kbn_response.data.msg;
    this.tax_mtd_items = tax_response.data.msg;
    this.cls_day_items = cls_response.data.msg;
    this.coll_cycl_items = coll_response.data.msg;
    this.jisha_ic_items = ic_response.data.msg;
    // APIリクエスト送信
    const response = await axios.get(API_URL.CUSTOMER_ALL);
    // レスポンスから受け取り
    const custmer = response.data.msg;
    // 開発者モードのログで確認
    console.log(JSON.stringify(custmer));
    // 戻り値のmsgを変数に格納
    this.items = custmer;
  }

  editCostomer(costmer: any) {
    console.log(JSON.stringify(costmer));
    axios.post(API_URL.CUSTOMER_CREATE_UPDATE, costmer)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert(response.data.msg);
      });
  }

  async openAc(cstmr_id: any) {
    const response = await axios.get(API_URL.AC_EDITOR + cstmr_id);
    this.ac_items = response.data.msg;
  }
}
</script>
