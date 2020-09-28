<template>
  <div>
    Hello Taskbox
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
export default class Taskbox extends Vue {

}
</script>
<style lang="scss">
@import './styles/index.scss';
</style>
