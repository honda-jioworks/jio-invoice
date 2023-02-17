<template>
  <editor :label="label" :rule="rule" :value.sync="amount"><input v-model.number="totalPrice" type="number" /></editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync, Emit } from 'nuxt-property-decorator';
import TextEditer from '@/components/atoms/TextEditer.vue';

@Component({
  components: { editor: TextEditer },
})
export default class AmountEditer extends Vue {
  @PropSync('amount_val', { type: String })
  amount!: string;
  public totalPrice: number = 2;

  label: string = '金額';

  rule: Array<object> = [(v: any) => !!v || '金額を入力してください。'];
}
</script>
