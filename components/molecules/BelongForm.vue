<template>
    <v-row>
        <v-col>
            <v-text-field cols="6"  label=部署></v-text-field>
        </v-col>
        <v-col>
            <v-text-field cols="6" label=課></v-text-field>
        </v-col>
    </v-row>
  </template>
  
  <script lang="ts">
  import { Vue, Component,} from 'nuxt-property-decorator';
  @Component({ components: {} })
  export default class BelongForm extends Vue {
    
  }
</script>