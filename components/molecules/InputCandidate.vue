<template>
  <div>
    <v-container>
      <v-row>
        <v-checkbox v-model="checkbox" label="入力候補に表示しない"></v-checkbox>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class InputCandidate extends Vue {
  checkbox: boolean = false;
}
</script>
