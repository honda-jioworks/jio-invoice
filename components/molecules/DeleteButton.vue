<template #click>
  <v-btn v-model="dlt_btn" @click="sendDelete">削除</v-btn>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class DeleteButton extends Vue {
  public dlt_btn: string = ''
  @Emit()
  sendDelete() {
    location.href = '/'
    return this.dlt_btn
  }
}
</script>
