<template>
  <v-sheet class="abc">
    <main-01 />
    <main-02 />
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Model } from 'nuxt-property-decorator';
import main01 from '@/components/molecules/main01.vue';
import main02 from '@/components/molecules/main02.vue';
@Component({ components: { main01, main02 } })
export default class Materiaru extends Vue {
  pushCheckbox = false;
}
</script>

<style lang="scss" scoped>
.paragraph1 {
  padding-bottom: auto;
  padding-top: auto;
  padding-right: auto;
  padding-left: 95px;
  margin: 10px 800px 15px 400px;
  border: 2px solid #f93;
}
.paragraph2 {
  margin-top: 7px;
  margin-left: 400px;
  width: 90px;
  padding-left: 21px;
}
.paragraph3 {
  margin-top: 7px;
  margin-right: auto;
  margin-left: auto;
  width: 1px;
  padding-left: 90px;
}
.paragraph4 {
  margin-right: auto;
  width: 330px;
}
</style>
