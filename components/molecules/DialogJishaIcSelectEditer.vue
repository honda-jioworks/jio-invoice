<template>
  <editor :label="label" :rule="rule" :selected.sync="jisha_ic_in" :items="jisha_ic_items"></editor>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync, Emit } from 'nuxt-property-decorator';
import DialogSelectEditer from '@/components/atoms/DialogSelectEditer.vue';
@Component({
  components: { editor: DialogSelectEditer },
})
export default class DialogJishaIcSelectEditer extends Vue {

  @PropSync('jisha_ic', {type: String})
  jisha_ic_in!: string;

  @Prop()
  jisha_ic_items!: Array<string>;

  label: string = '自社担当者';

  rule: Array<object> = [
    (v: any) => !!v || this.label + 'を選択してください。',
  ];

}
</script>
