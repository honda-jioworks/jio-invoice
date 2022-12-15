<template>
  <v-sheet>
    <v-row>
      <FileNameLabel :fileName="fileName" />
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref, Emit } from 'nuxt-property-decorator';
import FileNameLabel from '~/components/atoms/label/FileNameLabel.vue';
@Component({
  components: {
    FileNameLabel,
  },
})
export default class FileName extends Vue {
  //PropでorganismsのfileNameの値を受け取る。
  @Prop({ type: String })
  fileName!: string;
}
</script>
