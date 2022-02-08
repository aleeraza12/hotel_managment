<template>
  <div>
    <v-app class="position-relative">
      <!-- Chevron Icon -->
      <v-navigation-drawer
        app
        v-model="drawer"
        disable-route-watcher
        permanent
        >
        <v-card
          width="256"
          class="rounded-0 h-120 overflow-hidden"
        >
          <!-- Moody Logo -->
          <div
            class="d-flex justify-start align-center px-2"
            style="height: 70px"
          >
            <img
              v-if="getSidebarMini"
              height="40px"
              width="40px"
             
              alt="logo"
            />
            <img
              v-if="!getSidebarMini"
              height="40px"
              width="100px"
            
              alt="moody"
              class="mx-15"
            />
          </div>
          <!------Render Left Pannel List---->
          <div
            id="sidebar-list"
            class="mt-10 pointer y-scroll"
            style="height: 75vh"
            v-if="links != ''"
          >
            <v-list-item
              class="d-flex align-center pl-4 nav-hover"
              :class="titleName == link.text ? 'selected-route' : ''"
              id="left-nav-listitem"
              v-for="(link, i) in links"
              :key="i"
              router
              @mouseover="getColor(link, titleName, i)"
              @mouseleave="
                titleName == link.text
                  ? (links[i].color = 'black')
                  : (links[i].color = 'black')
              "
              :to="link.route"
            >
              <!-- Sidebar Icons -->
              <div :id="link.icon">
                <v-icon
                  class="mr-7 py-4"
                  color="black"
                  v-text="link.icon"
                  size="25"
                ></v-icon>
              </div>
              <v-tooltip
                content-class="arrow-left"
                v-if="getSidebarMini"
                :activator="'#' + link.icon"
                nudge-right="1"
                right
                color="#ffe7b8"
              >
                <span class="black--text"> {{ link.text }} </span>
              </v-tooltip>
              <!-- Sidebar Text -->
              <div v-show="!getSidebarMini || drawer" id="left-nav-list-text">
                <span
                  class="text-capitalize body-2 font-weight-bold"
                  v-if="link.text != 'Logout'"
                >
                  {{ link.text }}
                </span>
              </div>
              <v-spacer> </v-spacer>
              
            </v-list-item>
            <v-list-item
              class="nav-hover"
              @click="navigateToLB()"
            >
              <div id="navigate-icon">
                <v-icon class="mr-7 py-4" color="black"
                  >mdi-account-switch</v-icon
                >
                <v-tooltip
                  content-class="arrow-left"
                  v-if="getSidebarMini"
                  activator="#navigate-icon"
                  nudge-right="2"
                  right
                  color="#ffe7b8"
                >
                  <span class="black--text">Navigate to Labeling system</span>
                </v-tooltip>
              </div>
              <div class="text-capitalize body-2 font-weight-bold">
                <span>Navigate to LB</span>
              </div>
            </v-list-item>
            <!-- Logout -->
          </div>
        </v-card>
      </v-navigation-drawer>

      <v-app-bar
        app
        class="app-bar elevation-0 border-bottom"
        :class="isMapModalSet ? 'shadow-app-bar' : ''"
      >
        <!-- Hamburger menu (for xs-screens only)-->
        <v-app-bar-nav-icon
          id="admin-hameburger-icon"
          class="black--text"
          @click="drawer = !drawer"
          v-if="$vuetify.breakpoint.xs"
        ></v-app-bar-nav-icon>
        <v-icon
          size="30"
          color="black"
          class="mr-1"
          v-if="$route.path == '/MessageArea'"
          >mdi-headset-dock</v-icon
        >
        <v-toolbar-title id="admin-rightpannel-header-title">{{
          titleName
        }}</v-toolbar-title>
      </v-app-bar>
      <v-main id="admin-right-pannel">
        <v-container >
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
  components: {
   
  },
  data() {
    return {
      isMapModalSet: false,
      mini_variant: this.$vuetify.breakpoint.xs ? false : true,
      showable_links: [],
      loggedInUserDetail: JSON.parse(
        localStorage.getItem("loggedInUserDetail")
      ),
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
          tabName: "Tasks",
          route: "/Tabs2",
          color: "black",
        },
        {
          icon: "mdi-calendar-text",
          text: "Calender",
          tabName: "Products",
          route: "/Products",
          color: "black",
        },
        {
          icon: "mdi-chart-line-stacked",
          text: "MarketMaker",
          tabName: "Taskers",
          route: "/Taskers",
          color: "black",
        },
        {
          icon: "mdi-content-save",
          text: "Reservation manager",
          tabName: "Customers",
          route: "/Posters",
          color: "black",
        },
        {
          icon: "mdi-chart-bar",
          text: "Performance",
          tabName: "Manage Rates",
          route: "/Rates",
          color: "black",
        },
        {
          icon: "mdi-home",
          text: "Property",
          tabName: "Finance Board",
          route: "/FinanceTable",
          color: "black",
        },
        {
          icon: "mdi-gavel",
          text: "Local laws",
          tabName: "Customer Support",
          route: "/Query",
          color: "black",
        },
        {
          icon: "mdi-wechat",
          text: "Dashboard8",
          tabName: "Customer Support Board",
          route: "/Csr",
          color: "black",
        },
        {
          icon: "mdi-account-cog-outline",
          text: "Settings",
          tabName: "Settings",
          route: "/UserSettings",
          color: "black",
        },
        {
          icon: "mdi-account",
          text: "Dashboard9",
          tabName: "Transactions",
          route: "/transactions",
          color: "black",
        },
        {
          icon: "mdi-account",
          text: "Dashboard10",
          tabName: "Ongoing Task Board",
          route: "/OngoingTask",
          color: "black",
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      "getSidebarMini",
      
    ]),
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
  },
  created() {
  },
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
      if (this.links[i].route == "/" + this.$route.name) {
        this.titleName = this.links[i].tabName;
        this.links.forEach((element) => {
          element.tabName == this.titleName
            ? (element.color = "white")
            : (element.color = "black");
        });
      }
    }
    if (navigator.onLine === false) {
      //if internet is not connected
      eventBus.$emit("snackbarMsg", {
        message: "No internet connection",
        color: "red",
      });
    }
  },
  methods: {
    /**
     * @Description
     * this function is used to redirect to labelling system
     * @param format
     * @return void
     */
    navigateToLB() {
      this.$store.dispatch("navigateToLB");
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
  border-bottom: 1px solid rgb(200, 200, 200);
  background-color: transparent !important;
}
.shadow-app-bar {
  background-color: rgb(0 0 0 / 75%) !important;
}
</style>