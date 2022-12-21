<template>
    <v-row>
        <v-col>
            <v-select :items="items" label="発行" ></v-select>
        </v-col>
    </v-row>
  </template>
  
  <script lang="ts">
  import { Vue, Component,} from 'nuxt-property-decorator';
  @Component({ components: {} })
  export default class PicName extends Vue {
    items: Array<string> = ['発行済','再発行',];
  }
</script>

  