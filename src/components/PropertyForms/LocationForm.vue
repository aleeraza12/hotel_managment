<template>
  <div>
    <v-card class="elevation-5">
      <v-card-text>
    <div class="heading pa-5">Property Location</div>
    <div class="sub-heading pt-8 pl-5">Address</div>
    <div class="sub-heading pt-2 pl-5">
      <b
        >Abc road , new york, <br />
        United States</b
      >
    </div>
    <div class="card-title mt-5 ml-5">Status</div>
    <v-btn class="ml-5 mt-3" color="success" dense small>Verified</v-btn>
    <div class="card-title mt-5 ml-5">Traveler Map</div>
    <div class="sub-heading ml-5 mt-2">{{ text }}</div>
    <div class="ml-5 mt-3 d-flex">
      <v-checkbox color="primary" value="red" hide-details></v-checkbox>
      <div class="card-title mt-5 ml-1">
        <span>Display my property location</span>
        <span>(recommended)</span>
      </div>
    </div>
    <div class="card-title mt-5 ml-5">
      <span>Setting and View</span>
    </div>
    <div>
      <div class="pl-8 pr-8">
        <v-row class="d-flex">
          <v-col sm="4" md="4">
            <v-checkbox
              label="Beach"
              color="primary"
              value="red"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col sm="4" md="4">
            <v-checkbox
              label="Waterfront"
              color="primary"
              value="s"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
      </div>
      <div class="pl-8 pr-8">
        <v-row class="d-flex">
          <v-col sm="4" md="4">
            <v-checkbox
              label="Lake View"
              color="primary"
              value="red"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col sm="4" md="4">
            <v-checkbox
              label="Mountain"
              color="primary"
              value="s"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
      </div>
      <div class="pl-8 pr-8">
        <v-row class="d-flex">
          <v-col sm="4" md="4"> </v-col>
          <v-col sm="4" md="6">
            <v-text-field
              dense
              outlined
              label="Backs to the mountains"
              class="text-feild"
            ></v-text-field>
          </v-col>
        </v-row>
      </div>
      <div class="pl-8 pr-8">
        <v-row class="d-flex">
          <v-col sm="4" md="4">
            <v-checkbox
              label="Golf course view"
              color="primary"
              value="red"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col sm="4" md="4">
            <v-checkbox
              label="River"
              color="primary"
              value="s"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
      </div>
      <div class="pl-8 pr-8">
        <v-row class="d-flex">
          <v-col sm="4" md="4">
            <v-checkbox
              label="BEachFront"
              color="primary"
              value="red"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col sm="4" md="4">
            <v-checkbox
              label="Lake"
              color="primary"
              value="s"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
      </div>
      <div class="pl-8 pr-8">
        <v-row class="d-flex">
          <v-col sm="4" md="4">
            <v-checkbox
              label="Near the ocean"
              color="primary"
              value="red"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col sm="4" md="4">
            <v-checkbox
              label="Beach view"
              color="primary"
              value="s"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
      </div>
      <div class="pl-8 pr-8">
        <v-row class="d-flex">
          <v-col sm="4" md="4">
            <v-checkbox
              label="Ocean View"
              color="primary"
              value="red"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col sm="4" md="4">
            <v-checkbox
              label="Village"
              color="primary"
              value="s"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
      </div>
      <div class="pl-8 pr-8">
        <v-row class="d-flex">
          <v-col sm="4" md="4">
            <v-checkbox
              label="Ski in/SKy out"
              color="primary"
              value="red"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col sm="4" md="4">
            <v-checkbox
              label="Resort"
              color="primary"
              value="s"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
      </div>
      <div class="pl-8 pr-8">
        <v-row class="d-flex">
          <v-col sm="4" md="4">
            <v-checkbox
              label="Rural"
              color="primary"
              value="red"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col sm="4" md="4">
            <v-checkbox
              label="Downtown"
              color="primary"
              value="s"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
      </div>
      <div class="pl-8 pr-8">
        <v-row class="d-flex">
          <v-col sm="4" md="4">
            <v-checkbox
              label="Town"
              color="primary"
              value="red"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col sm="4" md="4">
            <v-checkbox
              label="Golf course front"
              color="primary"
              value="s"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
      </div>
      <div class="pl-8 pr-8">
        <v-row class="d-flex">
          <v-col sm="4" md="4">
            <v-checkbox
              label="Oceanfront"
              color="primary"
              value="red"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col sm="4" md="4">
            <v-checkbox
              label="Mountain view"
              color="primary"
              value="s"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
      </div>
      <div class="pl-8 pr-8">
        <v-row class="d-flex">
          <v-col sm="4" md="4"> </v-col>
          <v-col sm="4" md="6">
            <v-text-field
              outlined
              label="Backs to the mountains"
              class="text-feild"
              dense
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>
      </div>
      <div class="pl-8 pr-8">
        <v-row class="d-flex">
          <v-col sm="4" md="4">
            <v-checkbox
              label="Water view"
              color="primary"
              value="red"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col sm="4" md="4"> </v-col>
        </v-row>
      </div>

      <div>
        <div class="heading ml-5 mt-5">Local attractions and activities</div>
        <div class="sub-heading ml-5 mt-3">{{ text }}</div>
        <div class="card-title ml-5 mt-3">Attractions</div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Bay/sound"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Duty free shps"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Healthy/Beauty spa"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Marina"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Museums"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Theme parks"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Water parks"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Winery parks"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Zoo"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4"> </v-col>
          </v-row>
        </div>
        <div class="card-title ml-5 mt-3">Leisure activities</div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Antiquing"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Bird watching"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Boating"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Ecotourism"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Gambling casinos"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Horseback riding"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Outlet shopping"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Paddle boating"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Shopping"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Sledding"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Water sports"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Whale watching"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Wildlife viewing"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4"> </v-col>
          </v-row>
        </div>
        <div class="ml-5 mt-3 card-title">Sports and adventure activities</div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Basketball court"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Cross country skiing"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Cycling"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Fishing"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>

        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Golf"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Hiking"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Hunting"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Ice skating"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Jet sking"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Keyaking"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Mountain hikinh"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Mountain climbing"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Parasailing"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Rafting"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Rock climbing"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Sailing"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Scuba diving"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Ski lift privilegers"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label=""
                color="Ski privelegers optional"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Sking"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Snowmobiling"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Snowboarding"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Surfing"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Swimming"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Watercsking"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Water tubing"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="pl-8 pr-8">
          <v-row class="d-flex">
            <v-col sm="4" md="4">
              <v-checkbox
                label="Wind-surfing"
                color="primary"
                value="red"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col sm="4" md="4">
              <v-checkbox
                label="Golf privelegers optional"
                color="primary"
                value="s"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      items: ["Foo", "Bar", "Fizz", "Buzz"],
    };
  },
};
</script>
<style scoped>
.heading {
  font-size: 16px;
  font-weight: bold;
}
.sub-heading {
  font-size: 14px;
}
.text-feild {
  width: 50%;
}
.card-title {
  font-size: 14px;
  font-weight: bold;
}
.date {
  font-size: 12px;
  color: grey;
}
.card-body-text {
  font-size: 12px;
  text-align: justify;
}
.select-dropdown {
  width: 30% !important;
}
</style>
