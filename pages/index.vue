<template>
  <v-sheet class="groundwork">
    <v-container class="AccountRegister">
      <v-row>
        <v-col cols="12"><DashBoard :v-model="send" /></v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import DashBoard from '@/components/organisms/MostRecentSalesAmount.vue';
@Component({ components: { DashBoard } })
export default class Index extends Vue {
  send: string = 'bbb';
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: white;
}
</style>
