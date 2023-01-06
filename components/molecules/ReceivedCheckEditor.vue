<template>
  <editor :label="label" :rule="rule" :value.sync="received_check_in"></editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'nuxt-property-decorator'
import QuotationTextEditor from '~/components/atoms/QuotationTextEditor.vue'

@Component({
  components: { editor: QuotationTextEditor },
})
export default class ReceivedCheckEditor extends Vue {
  @PropSync('received_check', { type: String })
  received_check_in!: string

  label: string = '受注'
  rule: Array<object> = [
    (v: any) => /^(済||済み)$/.test(v) || '"済"または"済み"と入力してください',
  ]
}
</script>
