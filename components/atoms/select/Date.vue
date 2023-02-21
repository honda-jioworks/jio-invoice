<template>
  <v-select v-model="selected_in" :items="items" :rules="rule" :label="label" @blur="input"></v-select>
</template>
<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class Date extends Vue {
  @PropSync('selected', { type: String })
  selected_in!: string;

  @Prop()
  items!: Array<string>;

  @Prop()
  label!: string;

  @Prop()
  rule!: Array<object>;

  @Prop({ type: String, required: true })
  field!: string;

  input() {
    switch (this.field) {
      case 'salaryPaymentDate_in':
        this.$store.commit('company/set', { salaryPaymentDateVal: this.selected_in });
        break;
      case 'bonusPaymentDate_in':
        this.$store.commit('company/set', { bonusPaymentDateVal: this.selected_in });
        break;
    }
  }
}
</script>
