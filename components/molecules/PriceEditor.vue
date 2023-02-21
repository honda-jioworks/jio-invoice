<template>
  <editor
    v-model="price"
    :label="label"
    :rule="rule"
    :value.sync="price_in"
    :field="'price'"
  ></editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'nuxt-property-decorator'
import QuotationTextEditor from '~/components/atoms/QuotationTextEditor.vue'

@Component({
  components: { editor: QuotationTextEditor },
})
export default class PriceEditor extends Vue {
  @PropSync('price', { type: String })
  price_in!: string

  label: string = '金額'
  rule: Array<object> = [(v: any) => !!v || '金額を入力してください。']
}
</script>
