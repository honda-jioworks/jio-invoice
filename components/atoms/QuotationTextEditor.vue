<template>
  <v-edit-dialog :return-value.sync="value_in">
    {{ value_in }}
    <template #input>
      <v-text-field
        v-modal="value_in"
        :rules="rule"
        :label="label"
        :type="type"
        counter
        :feild="feild"
        @click:outside="closeDialog"
        @blur="input"
      >
      </v-text-field>
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
      case 'quotation_date':
        this.$store.commit('quotation/set', { quotation_date: this.value_in })
        break
      case 'quotation_num':
        this.$store.commit('quotation/set', { quotation_num: this.value_in })
        break
      case 'cstm_name':
        this.$store.commit('quotation/set', { cstm_name: this.value_in })
        break
      case 'quotation_title':
        this.$store.commit('quotation/set', { quotation_title: this.value_in })
        break
      case 'issued_check':
        this.$store.commit('quotation/set', { issued_check: this.value_in })
        break
      case 'price':
        this.$store.commit('quotation/set', { price: this.value_in })
        break
    }
  }
}
</script>
