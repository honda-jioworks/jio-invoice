<template>
  <div>
    <v-row>
      <v-col cols="6">項目名:</v-col>
      <v-col cols="6"><SubjectNameTextBox @input-test="inputTest" /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import SubjectNameTextBox from '~/components/atoms/input/SubjectNameTextBox.vue';
@Component({ components: { SubjectNameTextBox } })
export default class SubjectName extends Vue {
  private textval: string = '';
  inputTest(val: string): void {
    this.textval = val;
  }
}
</script>
