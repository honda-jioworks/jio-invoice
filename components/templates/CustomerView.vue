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
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import CustomerTable from '~/components/organisms/CustomerTable.vue';
@Component({
  components: { CustomerTable },
})
export default class CustomerView extends Vue {

  // pages内でコンテンツ制御（データ取得・更新などのロジックのみ）を管轄する
  @Prop()
  trhk_kbn_items: Array<string> = ['掛売上', '即時売上'];

  @Prop()
  tax_mtd_items: Array<string> = ['内税', '外税', '合計請求', '税なし'];

  @Prop()
  cls_day_items: Array<string> = ['末'];

  @Prop()
  coll_cycl_items: Array<string> = ['当月', '翌月', '翌々月15', '3ヶ月先', '4ヶ月先', '5ヶ月先', '6ヶ月先'];

  @Prop()
  jisha_ic_items: Array<string> = ['植木規子'];

  @Prop()
  items: any[] = [];

}
</script>
