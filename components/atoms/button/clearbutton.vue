<template>
  <v-card-actions class="justify-end">
    <v-btn depressed elevation="5" @click="RemoveButton">{{ action }}</v-btn>
  </v-card-actions>

  <!--button>クリア</button-->
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
import Selectfile from '~/components/atoms/input/Selectfile.vue';
@Component({
  components: { Selectfile },
})
export default class clearbutton extends Vue {
  @Prop({ type: String })
  action?: string;

  @Prop({ type: String, required: true })
  clearbutton!: string;

  RemoveButton() {}
  //   return (this.clearbutton = '');
  // }
}
</script>
