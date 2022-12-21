<template>
    <v-row>
        <v-col>
            <v-text-field  label=会社名 :value="corpName" @input="scancorp"></v-text-field>
        </v-col>
    </v-row>
  </template>

  <script lang="ts">
  import { Vue, Component, Emit} from 'nuxt-property-decorator';
  @Component({ components: {} })
  
  export default class CorporationName extends Vue {
    corpName: string ='';

    @Emit()
    scancorp(_:string): string{
      return this.corpName;
    }
    
  }
</script>