<template>
   <div> &yen;{{ toLocale }} </div>
</template>

<script lang="ts">
import { Vue, Component, Prop,} from 'nuxt-property-decorator';
import TextEditer from '@/components/atoms/TextEditer.vue';

@Component({
  components: { editor: TextEditer },
})
export default class AmountEditer extends Vue {
  @Prop({ type: Number })
  amount!: number;

  get toLocale(){
    return this.amount.toLocaleString();
  }
}
</script>
