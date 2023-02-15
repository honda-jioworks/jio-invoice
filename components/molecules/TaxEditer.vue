<template>
  <editor
    :label="label"
    :rule="rule"
    :field="'tax_in'"
    v-model="tax_in"
    :selected.sync="tax_in"
    :items="tax_items"
  ></editor>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync, Emit } from 'nuxt-property-decorator';
import SelectEditer from '@/components/atoms/SelectEditer.vue';

@Component({
  components: { editor: SelectEditer },
})
export default class TaxEditer extends Vue {
  @PropSync('tax_val', { type: String })
  tax_in!: string;

  @Prop()
  tax_items!: Array<string>;

  label: string = '税率';

  rule: Array<object> = [(v: any) => !!v || '税率を選択してください。'];
}
</script>
