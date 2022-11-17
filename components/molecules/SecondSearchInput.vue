<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field label="検索キー2："></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class SecondSearchInput extends Vue {}
</script>
