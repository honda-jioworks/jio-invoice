<template>
  <div>
    <v-row>
      <v-col cols="4" class="wrap04">項目名:</v-col>
      <v-col cols="8" class="wrap10"><SubjectNameTextBox :checkVal="checkVal" @scan-text="scanText" /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
import SubjectNameTextBox from '~/components/atoms/input/SubjectNameTextBox.vue';
@Component({ components: { SubjectNameTextBox } })
export default class SubjectName extends Vue {
  @Prop({ type: Boolean })
  checkVal!: boolean;

  @Emit()
  scanText(val: string): string {
    return val;
  }
}
</script>
<style lang="scss">
.wrap04 {
  margin-top: 15px;
}
.wrap10 {
  margin-top: 5px;
}
</style>
