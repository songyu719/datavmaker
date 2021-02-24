<template>
  <div class="tit_con">
    <div class="tit_con_logo"></div>
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "TitleText",
  props: ["name"]
}
</script>

<style scoped>

.tit_con {
  padding-top: 24px;
  padding-bottom: 22px;
  display: flex;
  align-items: center;
  color: #333;
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
}

.tit_con_logo {
  background: #469eff;
  width: 5px;
  height: 16px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  margin-right: 3px;
}

</style>