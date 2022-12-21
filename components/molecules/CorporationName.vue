<template>
    <v-row>
        <v-col>
            <v-text-field v-model="corp" @input="scanCorp"  label=会社名 ></v-text-field>
        </v-col>
    </v-row>
  </template>

  <script lang="ts">
  import { Vue, Component, Emit} from 'nuxt-property-decorator';
  @Component({ components: {} })
  
  export default class CorporationName extends Vue {
    corp: string ='';

    @Emit()
    scanCorp(): string{
      return this.corp;
    }
    
  }
</script>