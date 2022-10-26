<template>
  <div>
    <v-row>
      <v-col cols="6">項目名:</v-col>
      <v-col cols="6"><TextBox /></v-col>
    </v-row>  
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  import TextBox from '@/components/atoms/input/TextBox.vue';
  @Component({ components: { TextBox } })
  export default class SubjectName extends Vue{
  }

</script>