<template>
  <div>
    <v-container>
      <v-row>
        <!--v-col cols="5"><TextBox /-->
        <v-col>
          <v-textarea label="メモ" rows="1"></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import TextBox from '@/components/atoms/TextBox.vue';
@Component({ components: { TextBox } })
export default class MemoBox extends Vue {}
</script>
