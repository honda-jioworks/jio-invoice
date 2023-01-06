<template>
  <editor :label="label" :rule="rule" :value.sync="quotation_num_in"></editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'nuxt-property-decorator'
import QuotationTextEditor from '~/components/atoms/QuotationTextEditor.vue'

@Component({
  components: { editor: QuotationTextEditor },
})
export default class QuotationNumberEditor extends Vue {
  @PropSync('quotation_num', { type: String })
  quotation_num_in!: string

  label: string = '見積書No.'

  rule: Array<object> = [(v: any) => !!v || '見積書番号を入力して下さい']
}
</script>
