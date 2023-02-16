<template>
  <editor :label="label" :rule="rule" :value.sync="cstmr_mei_in"></editor>
</template>
<script lang="ts">
import { Vue, Component, PropSync, Emit } from 'nuxt-property-decorator';
import DialogTextEditer from '@/components/atoms/DialogTextEditer.vue';
@Component({
  components: { editor: DialogTextEditer },
})
export default class DialogCustomerNameEditor extends Vue {

  @PropSync('cstmr_mei', {type: String})
  cstmr_mei_in!: string;

  label: string = '得意先名';

  rule: Array<object> = [
    (v: any) => !!v || this.label + 'を入力してください。',
  ];
}
</script>
