<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field label="FAX"></v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class FaxNumberBox extends Vue {}
</script>
