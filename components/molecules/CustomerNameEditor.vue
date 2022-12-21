<template>
  <editor :label="label" :rule="rule" :value.sync="cstmr_mei_in"></editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync, Emit } from 'nuxt-property-decorator';
import TextEditer from '@/components/atoms/TextEditer.vue';

@Component({
  components: { editor: TextEditer },
})
export default class CustomerNameEditor extends Vue {
  @PropSync('cstmr_mei', {type: String})
  cstmr_mei_in!: string;

  label: string = '得意先名';

  rule: Array<object> = [
    (v: any) => !!v || '得意先名を入力してください。',
  ];
}
</script>
