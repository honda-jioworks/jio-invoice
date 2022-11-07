<template>
  <v-sheet>
    <v-row>
      <FileNameLabel />
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
