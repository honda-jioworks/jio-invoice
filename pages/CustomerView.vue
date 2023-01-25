<template>
  <div>
    <CustomerTable
      :desserts="items"
      :trhk_kbn_items="trhk_kbn_items"
      :tax_mtd_items="tax_mtd_items"
      :cls_day_items="cls_day_items"
      :coll_cycl_items="coll_cycl_items"
      :jisha_ic_items="jisha_ic_items"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CustomerTable from '~/components/organisms/CustomerTable.vue';
import axios from 'axios';

@Component({
  components: { CustomerTable },
})
export default class CustomerView extends Vue {
  // pages内でコンテンツ制御（データ取得・更新などのロジックのみ）を管轄する
  trhk_kbn_items: Array<string> = ['掛売上', '即時売上'];
  tax_mtd_items: Array<string> = ['内税', '外税', '合計請求', '税なし'];
  cls_day_items: Array<string> = ['末'];
  coll_cycl_items: Array<string> = ['当月', '翌月', '翌々月15', '3ヶ月先', '4ヶ月先', '5ヶ月先', '6ヶ月先'];
  jisha_ic_items: Array<string> = ['植木規子'];
  items: any[] = [];

  async mounted() {
    // APIリクエスト送信
    const trhk_kbn_response = await axios.get('http://192.168.1.116:8000/invoice/v-select/GM0001');
    // 戻り値のmsgを変数に格納
    //this.trhk_kbn_items = trhk_kbn_response.data.msg;
    //TODO textとvalueにしちゃったので選択後に表示が数字になってしまう。
    // 開発者モードのログで確認
    console.log(JSON.stringify(this.trhk_kbn_items));

    // APIリクエスト送信
    const response = await axios.get('http://192.168.1.116:8000/invoice/customer/getAll');
    // 開発者モードのログで確認
    console.log(JSON.stringify(response.headers));
    console.log(JSON.stringify(response.data));
    // レスポンスから受け取り
    const custmer = response.data.msg;
    // 開発者モードのログで確認
    console.log(JSON.stringify(custmer));
    // 戻り値のmsgを変数に格納
    this.items = custmer;
  }
}
</script>
