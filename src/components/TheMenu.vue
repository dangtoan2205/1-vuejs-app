<template>
    <a-menu 
        v-model:openKeys="openKeys" 
        v-model:selectedKeys="selectedKeys" 
        mode="inline"
    >
        <a-menu-item key="admin-users">
            <router-link :to="{ name: 'admin-users' }">  <!--name: chính là name trong router/admin.js trỏ tới admin-->
                <span>Tài khoản</span>
            </router-link>
        </a-menu-item>

        <a-menu-item key="admin-roles">
            <router-link :to="{ name: 'admin-roles' }">  <!--name: chính là name trong router/admin.js trỏ tới admin-->
                <span>Vai trò</span>
            </router-link>
        </a-menu-item>

        <a-menu-item key="admin-settings">
            <router-link :to="{ name: 'admin-settings' }">  <!--name: chính là name trong router/admin.js trỏ tới admin-->
                <span>Cài đặt</span>
            </router-link>
        </a-menu-item>
    </a-menu>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  
  setup() {

    return { 
        
    };
  },

});
</script>