<template #top>
  <v-sheet>
    <v-card height="55">
      <NewButton @send-new="getNew" />
      <FixButton @send-fix="getFix" />
      <DeleteButton @send-delete="getDelete" />
      <CopyButton @send-copy="sendCopy" />
    </v-card>
  </v-sheet>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import NewButton from '~/components/molecules/NewButton.vue'
import DeleteButton from '~/components/molecules/DeleteButton.vue'
import FixButton from '~/components/molecules/FixButton.vue'
import CopyButton from '~/components/molecules/CopyButton.vue'

@Component({
  components: { NewButton, DeleteButton, FixButton, CopyButton },
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
