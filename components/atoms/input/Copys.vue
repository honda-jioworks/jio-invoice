<template>
  <v-row>
    <v-col class="sin"> <lavel>[複写中]</lavel></v-col>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({ components: {} })
export default class Copys extends Vue {}
</script>
<style lang="scss" scoped>
.sin {
  color: red;
  font-size: 90%;
  margin-top: 5%;
  margin-left: 25%;
}
</style>
