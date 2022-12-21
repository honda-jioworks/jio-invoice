<template>
    <v-row>
        <v-col>
            <v-text-field v-model="positionName" @input="scanPosition" label=役職></v-text-field>
        </v-col>
        <v-col>
            <v-text-field v-model="staffName" @input="scanStaff" label=担当者></v-text-field>
        </v-col>
        <v-col>
            <v-select v-model="honorific" @input="scanHonorific" :items="items" label="敬称" ></v-select>
        </v-col>
    </v-row>
  </template>
  
  <script lang="ts">
  import { Vue, Component, Emit} from 'nuxt-property-decorator';
  @Component({ components: {} })
  export default class PersonnelForm extends Vue {
    items: Array<string> = ['様','殿','御中'];
    positionName: string ='';
    staffName: string ='';
    honorific: string ='';
  
    @Emit()
    scanPosition(): string{
    return this.positionName
    }

    @Emit()
    scanStaff(): string{
    return this.staffName
    }
    
    @Emit()
    scanHonorific(): string{
    return this.honorific
    }
  
  }
  </script>
  
  