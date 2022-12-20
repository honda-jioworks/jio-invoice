<template>
    <v-row>
        <v-col>
            <v-text-field  label=TEL></v-text-field>
            <v-text-field  label=FAX></v-text-field>
        </v-col>
    </v-row>
  </template>

  <script lang="ts">
  import { Vue, Component,} from 'nuxt-property-decorator';
  @Component({ components: {} })
  export default class NumberForm extends Vue {
    
  }
</script>