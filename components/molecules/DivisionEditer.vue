<template>
  <editor :label="label" :rule="rule" :selected.sync="division_in" :items="division_items"></editor>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync, Emit } from 'nuxt-property-decorator';
import SelectEditer from '@/components/atoms/SelectEditer.vue';

@Component({
  components: { editor: SelectEditer },
})
export default class DivisionEditer extends Vue {

  @PropSync('division_val', {type: String})
  division_in!: string;

  @Prop()
  division_items!: Array<string>;

  label: string = '区分';

  rule: Array<object> = [
    (v: any) => !!v || '区分を選択してください。',
  ];
}
</script>