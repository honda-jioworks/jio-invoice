<template>
  <div class="groundwork">
    <DashBoard />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import DashBoard from '~/components/templates/DashBoard.vue'
@Component({ components: { DashBoard } })
export default class index extends Vue {}
</script>

<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
</style>
