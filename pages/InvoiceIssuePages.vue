<template>
  <v-app>
    <v-sheet class="groundwork">
      <v-container fluid>
        <DisplayDestinationForm />
      </v-container>
    </v-sheet>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import DisplayDestinationForm from '@/components/templates/DisplayDestinationForm.vue';

@Component({ components: { DisplayDestinationForm } })
export default class InvoiceIssuePages extends Vue {}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
.v-card {
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}
</style>
