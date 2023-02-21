<template>
  <CustomerRegister />
</template>

<style lang="scss" scoped>
.groundcolor {
  background: grey;
}
</style>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import CustomerRegister from '~/components/templates/CustomerRegister.vue';

@Component({
  components: { CustomerRegister },
})
export default class customerRegister extends Vue {}
</script>
