<template>
  <editor :label="label" :rule="rule" :field="'remarks'" v-model="remarks" :value.sync="remarks"></editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync, Emit } from 'nuxt-property-decorator';
import TextEditer from '@/components/atoms/TextEditer.vue';

@Component({
  components: { editor: TextEditer },
})
export default class RemarksEditer extends Vue {
  @PropSync('remarks_val', { type: String })
  remarks!: string;

  label: string = '備考';

  rule: Array<object> = [(v: any) => !!v || '備考を入力してください。'];
}
</script>
