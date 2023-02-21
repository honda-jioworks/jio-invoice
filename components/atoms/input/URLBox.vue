<template>
  <div>
    <v-text-field :return-value.sync="value_in" :rules="rule" v-model="value_in" @blur="input" :label="label" counter>
    </v-text-field>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, PropSync } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class URLBox extends Vue {
  @PropSync('value', { type: String })
  value_in!: any;

  @Prop()
  label!: any;

  @Prop()
  rule!: Array<object>;

  input() {
    this.$store.commit('company/set', { officeUrl: this.value_in });
  }
}
</script>
<style lang="scss">
.textField {
  color: red;
}
</style>
