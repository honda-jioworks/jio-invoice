<template>
  <editor :label="label" :rule="rule" :value.sync="ac_in"></editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync, Emit } from 'nuxt-property-decorator';
import DialogTextEditer from '@/components/atoms/DialogTextEditer.vue';
@Component({
  components: { editor: DialogTextEditer },
})
export default class DialogAcEditor extends Vue {

  @PropSync('ac', {type: String})
  ac_in!: string;

  label: string = '入金先';

  rule: Array<object> = [
    (v: any) => !!v || this.label + 'を入力してください。',
  ];
}
</script>
