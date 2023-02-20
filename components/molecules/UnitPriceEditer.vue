<template>
  <editor :label="label" :rule="rule" :field="'unitprice'" v-model="unitprice" :value.sync="unitprice"></editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync, Emit } from 'nuxt-property-decorator';
import TextEditer from '@/components/atoms/TextEditer.vue';

@Component({
  components: { editor: TextEditer },
})
export default class ProductNameEditer extends Vue {
  @PropSync('unitprice_val', { type: String })
  unitprice!: string;

  label: string = '単価';

  rule: Array<object> = [(v: any) => !!v || '単価を入力してください。'];
}
</script>
