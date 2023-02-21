<template>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="性"
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="名"
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
export default class EmployeeName extends Vue {
    valid: boolean = false;
    firstname: string = '';
    lastname: string = '';
    nameRules: Array<object> = [
      (v:string) => !!v || '入力してください'
  ];
 }
</script>