<template>
    <v-row>
        <v-col>
            <v-text-field  label=振込先2等></v-text-field>
            <v-text-field  label=振込先2等></v-text-field>
            <v-text-field  label=振込先2等></v-text-field>
            <v-btn >口座情報の変更</v-btn>
        </v-col>
    </v-row>
  </template>
  
  <script lang="ts">
  import { Vue, Component,} from 'nuxt-property-decorator';
  @Component({ components: {} })
  export default class AccountInformation extends Vue {
    
  }
  </script>