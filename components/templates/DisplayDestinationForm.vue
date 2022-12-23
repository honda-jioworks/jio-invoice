<template>
  <v-row class="dq">
    <!--一段目-->
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>t</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-col> <DestinationForm /> </v-col>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!--二段目-->
      <v-expansion-panel>
        <v-expansion-panel-header>t</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-col><PicInformationForm /></v-col>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!--三段目-->
      <v-expansion-panel>
        <v-expansion-panel-header>t</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-col>t</v-col>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import DestinationForm from '@/components/organisms/DestinationForm.vue';
import PicInformationForm from '@/components/organisms/PicInformationForm.vue';

@Component({ components: { DestinationForm, PicInformationForm } })
export default class DisplayDestinationForm extends Vue {}
</script>
<style lang="scss" scoped>
.dq {
  padding: 10px;
}
.v-expansion-panel-header {
  font-size: 120%;
}
</style>
