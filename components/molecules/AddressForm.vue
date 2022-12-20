<template>
    <v-row>
        <v-col>
            <v-text-field cols="4" ></v-text-field>
            <v-btn >地図を表示</v-btn>
        </v-col>
    </v-row>
  </template>

  <script lang="ts">
  import { Vue, Component} from 'nuxt-property-decorator';
  @Component({  })
  export default class AddressForm extends Vue {
    
  }
</script>