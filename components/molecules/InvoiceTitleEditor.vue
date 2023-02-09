<template>
  <editor
    v-model="invoice_title"
    :label="label"
    :rule="rule"
    :value.sync="invoice_title_in"
    :field="'invoice_title'"
  ></editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'nuxt-property-decorator'
import InvoiceTextEditor from '~/components/atoms/InvoiceTextEditor.vue'

@Component({
  components: { editor: InvoiceTextEditor },
})
export default class InvoiceTitleEditor extends Vue {
  @PropSync('invoice_title', { type: String })
  invoice_title_in!: string

  label: string = '件名'
  rule: Array<object> = [(v: any) => !!v || '件名を入力してください。']
}
</script>
