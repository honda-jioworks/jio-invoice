<template>
  <editor :label="label" :rule="rule" :value.sync="issued_check_in"></editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'nuxt-property-decorator'
import InvoiceTextEditor from '@/components/atoms/InvoiceTextEditor.vue'

@Component({
  components: { editor: InvoiceTextEditor },
})
export default class IssuedCheckEditor extends Vue {
  @PropSync('issued_check', { type: String })
  issued_check_in!: string

  label: string = '発行'
  rule: Array<object> = [
    (v: any) => !!v || '"済"または"済み"と入力してください',
  ]
}
</script>
