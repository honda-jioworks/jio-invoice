<template>
  <editor :label="label" :rule="rule" :value.sync="ac_in"></editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync, Emit } from 'nuxt-property-decorator';
import TextEditer from '@/components/atoms/TextEditer.vue';

@Component({
  components: { editor: TextEditer },
})
export default class AcEditor extends Vue {
  
  @PropSync('ac', {type: String})
  ac_in!: string;

  label: string = '入金先';

  rule: Array<object> = [
    (v: any) => !!v || '入金先を入力してください。',
  ];
}
</script>
