<script>
export default {
  name: "MyModal",
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
    changeShow: {
      type: Function,
      required: true,
    },
  },
  data: () => {
    return {};
  },
};
</script>

<template>
  <div class="modal" v-if="show" @click.self="changeShow">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
}
.modal-content {
  margin: auto;
  background: white;
  border-radius: 12px;
  padding: 25px 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
}
</style>