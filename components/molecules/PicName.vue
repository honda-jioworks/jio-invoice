<template>
    <v-row>
        <v-col>
            <v-select :items="items" label="担当者" ></v-select>
        </v-col>
    </v-row>
  </template>
  
  <script lang="ts">
  import { Vue, Component,} from 'nuxt-property-decorator';
  @Component({ components: {} })
  export default class PicName extends Vue {
    items: Array<string> = ['','',''];
  }
</script>
  
  