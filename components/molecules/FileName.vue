<template>
  <v-sheet>
    <v-row>
      <FileNameLabel :fileName="fileName" :value.sync="fileName" />
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref, Emit, PropSync } from 'nuxt-property-decorator';
import FileNameLabel from '~/components/atoms/label/FileNameLabel.vue';
@Component({
  components: {
    FileNameLabel,
  },
})
export default class FileName extends Vue {
  @PropSync('fileNamel_val', { type: String })
  fileName!: string;
  //PropでorganismsのfileNameの値を受け取る。
}
</script>
