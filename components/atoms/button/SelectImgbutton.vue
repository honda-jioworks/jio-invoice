<template>
  <v-card-actions>
    <v-btn @click="clickSelect" depressed elevation="5" width="200px" color="#dcdcdc">{{ selectimgbutton }}</v-btn>
  </v-card-actions>

  <!--button>クリア</button-->
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Ref } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class SelectImgbutton extends Vue {
  @Prop({ type: String })
  selectimgbutton?: string;

  @Emit()
  clickSelect() {}
}
</script>
