<template>
  <BasicInformation />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import BasicInformation from '@/components/organisms/BasicInformation.vue';

@Component({
  components: {
    BasicInformation,
  },
})
export default class index extends Vue {}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
</style>
