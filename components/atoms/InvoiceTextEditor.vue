<template>
  <v-edit-dialog :return-value.sync="value_in">
    {{ value_in }}
    <template #input>
      <v-text-field
        v-model="value_in"
        :rules="rule"
        :label="label"
        :type="type"
        counter
        :prefix="prefix"
        @click:outside="closeDialog"
        @keydown="something = $event.target.value"
        @blur="input"
      ></v-text-field>
    </template>
  </v-edit-dialog>
</template>
<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class editor extends Vue {
  @PropSync('value', { type: String })
  value_in!: any

  @Prop()
  label: any

  @Prop()
  prefix!: string

  @Prop()
  rule!: Array<object>

  @Prop()
  type: any

  @Prop({ type: String, required: true })
  field!: string

  closeDialog() {
    this.value_in = false
  }

  input() {
    switch (this.field) {
      case 'invoice_date':
        this.$store.commit('invoice/set', { invoice_date: this.value_in })
        break
      case 'invoice_num':
        this.$store.commit('invoice/set', { invoice_num: this.value_in })
        break
      case 'cstm_name':
        this.$store.commit('invoice/set', { cstm_name: this.value_in })
        break
      case 'invoice_title':
        this.$store.commit('invoice/set', { invoice_title: this.value_in })
        break
      case 'issued_check':
        this.$store.commit('invoice/set', { issued_check: this.value_in })
        break
      case 'price':
        this.$store.commit('invoice/set', { price: this.value_in })
        break
    }
  }
}
</script>
