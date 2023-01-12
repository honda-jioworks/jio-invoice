<template #top>
  <v-sheet>
    <v-card class="d-flex" height="55">
      <div>
        <FixButton @send-fix="getFix" />
        <DeleteIcon @send-delete="getDelete" />
        <CopyIcon @send-copy="sendCopy" />
      </div>
      <div class="ml-auto">
        <v-icon>mdi-lead-pencil</v-icon>
        <v-text>修正</v-text>
        <v-icon>mdi-delete</v-icon>
        <v-text>削除</v-text>
        <v-icon>mdi-content-copy</v-icon>
        <v-text>複写</v-text>
      </div>
    </v-card>
  </v-sheet>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import NewButton from '~/components/molecules/NewButton.vue'
import DeleteIcon from '~/components/molecules/DeleteIcon.vue'
import FixButton from '~/components/molecules/FixIcon.vue'
import CopyIcon from '~/components/molecules/CopyIcon.vue'

@Component({
  components: { NewButton, DeleteIcon, FixButton, CopyIcon },
})
export default class HeaderList extends Vue {
  private DeleteVal: string = ''
  private NewVal: string = ''
  private FixVal: string = ''
  private CopyVal: string = ''

  getDelete(val: string): void {
    this.DeleteVal = val
  }

  getNew(val: string): void {
    this.NewVal = val
  }

  getFix(val: string): void {
    this.FixVal = val
  }

  sendCopy(val: string): void {
    this.CopyVal = val
  }
}
</script>
