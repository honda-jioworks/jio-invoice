<template>
  <editor
    v-model="quotation_date"
    :label="label"
    :rule="rule"
    :value.sync="quotation_date_in"
    :type="type"
    :field="'quotation_date'"
  ></editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'nuxt-property-decorator'
import QuotationTextEditor from '../atoms/QuotationTextEditor.vue'
@Component({
  components: { editor: QuotationTextEditor },
})
export default class QuotationDateEditor extends Vue {
  @PropSync('quotation_date', { type: String })
  quotation_date_in!: string

  label: string = '日付'

  rule: Array<object> = [(v: any) => !!v || '日付を入力してください。']

  type: string = 'date'
}
</script>
