<template>
  <v-btn @click="showMaptest"> 地図を表示 </v-btn>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class ShowMap extends Vue {
  @Prop({ type: String })
  newAddress!: string;

  @Prop({ type: String })
  postalCode1!: string;

  @Prop({ type: String })
  postalCode2!: string;

  @Prop({ type: String })
  address1!: string;

  @Emit()
  showMaptest() {
    window.open(
      'https://www.google.com/maps/search/〒' + this.postalCode1 + '-' + this.postalCode2 + this.newAddress + '/',
      'subwin',
      'width=750,height=750'
    );
  }
}
</script>
