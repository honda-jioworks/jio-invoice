<template>
  <editor :label="label" :rule="rule" :value.sync="price_in"></editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'nuxt-property-decorator'
import InvoiceTextEditor from '@/components/atoms/InvoiceTextEditor.vue'

@Component({
  components: { editor: InvoiceTextEditor },
})
export default class PriceEditor extends Vue {
  @PropSync('price', { type: String })
  price_in!: string

  label: string = '金額'
  rule: Array<object> = [(v: any) => !!v || '金額を入力してください。']
}
</script>
