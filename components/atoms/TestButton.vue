<template>
  <v-btn elevation="2" @click="sendMessage">Button</v-btn>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({})
export default class TestButton extends Vue {
  @Emit()
  sendMessage(message: string): string {
    return message;
  }
}
</script>
