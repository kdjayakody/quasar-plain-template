<template>
<q-layout view="hHh Lpr lff">
    <q-header reveal elevated>
        <toolbar></toolbar>
    </q-header>
    <drawer></drawer>
    <q-page-container>
        <transition name="transitions" enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown" mode="out-in">
            <keep-alive>
                <router-view />
            </keep-alive>
        </transition>
    </q-page-container>
</q-layout>
</template>

<script>
import toolbar from "./common/toolbar";
import tp_toolbar from "./common/toolbar";

import drawer from "./common/drawer";

export default {
    data() {
        return {};
    },
    components: {
        toolbar: toolbar,
        drawer: drawer
    }
};
</script>

<style></style>
