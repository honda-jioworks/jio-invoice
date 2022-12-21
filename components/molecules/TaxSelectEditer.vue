<template>
  <editor :label="label" :rule="rule" :selected.sync="tax_mtd_in" :items="tax_mtd_items"></editor>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync, Emit } from 'nuxt-property-decorator';
import SelectEditer from '@/components/atoms/SelectEditer.vue';

@Component({
  components: { editor: SelectEditer },
})
export default class TaxSelectEditer extends Vue {

  @PropSync('tax_mtd', {type: String})
  tax_mtd_in!: string;

  @Prop()
  tax_mtd_items!: Array<string>;

  label: string = '税処理';

  rule: Array<object> = [
    (v: any) => !!v || '税処理を入力してください。',
  ];

  @Emit()
  onClickOutside() {
    return this.tax_mtd_in;
  }
}
</script>
