<template>
  <editor :label="label" :rule="rule" :value.sync="start_bal_in"></editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync, Emit } from 'nuxt-property-decorator';
import TextEditer from '@/components/atoms/TextEditer.vue';

@Component({
  components: { editor: TextEditer },
})
export default class StartBalEditer extends Vue {
  @PropSync('start_bal', {type: String})
  start_bal_in!: string;

  label: string = '開始残高';

  rule: Array<object> = [
    (v: any) => !!v || '開始残高を入力してください。',
  ];
}
</script>
