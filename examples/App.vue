<template>
  <div class="examples-container">
    <div class="component-items">
      <p v-for="comp in components" :key="comp.name">
        <router-link :to="{ name: comp.name }">
          {{ comp.name }}
        </router-link>
      </p>
    </div>
    <div class="component-wrapper"><router-view /></div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const components = computed(() => {
  return router.getRoutes();
});
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.examples-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  .component-items {
    width: 200px;
    height: 100%;
    overflow: auto;
    border-right: 1px solid #ccc;
    box-sizing: border-box;
    padding: 0 10px;
    > p {
      margin: 0;
      line-height: 24px;
    }
  }
  .component-wrapper {
    height: 100%;
    overflow: auto;
    padding: 5px;
    flex: 1;
    width: 0;
  }
}
</style>
