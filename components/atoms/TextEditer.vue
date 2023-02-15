<template>
  <v-edit-dialog :return-value.sync="value_in">
    {{ value_in }}
    <template v-slot:input>
      <v-text-field v-model="value_in" @blur="input" v-bind:rules="rule" v-bind:label="label" counter></v-text-field>
    </template>
  </v-edit-dialog>
</template>
<script lang="ts">
import { Vue, Component, Prop, PropSync, Emit } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class CustomerName extends Vue {
  @PropSync('value', { type: String })
  value_in!: any;

  @Prop()
  label: any;

  @Prop()
  rule!: Array<object>;

  @Prop()
  field!: any;

  input() {
    switch (this.field) {
      case 'productcode':
        this.$store.commit('invoiceIssue/set', { productcode: this.value_in });
        break;
      case 'productname':
        this.$store.commit('invoiceIssue/set', { productname: this.value_in });
        break;
      case 'quanitity':
        this.$store.commit('invoiceIssue/set', { quanitity: this.value_in });
        break;
      case 'unit_in':
        this.$store.commit('invoiceIssue/set', { unit_in: this.value_in });
        break;
      case 'unitprice':
        this.$store.commit('invoiceIssue/set', { unitprice: this.value_in });
        break;
      case 'remarks':
        this.$store.commit('invoiceIssue/set', { remarks: this.value_in });
        break;
      case 'taxin':
        this.$store.commit('invoiceIssue/set', { taxin: this.value_in });
        break;
    }
  }
}
</script>
