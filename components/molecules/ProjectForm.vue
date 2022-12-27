<template>
  <v-row class="dd1">
    <v-col>
      <v-text-field v-model="projectName" @input="scanProject" label="案件名"></v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class ProjectForm extends Vue {
  projectName: string = '';

  @Emit()
  scanProject(): string {
    return this.projectName;
  }
}
</script>
<style lang="scss" scoped>
.dd1 {
  margin-left: 2%;
  margin-right: 598px;
}
</style>
