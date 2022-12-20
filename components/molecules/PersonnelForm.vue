<template>
    <v-row>
        <v-col>
            <v-text-field cols="4"  label=役職></v-text-field>
        </v-col>
        <v-col>
            <v-text-field cols="4" label=担当者></v-text-field>
        </v-col>
        <v-col>
            <v-select :items="items" label="敬称" ></v-select>
        </v-col>
    </v-row>
  </template>
  
  <script lang="ts">
  import { Vue, Component,} from 'nuxt-property-decorator';
  @Component({ components: {} })
  export default class PersonnelForm extends Vue {
    items: Array<string> = ['様','殿','御中'];
  }
</script>
  
  