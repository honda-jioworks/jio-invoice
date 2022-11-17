<template>
    <v-form v-model="valid">
      <v-container>
        <v-row>
            <v-col
                cols="12"
                md="4"
                ><v-text-field 
                v-model="Position"
                :rules="nameRules"
                label="役職"
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
export default class PositionName extends Vue {
        valid: boolean = false;
        Position: string = '';
        nameRules: object = [
          (v:string) => !!v || '入力してください',
      ];
    }
  </script>