<template #click>
  <v-icon v-model="dlt_btn" @click="sendDelete">mdi-delete</v-icon>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class DeleteIcon extends Vue {
  public dlt_btn: string = ''
  @Emit()
  sendDelete() {
    location.href = '/'
    return this.dlt_btn
  }
}
</script>
