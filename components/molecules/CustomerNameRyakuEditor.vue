<template>
  <editor :label="label" :rule="rule" :value.sync="cstmr_mei_ryaku_in"></editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync, Emit } from 'nuxt-property-decorator';
import TextEditer from '@/components/atoms/TextEditer.vue';

@Component({
  components: { editor: TextEditer },
})
export default class CustomerNameRyakuEditor extends Vue {
  
  @PropSync('cstmr_mei_ryaku', {type: String})
  cstmr_mei_ryaku_in!: string;

  label: string = '得意先名(略称)';

  rule: Array<object> = [
    (v: any) => !!v || '得意先名(略称)を入力してください。',
  ];
}
</script>
