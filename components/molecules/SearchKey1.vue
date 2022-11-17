<template>
  <v-form>
      <v-container>
        <v-row>
            <v-col
                cols="12"
                md="4"
                ><v-text-field 
                :rules="nameRules"
                label="検索キー1"
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
export default class SearchKey1 extends Vue {
      nameRules: Array<object> = [
        (v:string) => !!v || '入力してください'
      ];
    }
</script>