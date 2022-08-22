import { defineStore } from "pinia";

const useMenu = defineStore('menuId', {
    state: () => ({
        selectedKeys: ['admin-users'],
        openKeys: [],
    }),
})