<template>
  <div >
    <h1 class="mt-3">
      Opportunities
    </h1>
    <h5 class="mt-1">
      {{text}}
    </h5>
<v-card
class="my-auto"
    max-width="554"
    outlined>
    <div>
      <v-icon>
        mdi-basket
      </v-icon>
      <span>
        Add flexcation amenities
      </span>
      <v-chip>New</v-chip>
    </div>
    <div>
      Feb 2,2022 . 1 minute to do
    </div>
    <div class="mt-2">
      {{text}}
    </div>
    <v-divider></v-divider>
    <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="Wireless Internet"
            color="red"
            value="Wireless"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="Computer Monitor"
            color="red darken-3"
            value="s"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </div>
    <div class="pa-12">
      <v-select :items="items" label="Coste" outlined></v-select>
      <v-select :items="items" label="Speed" outlined></v-select>
    </div>
    <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
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
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
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
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
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
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
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
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
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
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
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
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
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
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
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
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-btn outlined rounded color="primary">
          Save
      </v-btn><span>I don't have any of these</span>
    </div>
</v-card>
<!-- 2nd card -->
<v-card
class="my-auto mt-5"
    max-width="554"
    outlined>
    <div>
      <v-icon>
        mdi-wifi
      </v-icon>
      <span>Add essentials</span>
       <div>
      Feb 2,2022 . 1 minute to do
    </div>
    <div>{{text}}</div>
    <v-divider></v-divider>
     <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
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
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
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
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
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
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
            value="s"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </div> <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
            value="s"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </div> <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
            value="s"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </div> <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
            value="s"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </div> <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
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
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
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
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
            value="s"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </div>
      <div>
      <v-btn outlined rounded color="primary">
          Save
      </v-btn>
    </div>
    </div>
</v-card>

<!-- 3rd Card -->
<v-card
class="my-auto mt-5"
    max-width="554"
    outlined>
    <div>
      <v-icon>
        mdi-cog
      </v-icon>
      <span>Add kitchen and dining amenities</span>
       <div>
      Feb 2,2022 . 1 minute to do
    </div>
    <div>{{text}}</div>
    <v-divider></v-divider>
     <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
            value="s"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </div> <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
            value="s"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </div> <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
            value="s"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </div> <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
            value="s"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </div> <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
            value="s"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </div> <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          <v-checkbox
            label="red darken-3"
            color="red darken-3"
            value="s"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </div>
      <div>
      <v-btn outlined rounded >
          Save
      </v-btn>
    </div>
    </div>
</v-card>
<!-- 4th card -->
<v-card
class="my-auto mt-5"
    max-width="554"
    outlined>
    <div>
      <v-icon>
        mdi-
      </v-icon>
      <span>Add group spaces</span>
       <div>
      Feb 2,2022 . 1 minute to do
    </div>
    <div>{{text}}</div>
    <v-divider></v-divider>
     <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
         
        </v-col>
      </v-row>
    </div> <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
         
        </v-col>
      </v-row>
    </div> <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
         
        </v-col>
      </v-row>
    </div> <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
          
        </v-col>
      </v-row>
    </div> <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
         
        </v-col>
      </v-row>
    </div> <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
         
        </v-col>
      </v-row>
    </div>
    <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
         
        </v-col>
      </v-row>
    </div>
    <div>
       <v-select
          :items="items"
          label="Fee Type"
          outlined
        ></v-select>
    </div>
      <div>
      <v-btn outlined rounded >
          Save
      </v-btn><span>I don't have any of these</span>
    </div>
    </div>
</v-card>

<!-- 5th card -->

<v-card
class="my-auto mt-5"
    max-width="554"
    outlined>
    <div>
      <v-icon>
        mdi-
      </v-icon>
      <span>Add parking details</span>
       <div>
      Feb 2,2022 . 1 minute to do
    </div>
    <div>{{text}}</div>
    <v-divider></v-divider>
     <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
         
        </v-col>
      </v-row>
    </div> 
     <div>
       <v-select
          :items="items"
          label="Fee Type"
          outlined
        ></v-select>
    </div>
      <div>
      <v-btn outlined rounded >
          Save
      </v-btn>
    </div>
    </div>
    <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
         
        </v-col>
      </v-row>
    </div> 
    <div class="pl-8 pr-8">
      <v-row class="d-flex">
        <v-col sm="4" md="4">
          <v-checkbox
            label="red"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col sm="4" md="4">
         
        </v-col>
      </v-row>
    </div> 
</v-card>

  </div>
</template>
<script>
  export default {
    components:{
      
    },
    data () {
      return {
        tabs:null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      }
    },
  }
</script>