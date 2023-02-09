<template>
  <editor
    v-model="invoice_date"
    :label="label"
    :rule="rule"
    :value.sync="invoice_date_in"
    :type="type"
    :field="'invoice_date'"
  ></editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'nuxt-property-decorator'
import InvoiceTextEditor from '~/components/atoms/InvoiceTextEditor.vue'

@Component({
  components: { editor: InvoiceTextEditor },
})
export default class InvoiceDateEditor extends Vue {
  @PropSync('invoice_date', { type: String })
  invoice_date_in!: string

  label: string = '日付'

  rule: Array<object> = [(v: any) => !!v || '日付を入力してください。']

  type: string = 'date'
}
</script>
