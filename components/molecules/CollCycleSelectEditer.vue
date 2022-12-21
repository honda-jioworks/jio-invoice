<template>
  <editor :label="label" :rule="rule" :selected.sync="coll_cycl_in" :items="coll_cycl_items"></editor>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync, Emit } from 'nuxt-property-decorator';
import SelectEditer from '@/components/atoms/SelectEditer.vue';

@Component({
  components: { editor: SelectEditer },
})
export default class CollCycleSelectEditer extends Vue {

  @PropSync('coll_cycl', {type: String})
  coll_cycl_in!: string;

  @Prop()
  coll_cycl_items!: Array<string>;

  label: string = '回収サイクル';

  rule: Array<object> = [
    (v: any) => !!v || '回収サイクルを選択してください。',
  ];
  
}
</script>
