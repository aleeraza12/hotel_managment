<template>
  <div class="mx-5">
    <div class="text--black font-weight-bold">My properties</div>
    <div class="d-flex mt-4">
      <div style="width: 30%">
        <v-text-field
          dense
          solo
          label="Search by property ID"
          prepend-inner-icon="mdi-account-search"
        ></v-text-field>
      </div>
      <div style="width: 30%">
        <v-select
          class="mb-0 ml-2"
          dense
          small
          :items="items"
          label="Filters"
          solo
        ></v-select>
      </div>
    </div>
    <v-data-table :headers="headers" :items="desserts" class="elevation-10">
      <template v-slot:item.name="{ item }">
        <img
          :src="getImgURL(item.name)"
          style="width: 60px; height: 60px"
          class="my-auto ml-3"
          aspect-ratio="10"
        />
      </template>
      <template v-slot:item.text1="{ item }">
        <div style="color: #7b7bd6" class="font-weight-bold mt-2">
          {{ item.text1 }}
          <div style="font-size: 12px" class="text--disabled">
            7630 Julynn Road, Colorado Springs,CO, 80919,US
          </div>
          <div class="d-flex">
            <v-rating v-model="rating" color="black " dense x-small></v-rating
            ><span class="text--disabled">(2)</span>
          </div>
        </div>
      </template>
      <template v-slot:item.status="{ item }">
        <v-btn color="rgb(0, 51, 0)" small width="120" class="btn-active">
          <span class="white--text btn-txt">Active</span>
        </v-btn>
        <div class="active-text mt-1">{{ item.status }}</div>
      </template>
      <template v-slot:item.state="{ item }">
        <div class="d-flex">
          <span>
            {{ item.state }}
          </span>
          <span>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on"> mdi-chevron-down </v-icon>
              </template>
              <v-list>
                <v-list-item
                  link
                  v-for="(item, index) in viewProperties"
                  :key="index"
                >
                  <v-list-item-title class="pointer">{{
                    item.title
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </span>
        </div>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      rating: 5,
      viewProperties: [
        { title: "View propert dashboard" },
        { title: "View calender" },
        { title: "View Inbox" },
        { title: "View Payments" },
        { title: "Reservations" },
        { title: "Property details" },
        { title: "Edit Property" },
        { title: "Review Plan" },
      ],
      headers: [
        {
          text: "Property",
          align: "center",
          sortable: false,
          value: "name",
        },
        { text: "", value: "text1", width: "15%" },
        { text: "ID/External ID", value: "id" },
        { align: "center", text: "Plan", value: "plan" },
        { align: "center", text: "Status", value: "status" },
        { text: "", value: "state" },
      ],
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
    };
  },
  computed: {},
  methods: {
    getImgURL(a) {
      console.log("a", a);
      var images = require.context("../assets/", false, /\.jpg$/);
      return images("./" + a);
    },
  },
};
</script>
<style scoped>
.btn-txt {
  font-size: 10px;
}
.btn-active {
  border-radius: 0px !important;
}
.active-text {
  font-size: 12px;
}
.pointer {
  cursor: pointer !important;
}
</style>
