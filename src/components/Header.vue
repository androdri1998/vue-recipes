<template>
  <header class="header">
    <div class="left-content">
      <p class="title">{{ title }}</p>
    </div>
    <div class="right-content" />
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

<style scoped>
.header {
  width: 100%;
  height: min-content;
  display: flex;
  align-items: center;
  padding: 20px 30px;
}

.title {
  font-size: 2em;
}
</style>
