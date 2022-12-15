<template>
  <v-sheet>
    <v-row class="d-none d-sm-none d-flex">
      <v-col><FileNameLabel /></v-col>
    </v-row>
    <v-row class="d-none d-md-none d-sm-flex">
      <v-col><FileNameLabel /></v-col>
    </v-row>
    <v-row class="hidden-sm-and-down">
      <v-col><FileNameLabel /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import FileNameLabel from '~/components/atoms/label/FileNameLabel.vue';
@Component({
  components: {
    FileNameLabel,
  },
})
export default class FileName extends Vue {}
</script>
