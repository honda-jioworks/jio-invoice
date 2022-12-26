<template>
  <editor :label="label" :rule="rule" :value.sync="cstm_name_in"></editor>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'nuxt-property-decorator'
import InvoiceTextEditor from '~/components/atoms/input/InvoiceTextEditor.vue'

@Component({
  components: { editor: InvoiceTextEditor },
})
export default class CustomerNameEditor extends Vue {
  @PropSync('cstm_name', { type: String })
  cstm_name_in!: string

  label: string = '得意先名'
  rule: Array<object> = [(v: any) => !!v || '得意先名を入力してください。']
}
</script>
