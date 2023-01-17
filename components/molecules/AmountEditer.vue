<template>
  <!-- <editor :label="label" :rule="rule" :value.sync="amount"><input v-model.number="totalPrice" type="number" /></editor> -->
  <div>&yen;{{ toLocale }}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
import TextEditer from '@/components/atoms/TextEditer.vue';

@Component({
  components: { editor: TextEditer },
})
export default class AmountEditer extends Vue {
  @Prop({ type: Number, default: 0 })
  amount!: number;
  private totalPrice: number = 2;

  get toLocale() {
    return this.amount.toLocaleString();
  }

  label: string = '金額';

  rule: Array<object> = [(v: any) => !!v || '金額を入力してください。'];
}
</script>
