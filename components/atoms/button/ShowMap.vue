<template>
  <v-btn @click="showMaptest"> 地図を表示 </v-btn>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class ShowMap extends Vue {
  @Emit()
  showMaptest() {
    window.open(
      'https://www.google.com/maps/search/〒100-0001+東京都千代田区千代田/',
      'subwin',
      'width=750,height=750'
    );
  }
}
</script>
