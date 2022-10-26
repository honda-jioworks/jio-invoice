<template>
  <v-col 
    class="d-flex"
  >
  <v-select 
    :items="items"
    dense
  ></v-select>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({
  components: {},
  })
export default class AutomaticCalculation extends Vue {
 public items = ['自動', '軽減自動', 'しない'];
}
</script>