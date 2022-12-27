<template #click>
  <v-btn v-model="new_btn" @click="sendNew">新規</v-btn>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class NewButton extends Vue {
  public new_btn: string = ''
  @Emit()
  sendNew() {
    location.href = '/'
    return this.new_btn
  }
}
</script>
