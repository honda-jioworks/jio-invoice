<template>
    <v-row>
        <v-col>
            <v-text-field :value="departmentName" @input="scanDepartment" label=部署></v-text-field>
        </v-col>
        <v-col>
            <v-text-field :value="divisionName" @input="scanDivision" label=課></v-text-field>
        </v-col>
    </v-row>
  </template>
  
  <script lang="ts">
  import { Vue, Component, Emit} from 'nuxt-property-decorator';
  @Component({ components: {} })
  export default class BelongForm extends Vue {
    departmentName:string = '';
    divisionName:string ='';
    
  @Emit()
    scanDepartment(_:string): string{
        console.log(this.departmentName)
        return this.departmentName;
  }
  @Emit()
    scanDivision(_:string):string{
        return this.divisionName;
    }
  }
</script>