<template>
  <div class="containter-fluid">
    <div class="row text-white" style="background-color: #0c713d; padding: 1rem">
      <div class="col-12 d-flex">
        <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
          <span @click="showDrawer()"> X </span>
        </div>
        <div class="col-10 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start">
          <img src="../assets/logo-meo3.png" alt="logo" height="32" width="50" class="ms-3 me-3">
          <span class="d-none d-sm-flex">QUẢN TRỊ</span>
        </div>
        <div class="col-sm-3 d-none d-sm-flex align-items-center justify-content-sm-end">
          <span>ADMIN</span>
        </div>
        <div class="col-1 d-flex align-items-center justify-content-center">
          <span @click="showDrawerUser()"> X </span>
        </div>
      </div>
    </div>
  </div>
  <a-drawer v-model:visible="visible" title="Danh Mục" placement="left">
    <TheMenu />
  </a-drawer>
  <a-drawer v-model:visible="visible_user" title="Admin" placement="right">
    <p>Some contents 1...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
<script>
import { defineComponent, ref } from 'vue';
import TheMenu from '../components/TheMenu.vue';

export default defineComponent({
  components: {
    TheMenu
  },
  setup() {
    const visible = ref(false);
    const visible_user = ref(false);

    const showDrawer = () => {
      visible.value = true;
    };

    const showDrawerUser = () => {
      visible_user.value = true;
    };

    return {
      visible,
      visible_user,
      showDrawer,
      showDrawerUser
    };
  },

});
</script>