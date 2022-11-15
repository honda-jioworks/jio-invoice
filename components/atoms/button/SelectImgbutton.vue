<template>
  <v-card-actions class="justify-end">
    <v-btn @click="btnclick">{{ selectimgbutton }}</v-btn>
  </v-card-actions>

  <!--button>クリア</button-->
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Ref } from 'nuxt-property-decorator';
import Selectfile from '~/components/atoms/input/Selectfile.vue';
@Component({
  components: { Selectfile },
})
export default class clearbutton extends Vue {
  @Prop({ type: String })
  selectimgbutton?: string;

  @Prop()
  urlValue!: string;

  @Emit()
  btnclick() {
    this.urlValue;
  }
}
</script>
