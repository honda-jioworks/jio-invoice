<template>
  <editor
    v-model="quotation_title"
    :label="label"
    :rule="rule"
    :value.sync="quotation_title_in"
    :field="'quotation_title'"
  >
  </editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'nuxt-property-decorator'
import QuotationTextEditor from '~/components/atoms/QuotationTextEditor.vue'

@Component({
  components: { editor: QuotationTextEditor },
})
export default class QuotationTitleEditor extends Vue {
  @PropSync('quotation_title', { type: String })
  quotation_title_in!: string

  label: string = '件名'
  rule: Array<object> = [(v: any) => !!v || '件名を入力して下さい。']
}
</script>
