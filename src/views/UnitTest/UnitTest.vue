<template>
  <div>
    Hello {{ msg }}
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'

@Component
export default class UnitTest extends Vue {
  @Prop({ default: 'unit test' }) msg!: string
}
</script>

<style>
</style>
