<template>
  <editor
    v-model="issued_check"
    :label="label"
    :rule="rule"
    :value.sync="issued_check_in"
    :field="'issued_check'"
  ></editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'nuxt-property-decorator'
import QuotationTextEditor from '~/components/atoms/QuotationTextEditor.vue'

@Component({
  components: { editor: QuotationTextEditor },
})
export default class IssuedCheckEditor extends Vue {
  @PropSync('issued_check', { type: String })
  issued_check_in!: string

  label: string = '発行'
  rule: Array<object> = [
    (v: any) => /^(済||済み)$/.test(v) || '"済"または"済み"と入力してください',
  ]
}
</script>
