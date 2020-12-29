<template>
  <header class="header">
    <div class="left-content">
      <p>{{ title }}</p>
    </div>
    <div class="right-content"></div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  },
};
</script>
