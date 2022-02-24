<template>
  <div>
    <div>
      <div class="d-flex">
        <v-breadcrumbs
          :items="items"
          class=""
          divider=">"
          color="blue"
        ></v-breadcrumbs>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <div
              class="pl-3 pr-3 pt-0 mt-3"
              style="
                border: 1px solid grey;
                border-radius: 5px;
                height: 30px;
                font-size: 12px;
              "
            >
              Show or hide
              <v-icon class="mt-1" v-bind="attrs" v-on="on"
                >mdi-chevron-down</v-icon
              >
            </div>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in showAndhideItems" :key="index">
              <v-list-item-title class="pointer" @click="goToTabs()">{{
                item.title
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu offset-y min-height="20px">
          <template v-slot:activator="{ on, attrs }">
            <div
              class="pl-3 pr-3 pt-0 mt-3 ml-3"
              style="
                border: 1px solid grey;
                border-radius: 5px;
                height: 30px;
                font-size: 12px;
              "
            >
              Settings
              <v-icon class="mt-1" v-bind="attrs" v-on="on"
                >mdi-chevron-down</v-icon
              >
            </div>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in showAndhideItems" :key="index">
              <v-list-item-title class="pointer" @click="goToTabs()">{{
                item.title
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    <div>
      <v-row>
        <v-col cols="9">
          <v-row class="fill-height">
            <v-col>
              <v-sheet height="64">
                <v-toolbar flat>
                  <!--<v-btn
            outlined
            class="mr-4"
            color="grey darken-2"
            @click="setToday"
          >
            Today
          </v-btn>-->
                  <v-btn fab text small color="grey darken-2" @click="prev">
                    <v-icon small> mdi-chevron-left </v-icon>
                  </v-btn>
                  <v-btn fab text small color="grey darken-2" @click="next">
                    <v-icon small> mdi-chevron-right </v-icon>
                  </v-btn>
                  <v-toolbar-title v-if="$refs.calendar">
                    {{ $refs.calendar.title }}
                  </v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-menu bottom right>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        outlined
                        color="grey darken-2"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <span>{{ typeToLabel[type] }}</span>
                        <v-icon right> mdi-menu-down </v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item @click="type = 'day'">
                        <v-list-item-title>Day</v-list-item-title>
                      </v-list-item>
                      <v-list-item @click="type = 'week'">
                        <v-list-item-title>Week</v-list-item-title>
                      </v-list-item>
                      <v-list-item @click="type = 'month'">
                        <v-list-item-title>Month</v-list-item-title>
                      </v-list-item>
                      <v-list-item @click="type = '4day'">
                        <v-list-item-title>4 days</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-toolbar>
              </v-sheet>
              <v-sheet height="600">
                <v-calendar
                  ref="calendar"
                  v-model="focus"
                  color="primary"
                  :events="events"
                  :event-color="getEventColor"
                  :type="type"
                  @click:event="showEvent"
                  @click:more="viewDay"
                  @click:date="viewDay"
                  @change="updateRange"
                ></v-calendar>
                <v-menu
                  v-model="selectedOpen"
                  :close-on-content-click="false"
                  :activator="selectedElement"
                  offset-x
                >
                  <v-card color="grey lighten-4" min-width="350px" flat>
                    <v-toolbar :color="selectedEvent.color" dark>
                      <v-btn icon>
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>
                      <v-toolbar-title
                        v-html="selectedEvent.name"
                      ></v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                      </v-btn>
                    </v-toolbar>
                    <v-card-text>
                      <span v-html="selectedEvent.details"></span>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        text
                        color="secondary"
                        @click="selectedOpen = false"
                      >
                        Cancel
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
              </v-sheet>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3">
          <div class="justify-end align-end mt-15 mb-2">
            <v-btn dense small outlined class="pointer"> Hide </v-btn>
          </div>
          <div class="font-weight-bold mb-3">Booking and blocks list</div>
          <div class="d-flex">
            <v-icon small dense color="blue" class="mr-2"> mdi-circle </v-icon>

            No bookings or block Dec 2021 <br />No bookings or block Jan 2022
          </div>
          <div class="d-flex">
            <v-icon small dense color="pink" class="mr-2"> mdi-circle </v-icon
            >Airbnb Booking Mon, Jan 31 - Tue, feb 1,2022 <br />
            Mar 2022 , No booking or blocks
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        text: "Print",
        disabled: false,
        //  href: 'breadcrumbs_dashboard',
      },
      {
        text: "Import & Export",
        disabled: false,
        //  href: 'breadcrumbs_link_1',
      },
      {
        text: "Feedback & Help",
        disabled: false,
        //  href: 'breadcrumbs_link_2',
      },
    ],
    showAndhideItems: [
      { title: "Base rate and discount" },
      { title: "Booking window" },
      { title: "Fees" },
      { title: "Taxes" },
      { title: "Damage Protection" },
      { title: "Payment terms" },
    ],
    focus: "",
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days",
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: ["indigo"],
    names: ["125$", "125$", "125$", "125$"],
  }),
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    goToTabs() {
      this.$router.push("BaseRates");
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    //  updateRange ({ start, end }) {
    //    const events = []

    //    const min = new Date(`${start.date}T00:00:00`)
    //    const max = new Date(`${end.date}T23:59:59`)
    //    const days = (max.getTime() - min.getTime()) / 86400000
    //    const eventCount = this.rnd(days, days + 20)

    //    for (let i = 0; i < eventCount; i++) {
    //      const allDay = this.rnd(0, 3) === 0
    //      const firstTimestamp = this.rnd(min.getTime(), max.getTime())
    //      const first = new Date(firstTimestamp - (firstTimestamp % 900000))
    //      const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
    //      const second = new Date(first.getTime() + secondTimestamp)

    //      events.push({
    //        name: this.names[this.rnd(0, this.names.length - 1)],
    //        start: first,
    //        end: second,
    //        color: this.colors[this.rnd(0, this.colors.length - 1)],
    //        timed: !allDay,
    //      })
    //    }

    //    this.events = events
    //  },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
  },
};
</script>
<style scoped>
.pointer {
  cursor: pointer !important;
}
</style>
<style>
.v-breadcrumbs__item {
  border-bottom: 1px solid grey !important;
}
.theme--light.v-breadcrumbs .v-breadcrumbs__divider,
.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled {
  color: rgb(76 172 255) !important;
}
</style>
