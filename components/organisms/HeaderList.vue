<template #top>
  <v-sheet>
    <v-card height="55">
      <v-btn color="red" @click="deleteList"> 削除 </v-btn>
    </v-card>
  </v-sheet>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class HeaderList extends Vue {
  deleteList() {}
}
</script>
