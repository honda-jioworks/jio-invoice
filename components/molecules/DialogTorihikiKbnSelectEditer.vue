<template>
  <editor :label="label" :rule="rule" :selected.sync="trhk_kbn_in" :items="trhk_kbn_items"></editor>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync, Emit } from 'nuxt-property-decorator';
import DialogSelectEditer from '@/components/atoms/DialogSelectEditer.vue';
@Component({
  components: { editor: DialogSelectEditer },
})
export default class DialogTorihikiKbnSelectEditer extends Vue {

  @PropSync('trhk_kbn', {type: String})
  trhk_kbn_in!: string;

  @Prop()
  trhk_kbn_items!: Array<string>;

  label: string = '取引区分';

  rule: Array<object> = [
    (v: any) => !!v || this.label + 'を入力してください。',
  ];
}
</script>
