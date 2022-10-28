<template>
  <v-sheet>
    <v-row>
      <v-col cols="3"><FileLocationLabel /></v-col>
      <v-col cols="2"><FileRefer /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import FileLocationLabel from '~/components/atoms/label/FileLocationLabel.vue'
import FileRefer from '~/components/atoms/button/FileRefer.vue'
@Component({
  components: {
    FileLocationLabel,
    FileRefer,
  },
})
export default class FileLocation extends Vue {}
</script>