<template>
  <div>
    <v-row>
      <v-col cols="4" class="wrap04">項目名:</v-col>
      <v-col cols="8" class="wrap10"
        ><SubjectNameTextBox :rules="rule" :label="label" :value.sync="subjectName_in" :checkVal="checkVal"
      /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator';
import SubjectNameTextBox from '~/components/atoms/input/SubjectNameTextBox.vue';
@Component({ components: { SubjectNameTextBox } })
export default class SubjectName extends Vue {
  @PropSync('subjectName_val', { type: String })
  subjectName_in!: string;

  label: string = '項目名';

  rule: Array<object> = [(v: String) => !!v || '項目を入力してください'];

  @Prop({ type: Boolean })
  checkVal!: boolean;
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
