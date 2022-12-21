<template>
  <editor :label="label" :rule="rule" :selected.sync="trhk_kbn_in" :items="trhk_kbn_items"></editor>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync, Emit } from 'nuxt-property-decorator';
import SelectEditer from '@/components/atoms/SelectEditer.vue';

@Component({
  components: { editor: SelectEditer },
})
export default class TorihikiKbnSelectEditer extends Vue {

  @PropSync('trhk_kbn', {type: String})
  trhk_kbn_in!: string;

  @Prop()
  trhk_kbn_items!: Array<string>;

  label: string = '取引区分';

  rule: Array<object> = [
    (v: any) => !!v || '取引区分を入力してください。',
  ];
}
</script>
