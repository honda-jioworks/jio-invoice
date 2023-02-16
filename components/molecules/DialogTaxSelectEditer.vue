<template>
  <editor :label="label" :rule="rule" :selected.sync="tax_mtd_in" :items="tax_mtd_items"></editor>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync, Emit } from 'nuxt-property-decorator';
import DialogSelectEditer from '@/components/atoms/DialogSelectEditer.vue';
@Component({
  components: { editor: DialogSelectEditer },
})
export default class DialogTaxSelectEditer extends Vue {

  @PropSync('tax_mtd', {type: String})
  tax_mtd_in!: string;

  @Prop()
  tax_mtd_items!: Array<string>;

  label: string = '税処理';

  rule: Array<object> = [
    (v: any) => !!v || this.label + 'を入力してください。',
  ];

}
</script>
