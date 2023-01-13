<template>
  <div @click="send">JS20-000666</div>
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
  send() {
    location.href = '/DisplayQutationIssuelist'
  }
}
</script>
