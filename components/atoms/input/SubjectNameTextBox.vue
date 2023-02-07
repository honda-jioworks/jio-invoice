<template>
  <v-text-field :rules="rule" :label="label" :disabled="!checkVal" @blur="input" v-model="value_in"></v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, PropSync } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class TextBox extends Vue {
  @PropSync('value', { type: String })
  value_in!: string;

  @Prop()
  label!: string;

  @Prop()
  rule!: Array<object>;

  @Prop({ type: Boolean })
  checkVal!: boolean;

  public rules: Array<object> = [
    //(v: String) => v.length <= 25 || 'Max 25 characters',
  ];

  input() {
    this.$store.commit('company/set', { textVal: this.value_in });
  }
}
</script>
<style lang="scss" scoped>
.v-text-field {
  margin-top: 9px;

  margin-left: 4px;
}
</style>
