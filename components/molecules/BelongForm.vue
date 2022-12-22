<template>
    <v-row>
        <v-col>
            <v-text-field v-model="departmentName" @input="scanDepartment" label=部署></v-text-field>
        </v-col>
        <v-col>
            <v-text-field v-model="divisionName" @input="scanDivision" label=課></v-text-field>
        </v-col>
    </v-row>
  </template>
  
  <script lang="ts">
  import { Vue, Component, Emit} from 'nuxt-property-decorator';
  @Component({ components: {} })
  export default class BelongForm extends Vue {
    departmentName: string = '';
    divisionName: string ='';
    
  @Emit()
    scanDepartment(): string{
        return this.departmentName;
  }
  @Emit()
    scanDivision(): string{
        return this.divisionName;
    }
  }
</script>