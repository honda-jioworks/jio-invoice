<template>
    <v-row>
        <v-col>
            <v-text-field  value="株式会社jioworks" readonly></v-text-field>
            <v-text-field  value="〒160-0022" readonly></v-text-field>
            <v-text-field  value="東京都新宿区新宿 5-11-1 ホーメスト新宿ビル9F" readonly></v-text-field>
            <v-text-field  value="TEL:03-6709-8269" readonly></v-text-field>
            <v-text-field  value="FAX:03-6709-8279" readonly></v-text-field>
            <v-btn>住所等の変更</v-btn>

        </v-col>
    </v-row>
  </template>
  
  <script lang="ts">
  import { Vue, Component,} from 'nuxt-property-decorator';
  @Component({ components: {} })
  export default class PrivateCompanyInformation extends Vue {
    
  }
  </script>