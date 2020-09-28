<template>
  <div>

  </div>
</template>
<script lang="ts">
import {
  Vue, Component, Prop, Watch,
} from 'vue-property-decorator';
import {
  State, Getter, Action, Mutation, namespace,
} from 'vuex-class';

@Component
class UnitTest extends Vue {
  @Prop({ default: 'hello' }) msg!: string
}

export default UnitTest;
</script>

<style>
</style>
