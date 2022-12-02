<template>
  <v-card-actions>
    <v-btn depressed elevation="5" @click="removeButton" width="200px" color="#dcdcdc">{{ action }}</v-btn>
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

  @Prop({ type: String })
  clearbutton!: string;

  //EmitしてMoleculesのOfficeLogo、OfficeSealにクリックイベントを渡してる。
  @Emit()
  removeButton() {}
}
</script>
