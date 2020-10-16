<template>
<q-toolbar class="bg-white text-dark shadow-10">
    <q-btn v-if="$q.platform.is.mobile" dense flat round icon="menu" class="q-mr-sm" @click="updateLeftDrawer({ updates: { leftDrawer: !leftDrawer } })" />
    <q-btn to="/" flat>
        <q-avatar class="q-mr-sm">
            <img src="../../assets/kdj_logo.svg" width="100%" />
        </q-avatar>
    </q-btn>
    <q-space />
    <template v-if="$q.platform.is.desktop">
        <!-- If Logged In -->
        <q-btn-dropdown outline style="color: black;" v-if="isLoggedIn" :label="'Hello, ' + this.user.username">
            <div class="row no-wrap q-pa-md">
                <div class="column items-center">
                    <div class="text-subtitle1 q-mt-md q-mb-xs">
                        Hello {{ this.user.username }}
                    </div>

                    <q-btn color="primary" label="Logout" size="sm" @click.prevent="logout" v-close-popup />
                </div>
                <q-separator vertical inset class="q-mx-lg" />
                <div class="column">
                    <q-btn dense flat v-show="user.is_admin == 1" to="/admin">Admin Area</q-btn>
                    <q-btn flat dense>Account Settings</q-btn>
                </div>
            </div>
        </q-btn-dropdown>
    </template>
</q-toolbar>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex";
import {
    Platform,
    openURL
} from "quasar";
export default {
    data() {
        return {
            left: false,
            right: false
        };
    },

    methods: {
        ...mapActions({
            updateLeftDrawer: "options/updateLeftDrawer",
            logoutAction: "auth/logout"
        }),

        logout() {
            this.$q.notify({
                message: "Do You Really need to go out?",
                color: "black",
                position: "center",
                actions: [{
                        label: "Yes",
                        color: "yellow",
                        handler: () => {
                            this.logoutAction();
                        }
                    },
                    {
                        label: "No",
                        color: "white",
                        handler: () => {
                            /* ... */
                        }
                    }
                ]
            });
        }
    },

    computed: {
        ...mapGetters({
            isLoggedIn: "auth/isLoggedIn",
            user: "auth/user",
            leftDrawer: "options/leftDrawerOpen"
        }),
        api() {
            return process.env.API;
        }
    }
};
</script>
