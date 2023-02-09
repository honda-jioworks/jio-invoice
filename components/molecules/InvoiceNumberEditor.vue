<template>
  <div :value="invoice_num" :field="'invoice_num'" @click="send">
    &yen;{{ invoice_num }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'nuxt-property-decorator'
import InvoiceTextEditor from '~/components/atoms/InvoiceTextEditor.vue'

@Component({
  components: { editor: InvoiceTextEditor },
})
export default class InvoiceNumberEditor extends Vue {
  @PropSync('invoice_num', { type: String })
  invoice_num_in!: string

  label: string = '請求書No.'

  rule: Array<object> = [(v: any) => !!v || '請求書番号を入力してください。']

  send() {
    location.href = '/DisplayInvoiceIssue'
  }
}
</script>
