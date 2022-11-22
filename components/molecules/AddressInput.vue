<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-text-field :rules="nameRules" label="住所"></v-text-field>
      </v-col>
      <v-col align-self="top" cols="2" sm="2" md="2" lg="2" xl="2">
        <!--v-btn> 地図を表示 </v-btn-->
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class AddressInput extends Vue {
  nameRules: Array<object> = [(v: string) => !!v || '住所を入力してください'];
}
</script>
