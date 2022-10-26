<template>
  <v-sheet>
    <v-row>
      <v-col cols="3"><FileNameLabel /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import FileNameLabel from '~/components/atoms/label/FileNameLabel.vue'
@Component({
  components: {
    FileNameLabel,
  },
})
export default class FileName extends Vue {}
</script>