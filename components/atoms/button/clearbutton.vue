<template>
<v-card-actions class="justify-end">
    <v-btn depressed elevation="5"  color="#909090" @click="onClick">{{action}}</v-btn>
    
</v-card-actions>
<!--button>クリア</button-->


</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';




@Component({
  components: { },
})
export default class clearbutton extends Vue {

  @Prop()
   action?:string;





  @Prop()
        public greet?: string;

        public onClick(){
           console.log(this.greet);
        }

}
</script>

