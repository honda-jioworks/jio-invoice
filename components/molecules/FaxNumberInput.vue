<template>
  <v-form>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field label="FAX："></v-text-field>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class FaxNumberInput extends Vue {}
</script>
