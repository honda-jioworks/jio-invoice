<template>
  <v-row>
    <v-col class="dd1">
      <v-text-field outlined label="案件名"></v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class ProjectForm extends Vue {}
</script>
<style lang="scss" scoped>
.dd1 {
  margin-left: 2%;
  margin-right: 598px;
}
</style>
