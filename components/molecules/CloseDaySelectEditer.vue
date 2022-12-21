<template>
  <editor :label="label" :rule="rule" :selected.sync="cls_day_in" :items="cls_day_items"></editor>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync, Emit } from 'nuxt-property-decorator';
import SelectEditer from '@/components/atoms/SelectEditer.vue';

@Component({
  components: { editor: SelectEditer },
})
export default class CloseDaySelectEditer extends Vue {

  @PropSync('cls_day', {type: String})
  cls_day_in!: string;

  @Prop()
  cls_day_items!: Array<string>;

  label: string = '締日（毎月）';

  rule: Array<object> = [
    (v: any) => !!v || '締日を選択してください。',
  ];
}
</script>
