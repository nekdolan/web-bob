<script setup>
const props = defineProps(['title']);

</script>
<template>
  <ICollapsible class="_margin-bottom:1" key="props.title">
    <ICollapsibleItem :title="props.title">
      <slot name="default"></slot>
    </ICollapsibleItem>
  </ICollapsible>
</template>
