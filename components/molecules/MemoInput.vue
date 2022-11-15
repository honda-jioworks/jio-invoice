<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="5">
        <v-text-field label="メモ："></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class MemoInput extends Vue {}
</script>
