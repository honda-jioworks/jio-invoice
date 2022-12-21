<template>
    <v-row>
        <v-col>
            <v-text-field :value="position" @input="scanposition" label=役職></v-text-field>
        </v-col>
        <v-col>
            <v-text-field :value="staff" @input="scanstaff" label=担当者></v-text-field>
        </v-col>
        <v-col>
            <v-select :value="honorific" @change="scanhonorific" :items="items" label="敬称" ></v-select>
        </v-col>
    </v-row>
  </template>
  
  <script lang="ts">
  import { Vue, Component, Emit} from 'nuxt-property-decorator';
  @Component({ components: {} })
  export default class PersonnelForm extends Vue {
    items: Array<string> = ['様','殿','御中'];
    position: string ='';
    staff: string ='';
    honorific: string ='';
  
    @Emit()
    scanstaff(){
    return this.position
    }
  
    @Emit()
    scanposition(){
    return this.staff
    }
  
    @Emit()
    scanhonorific(){
        console.log(this.honorific)
    return this.honorific
    }
  
  }
  </script>
  
  