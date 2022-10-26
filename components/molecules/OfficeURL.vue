<template>
  <div>
    <v-sheet>
      <v-row>
        <v-col cols="2"><OfficeURLLabel /></v-col>
        <v-col cols="3"><URLBox @getOfficeURL="officeURL = $event" /></v-col>
        <v-col cols="2"><URLBtn /></v-col>
        <v-col cols="2">{{ officeURL }}</v-col>
        <!-- v-btn @click="getOfficeURL()"> aab </v-btn -->
      </v-row>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import OfficeURLLabel from '~/components/atoms/label/OfficeURLLabel.vue'
import URLBox from '~/components/atoms/input/URLBox.vue'
import URLBtn from '@/components/atoms/button/URLBtn.vue'
@Component({ components: { OfficeURLLabel, URLBox, URLBtn } })
export default class OfficeURL extends Vue {
  @Prop({ type: String })
  officeURL!: string
}
</script>