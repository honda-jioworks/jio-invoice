<template>
  <div>
    <v-container>
      <v-row>
        <v-checkbox v-model="checkbox" label="初期値として使用する"></v-checkbox>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class DefaultValue extends Vue {
  checkbox: boolean = false;
}
</script>
