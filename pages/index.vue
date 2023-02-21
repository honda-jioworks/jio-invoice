<template>
  <v-sheet class="groundwork">
    <v-row>
      <v-col cols="12"><DashBoard /></v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import DashBoard from '@/components/templates/DashBoard.vue';
@Component({ components: { DashBoard } })
export default class Index extends Vue {}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: white;
}
</style>
