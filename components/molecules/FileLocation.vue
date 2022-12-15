<template>
  <v-sheet>
    <v-row class="d-none d-sm-none d-flex">
      <v-col><FileLocationLabel /></v-col>
      <v-col><FileRefer /></v-col>
    </v-row>
    <v-row class="d-none d-md-none d-sm-flex">
      <v-col><FileLocationLabel /></v-col>
      <v-col><FileRefer /></v-col>
    </v-row>
    <v-row class="hidden-sm-and-down">
      <v-col><FileLocationLabel /></v-col>
      <v-col><FileRefer /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import FileLocationLabel from '~/components/atoms/label/FileLocationLabel.vue';
import FileRefer from '~/components/atoms/button/FileRefer.vue';
@Component({
  components: {
    FileLocationLabel,
    FileRefer,
  },
})
export default class FileLocation extends Vue {}
</script>
