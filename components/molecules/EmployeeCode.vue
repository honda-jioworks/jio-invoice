<template>
    <v-form v-model="valid">
      <v-container>
        <v-row>
            <v-col
                cols="12"
                md="4"
                ><v-text-field 
                v-model="EmployeeCode"
                :rules="nameRules"
                label="従業員コード"
                required
                ></v-text-field>
            </v-col>
        </v-row>
    </v-container>
  </v-form>
  </template>
  
  <script lang="ts">
    import { Vue, Component } from 'nuxt-property-decorator';
    @Component({})
    export default class EmployeeCode extends Vue {
        valid: boolean = false;
        EmployeeCode: string = '';
        nameRules: Array<object> = [
          (v:string) => !!v || '入力してください'
      ];
     }
  </script>