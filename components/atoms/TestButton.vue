<template>
  <v-btn @click="sendMessage">Button</v-btn>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({})
export default class TestButton extends Vue {
  message: string = 'ボタンが押されました';
  @Emit()
  sendMessage(message: string): string {
    return message;
  }
}
</script>
