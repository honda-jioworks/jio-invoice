<template>
    <v-row>
        <v-col>
            <v-text-field  label=会社名></v-text-field>
        </v-col>
    </v-row>
  </template>

  <script lang="ts">
  import { Vue, Component,} from 'nuxt-property-decorator';
  @Component({ components: {} })
  export default class CorporationName extends Vue {
    
  }
</script>