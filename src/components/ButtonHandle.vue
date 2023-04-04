<script>
import EventHandle from './EventHandle.vue';
import HelloWorld from './HelloWorld.vue';

export default {
  components: {
    EventHandle,
    HelloWorld,
  },
  data() {
    return {
      currentTab: 'EventHandle',
      tabs: ['EventHandle', 'HelloWorld'],
    };
  },
};
</script>

<template>
  <div>
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <hr />
    <component :is="currentTab" class="tab"></component>
    <hr />
  </div>
</template>
