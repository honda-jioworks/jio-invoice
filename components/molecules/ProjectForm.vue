<template>
  <v-row>
    <v-col cols="6">
      <v-text-field v-model="projectName" @blur="input" outlined @input="scanProject" label="案件名"></v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class ProjectForm extends Vue {
  projectName: string = '';
  input() {
    this.$store.commit('quotation/set', { project: this.projectName });
  }

  @Emit()
  scanProject(): string {
    return this.projectName;
  }
}
</script>
<style lang="scss" scoped>
.v-text-field {
  margin-left: 4%;
  margin-right: 12%;
}
</style>
