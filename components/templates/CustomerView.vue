<template>
  <div>
    <CustomerTable
      :desserts="items"
      :trhk_kbn_items="trhk_kbn_items"
      :tax_mtd_items="tax_mtd_items"
      :cls_day_items="cls_day_items"
      :coll_cycl_items="coll_cycl_items"
      :jisha_ic_items="jisha_ic_items"
      :edit-costomer="editCostomer"
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
  trhk_kbn_items: Array<string> = [];

  @Prop()
  tax_mtd_items: Array<string> = [];

  @Prop()
  cls_day_items: Array<string> = [];

  @Prop()
  coll_cycl_items: Array<string> = [];

  @Prop()
  jisha_ic_items: Array<string> = [];

  @Prop()
  items: any[] = [];

  @Prop()
  editCostomer(){

  }
}
</script>
