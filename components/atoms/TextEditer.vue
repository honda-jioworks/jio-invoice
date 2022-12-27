<template>
    <v-edit-dialog
      :return-value.sync="value_in"
      
    >
      {{ value_in }}
      <template v-slot:input>
        <v-text-field
          v-model="value_in"
          v-bind:rules="rule"
          v-bind:label="label"
          counter
        ></v-text-field>
      </template>
    </v-edit-dialog>
  </template>
  <script lang="ts">
  import { Vue, Component, Prop, PropSync, Emit } from 'nuxt-property-decorator';
  @Component({
    components: {},
  })
  export default class CustomerName extends Vue {
    
    @PropSync('value', {type: String})
    value_in!: any;
    
    @Prop()
    label: any;
  
    @Prop()
    rule!: Array<object>;
  }
  </script>