<template>
  <div>
    <v-container>
      <v-row>
        <!--v-col cols="5"><TextBox /-->
        <v-col cols="10" sm="7" lg="5">
          <v-textarea label="メモ" outlined></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import TextBox from '@/components/atoms/TextBox.vue';
@Component({ components: { TextBox } })
export default class Memo extends Vue {}
</script>
