<template>
  <div>
    <v-app class="position-relative">
      <!-- Chevron Icon -->
      <v-navigation-drawer app v-model="drawer" disable-route-watcher permanent>
        <v-card width="256" class="rounded-0 h-120 overflow-hidden">
          <!-- Moody Logo -->
          <div class="d-flex justify-center align-center" style="height: 60px">
            <img
              v-if="getSidebarMini"
              src="../../assets/vrbo.svg"
              width="110px"
              alt="logo"
            />
          </div>
          <v-divider
            class="mt-0"
            style="color: rgb(255 255 255 / 70%)"
          ></v-divider>
          <!------Render Left Pannel List---->
          <div
            id="sidebar-list"
            class="mt-10 pointer"
            style="height: 80vh"
            v-if="links != ''"
          >
            <v-list>
              <v-list-item
                class="d-flex align-center pl-4 nav-hover"
                :class="titleName == link.tabName ? 'selected-route' : ''"
                id="left-nav-listitem"
                v-for="(link, i) in links"
                :key="i"
                router
                :to="link.route"
              >
                <!-- Sidebar Icons -->
                <div :id="link.icon">
                  <v-icon
                    class="mr-7 py-4"
                    :color="titleName == link.tabName ? 'blue' : 'black'"
                    v-text="link.icon"
                    size="25"
                  ></v-icon>
                </div>
                <!-- Sidebar Text -->
                <div v-show="!getSidebarMini || drawer" id="left-nav-list-text">
                  <span
                    class="text-capitalize body-2 font-weight-bold"
                    :class="titleName == link.tabName ? 'selected-tab' : ''"
                    v-if="link.text != 'Logout'"
                  >
                    {{ link.text }}
                    <v-chip
                      v-if="link.tabName == 'Performance'"
                      class="ml-5"
                      x-small
                      color="primary"
                    >
                      New
                    </v-chip>

                    <v-chip
                      v-if="link.tabName == 'LocalLaws'"
                      class="ml-5"
                      x-small
                      color="primary"
                    >
                      Beta
                    </v-chip>
                  </span>
                </div>
                <v-spacer> </v-spacer>
              </v-list-item>
              <v-divider></v-divider>
            </v-list>

            <!-- Logout -->
          </div>
        </v-card>
      </v-navigation-drawer>
      <v-card class="overflow-hidden">
        <v-app-bar absolute color="white">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title></v-toolbar-title>

          <v-spacer></v-spacer>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <div>
              Select a Property
                <v-btn icon class="ml-n3">
                  <v-icon v-bind="attrs" v-on="on">mdi-chevron-down</v-icon>
                </v-btn>
              </div>
            </template>
            <v-list>
              <v-list-item
                link
                v-for="(item, index) in desserts"
                :key="index"
              >
                <v-list-item-title
                  class="pointer font-weight-regular "
                  style="font-size: 14px;color: #7b7bd6"
                  
                  @click="goToListings(item.title)"
                  >{{ item.text1 }}
                  <div style="font-size: 12px;color:black" class="mt-1">{{item.id}}</div>
                  </v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn icon class="mr-2">
            <v-icon size="22">mdi-bell</v-icon>
          </v-btn>

          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <div>
                My Account
                <v-btn icon class="ml-n3">
                  <v-icon v-bind="attrs" v-on="on">mdi-chevron-down</v-icon>
                </v-btn>
              </div>
            </template>
            <v-list>
              <v-list-item
                link
                v-for="(item, index) in Dropdownitems"
                :key="index"
              >
                <v-list-item-title
                  class="pointer"
                  @click="goToListings(item.title)"
                  >{{ item.title }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
          <div>
            Help
            <v-btn icon class="ml-n3">
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </div>
        </v-app-bar>
        <v-sheet
          id="scrolling-techniques-7"
          class="overflow-y-auto"
          max-height="60"
        >
          <v-container style="height: 1500px"> </v-container>
        </v-sheet>
      </v-card>

      <v-main id="admin-right-pannel">
        <v-container>
          <!-- If using vue-router -->
          <router-view :key="$route.fullPath"></router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { eventBus } from "@/main";
export default {
  components: {},
  data() {
    return {
      isMapModalSet: false,
      mini_variant: this.$vuetify.breakpoint.xs ? false : true,
      showable_links: [],
        desserts: [
        {
          name: "home.jpg",
          text1: "Mountain Shadow Retreat",
          id: "Vrbo 163231",
          plan: "Annual Subscription",
          status: "Expires At 9/12/2022",
          state: "Manage",
        },
        {
          name: "home1.jpg",
          text1: "Mountain Shadow Retreat",
          id: "Vrbo 163231",
          plan: "Annual Subscription",
          status: "Expires At 9/12/2022",
          state: "Manage",
        },
        {
          name: "home2.jpg",
          text1: "Mountain Shadow Retreat",
          id: "Vrbo 163231",
          plan: "Annual Subscription",
          status: "Expires At 9/12/2022",
          state: "Manage",
        },
        {
          name: "home.jpg",
          text1: "Mountain Shadow Retreat",
          id: "Vrbo 163231",
          plan: "Annual Subscription",
          status: "Expires At 9/12/2022",
          state: "Manage",
        },
        {
          name: "home1.jpg",
          text1: "Mountain Shadow Retreat",
          id: "Vrbo 163231",
          plan: "Annual Subscription",
          status: "Expires At 9/12/2022",
          state: "Manage",
        },
        {
          name: "home2.jpg",
          text1: "Mountain Shadow Retreat",
          id: "Vrbo 163231",
          plan: "Annual Subscription",
          status: "Expires At 9/12/2022",
          state: "Manage",
        },
        {
          name: "home.jpg",
          text1: "Mountain Shadow Retreat",
          id: "Vrbo 163231",
          plan: "Annual Subscription",
          status: "Expires At 9/12/2022",
          state: "Manage",
        },
      ],
      // loggedInUserDetail: JSON.parse(
      //   localStorage.getItem("loggedInUserDetail")
      // ),
      Dropdownitems: [
        { title: "Account Settings" },
        { title: "My properties" },
        { title: "Add new property" },
        { title: "Sign Out" },
      ],
      titleName: "",
      drawer:
        this.$vuetify.breakpoint.name == "md" ||
        this.$vuetify.breakpoint.name == "sm" ||
        this.$vuetify.breakpoint.name == "xs"
          ? false
          : true,
      links: [
        {
          icon: "mdi-camera-timer",
          text: "Dashboard",
          tabName: "Dashboard",
          route: "/",
          color: "black",
        },
        {
          icon: "mdi-email-outline",
          text: "Inbox",
          tabName: "Inbox",
          route: "/Inbox",
          color: "black",
        },
        {
          icon: "mdi-calendar-text",
          text: "Calender",
          tabName: "Calender",
          route: "/Calender",
          color: "black",
        },
        {
          icon: "mdi-chart-line-stacked",
          text: "MarketMaker",
          tabName: "MarketMaker",
          route: "/MarketMaker",
          color: "black",
        },
        {
          icon: "mdi-content-save",
          text: "Reservation manager",
          tabName: "ReservationManager",
          route: "/ReservationManager",
          color: "black",
        },
        {
          icon: "mdi-chart-bar",
          text: "Performance",
          tabName: "Performance",
          route: "/Performance",
          color: "black",
        },
        {
          icon: "mdi-home",
          text: "Property",
          tabName: "Property",
          route: "/Listings",
          color: "black",
        },
        {
          icon: "mdi-gavel",
          text: "Local laws",
          tabName: "LocalLaws",
          route: "/LocalLaws",
          color: "black",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["getSidebarMini"]),
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
  },
  created() {},
  watch: {
    breakpoint(value) {
      if (value == "md" || value == "sm" || value == "xs") {
        this.mini = true;
        this.$store.commit("setSidebarMini", true);
      }
    },
  },
  updated() {
    for (let i in this.links) {
      if (this.$route.name == "Admin") {
        this.titleName = "Dashboard";
      }
      if (this.links[i].route == "/" + this.$route.name) {
        this.titleName = this.links[i].tabName;
      }
    }
    //if internet is not connected
    if (navigator.onLine === false) {
      eventBus.$emit("snackbarMsg", {
        message: "No internet connection",
        color: "red",
      });
    }
  },
  methods: {
    goToListings(rout) {
      console.log(rout, "eeeee");
      if (rout == "Add new property") this.$router.push("Property");
      else this.$router.push("Listings");
    },
    /**
     * @Description
     * this function is used to toogle sidebar
     * @param format
     * @return void
     */
    toggleMini() {
      this.mini_variant = !this.mini_variant;
      this.$store.commit("setSidebarMini", this.mini_variant);
    },
    /**
     * @Description
     * this function is used to selected the color in sidebar
     * @param (link, titleName, index)
     * @return void
     */
    getColor(link, titleName, index) {
      return titleName == link.tabName
        ? (this.links[index].color = "#215549")
        : (this.links[index].color = "black");
    },
    /**
     * @Description
     * this function is used to show only those tabs which users have permissions
     * @param (link, titleName, index)
     * @return void
     */

    /**
     * @Description
     * this function is used to show the name in top app bar
     * @param none
     * @return void
     */
    detailsPageName() {
      let temp;
      if (this.$route.path == "/MessageArea") {
        temp = "/" + this.getConversation.request_page;
      } else temp = this.$route.path;
      let link = this.links.find((item) => {
        return item.route == temp;
      });
      if (link) {
        this.titleName = link.text;
        link.color = "white";
      } else if (this.$route.path.includes("Tasks")) {
        this.titleName = "Task Detail";
      } else if (this.$route.path.includes("Taskers")) {
        this.titleName = "Tasker Details";
      } else if (this.$route.path.includes("Posters")) {
        this.titleName = "Customer Details";
      } else if (this.$route.path.includes("AdminDashboard")) {
        this.titleName = "Admin Dashboard";
      } else if (this.$route.path.includes("Conversation")) {
        this.titleName = "Closed Ticket Conversation";
      } else if (this.$route.path.includes("Inventory")) {
        this.titleName = "Inventory";
      } else if (this.$route.path.includes("Payable")) {
        this.titleName = "Payable Taskers";
      } else if (this.$route.path.includes("Latency")) {
        this.titleName = "Latency Taskers";
      }
    },
  },
  mounted() {
    this.titleName = window.location.href.substr(
      window.location.href.lastIndexOf("/") + 1
    );
    this.detailsPageName();
    this.$store.commit("setSidebarMini", true);
  },
};
</script>
<style scoped>
.toggler {
  position: absolute !important;
  top: 72px;
  z-index: 9999;
  background-color: black !important;
  /* border: solid white 2px; */
  height: 30px;
  width: 30px;
}
.toggler-expanded {
  left: 242px !important;
}
.toggler-collapsed {
  left: 40px !important;
}
.border-bottom {
  border-bottom: 1px solid gray !important;
  background-color: transparent !important;
  overflow-y: hidden !important;
}
.shadow-app-bar {
  background-color: rgb(0 0 0 / 75%) !important;
}
.selected-tab {
  color: #2196f3 !important;
}
.selected-route {
  border-left: 5px solid #2196f3;
}
.pointer {
  cursor: pointer !important;
}
</style>
<style>
.v-main__wrap {
  padding-top: 20px !important;
  padding-left: 15px !important;
  padding-right: 15px !important;
  background: #a3a3a321 !important;
}
</style>
