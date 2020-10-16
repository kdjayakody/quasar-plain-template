<template>
<q-drawer :width="250" @input="updateLeftDrawer({ updates: { leftDrawer: !leftDrawer } })" :value="leftDrawer">
    <q-scroll-area class="fit bg-grey-2 text-dark">
        <q-list padding>
            <q-item clickable v-ripple to="/dashboard">
                <q-item-section avatar>
                    <q-avatar icon="dashboard" color="grey-5" text-color="grey-7" square />
                </q-item-section>
                <q-item-section>Dashboard</q-item-section>
            </q-item>

            <q-expansion-item label="User Managment">
                <template v-slot:header>
                    <q-item-section avatar>
                        <q-avatar icon="how_to_reg" color="grey-5" square text-color="grey-7" />
                    </q-item-section>

                    <q-item-section>
                        Users
                    </q-item-section>
                </template>

                <q-item clickable v-ripple class="q-ml-xl" to="users">
                    <q-item-section>Users</q-item-section>
                </q-item>
            </q-expansion-item>
               <q-expansion-item label="System Managment">
                <template v-slot:header>
                    <q-item-section avatar>
                        <q-avatar icon="how_to_reg" color="grey-5" square text-color="grey-7" />
                    </q-item-section>

                    <q-item-section>
                        Management
                    </q-item-section>
                </template>

                <q-item clickable v-ripple class="q-ml-xl" to="categories">
                    <q-item-section>Categories</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="q-ml-xl" to="locations">
                    <q-item-section>Locations</q-item-section>
                </q-item>
                <q-item clickable v-ripple class="q-ml-xl" to="companies">
                    <q-item-section>Companies</q-item-section>
                </q-item>   
            </q-expansion-item>
               <q-expansion-item label="System Operations">
                <template v-slot:header>
                    <q-item-section avatar>
                        <q-avatar icon="how_to_reg" color="grey-5" square text-color="grey-7" />
                    </q-item-section>

                    <q-item-section>
                        Operations
                    </q-item-section>
                </template>

                <q-item clickable v-ripple class="q-ml-xl" to="masterdata">
                    <q-item-section>Master Data</q-item-section>
                </q-item>
               
            </q-expansion-item>
        </q-list>
    </q-scroll-area>
</q-drawer>
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex";

export default {
    data() {
        return {
            miniState: false
        };
    },
    components: {},
    computed: {
        ...mapGetters({
            leftDrawer: "options/leftDrawerOpen"
        })
    },
    methods: {
        ...mapActions("options", ["updateLeftDrawer"])
    }
};
</script>

<style></style>
