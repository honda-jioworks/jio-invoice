<template>
  <div>
    <v-text-field id="officeURL" value="https://jioworks.com" dense>
    </v-text-field>
    <!-- v-btn @click="getOfficeURL()"> aaa </v-btn -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'
@Component({ components: {} })
export default class URLBox extends Vue {
  public officeURL = '';
  @Emit('getOfficeURL')
  getOfficeURL() {
    this.officeURL = document.getElementById('officeURL')
    this.$emit('getOfficeURL', this.officeURL)
  }
}
</script>