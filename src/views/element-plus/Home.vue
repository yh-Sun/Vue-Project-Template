<template>
    <div class="about">
        <v-header />
        <!-- <v-sidebar />
        <div class="content-box" :class="{ 'content-collapse': collapse }">
            <v-tags></v-tags>
            <div class="content">
                <router-view v-slot="{ Component }">
                    <transition name="move" mode="out-in">
                        <keep-alive :include="tagsList">
                            <component :is="Component" />
                        </keep-alive>
                    </transition>
                </router-view>
            </div>
        </div> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import vHeader from "@/components/Header.vue";
export default defineComponent({
    components: {
        vHeader,
    },
});
</script>