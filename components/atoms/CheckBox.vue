<template>
  <v-container fluid>
    <v-checkbox v-model="checkbox"></v-checkbox>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class CheckBox extends Vue {
  private checkbox: boolean = false;
}
</script>
