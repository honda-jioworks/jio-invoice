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
        @click:outside="closeDialog"
        @keydown="something = $event.target.value"
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
  rule!: Array<object>

  @Prop()
  type: any

  closeDialog() {
    this.value_in = false
  }
}
</script>
