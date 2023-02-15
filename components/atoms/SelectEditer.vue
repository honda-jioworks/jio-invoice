<template>
  <v-edit-dialog :return-value.sync="selected_in">
    {{ selected_in }}
    <template v-slot:input>
      <v-select v-model="selected_in" @blur="input" :items="items" v-bind:rules="rule" v-bind:label="label"></v-select>
    </template>
  </v-edit-dialog>
</template>
<script lang="ts">
import { Vue, Component, Prop, PropSync, Emit } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class CustomerName extends Vue {
  @PropSync('selected', { type: String })
  selected_in!: string;

  @Prop()
  items!: Array<string>;

  @Prop()
  label!: string;

  @Prop()
  rule!: Array<object>;

  @Prop()
  field!: any;

  input() {
    switch (this.field) {
      case 'unit_in':
        this.$store.commit('invoiceIssue/set', { unit_in: this.selected_in });
        break;
    }
  }
}
</script>
