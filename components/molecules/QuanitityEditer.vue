<template>
  <editor :label="label" :rule="rule" :value.sync="quanitity"></editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync, Emit } from 'nuxt-property-decorator';
import TextEditer from '@/components/atoms/TextEditer.vue';

@Component({
  components: { editor: TextEditer },
})
export default class QuanitityEditer extends Vue {
  @PropSync('quanitity_val', { type: String })
  quanitity!: string;

  label: string = '数量';

  rule: Array<object> = [(v: any) => !!v || '数量を入力してください。'];
}
</script>
