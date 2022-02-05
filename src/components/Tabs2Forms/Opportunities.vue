<template>
  <div >
    <div class="mt-3 heading">
      Opportunities
    </div>
     <span class="mt-2 sub-heading">
      {{text}}
    </span>
    <v-card
      class="my-auto mt-5 pa-5"
      max-width="554"
      outlined
    >
      <div>
        <v-icon color="primary" dense small >
          mdi-basket
        </v-icon>
        <span class="card-title ml-1 mr-5">
          Add flexcation amenities
        </span>
        <v-chip label color="primary" fab dense small >New</v-chip>
      </div>
      <div class="date ml-5">
        Feb 2,2022 . 1 minute to do
      </div>
      <div class="card-body-text ma-3">
        {{text}}
      </div>
      <v-divider></v-divider>
      <div class="ml-2 mr-16 d-flex">
        <div>
          <v-checkbox
            label="Wireless Internet"
            color="primary"
            value="Wireless"
            hide-details
          ></v-checkbox>
        </div>
        <v-spacer></v-spacer>
        <div>
          <v-checkbox
            label="Computer Monitor"
            color="primary"
            value="s"
            hide-details
          ></v-checkbox>
        </div>
      </div>
      <div class=" mt-5 ml-10 select-dropdown">
        <span class="card-title">Cost</span>
        <v-select class="mb-0" dense small :items="items" label="Coste" outlined></v-select>
        <span class="card-title">Speed</span>
        <v-select class="mb-0" dense small  :items="items" label="Speed" outlined></v-select>
      </div>
      <div style="margin-top:-2rem" class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>  
      <div class="mt-4 ml-5">
        <v-btn rounded outlined dense small color="primary">
          Save
        </v-btn>
        <span class="ml-5" style="color:blue">I don't have any of these</span>
      </div>
    </v-card>
      <!-- 2nd card --> 
    <v-card
      class="my-auto mt-5 pa-5"
      max-width="554"
      outlined
    >
      <div>
        <v-icon color="primary" dense small >
         mdi-wifi
        </v-icon>
        <span class="card-title ml-1 mr-5">
          Add essentials
        </span>
      </div>
      <div class="date ml-5">
        Feb 2,2022 . 1 minute to do
      </div>
      <div class="card-body-text ma-3">
        {{text}}
      </div>
      <v-divider></v-divider>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>  
      <div class="mt-4 ml-5">
        <v-btn rounded outlined dense small color="primary">
          Save
        </v-btn>
      </div>
    </v-card>
      <!-- 3rd Card -->
    <v-card
      class="my-auto mt-5 pa-5"
      max-width="554"
      outlined
    >
      <div>
        <v-icon color="primary" dense small >
          mdi-cog
        </v-icon>
        <span class="card-title ml-1 mr-5">
         Add kitchen and dining amenities
        </span>
      </div>
      <div class="date ml-5">
        Feb 2,2022 . 1 minute to do
      </div>
      <div class="card-body-text ma-3">
        {{text}}
      </div>
      <v-divider></v-divider>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="red darken-3"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="mt-4 ml-5">
        <v-btn rounded outlined dense small color="primary">
          Save
        </v-btn>
      </div>
    </v-card>
     <!-- 4th card -->
    <v-card
      class="my-auto mt-5 pa-5"
      max-width="554"
      outlined
    >
      <div>
        <v-icon color="primary" dense small >
         mdi-account
        </v-icon>
        <span class="card-title ml-1 mr-5">
          Add group spaces
        </span>
      </div>
      <div class="date ml-5">
        Feb 2,2022 . 1 minute to do
      </div>
      <div class="card-body-text ma-3">
        {{text}}
      </div>
      <v-divider></v-divider>
      <div  class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
      </div>
      <div  class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
      </div>
      <div  class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
      </div>
      <div  class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
      </div>
      <div  class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
      </div>
      <div  class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
      </div>
      <div  class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
      </div>
      <div class="mt-2 ml-10" style="width:60%">
        <v-select class="mb-0" dense small :items="items" label="Coste" outlined></v-select>
      </div>
      <div class="ml-5">
        <v-btn rounded outlined dense small color="primary">
          Save
        </v-btn>
        <span class="ml-5" style="color:grey">I don't have any of these</span>
      </div>
    </v-card>
      <!-- 5th card -->
    <v-card
      class="my-auto mt-5 pa-5"
      max-width="554"
      outlined
    >
      <div>
        <v-icon color="primary" dense small >
         mdi-car
        </v-icon>
        <span class="card-title ml-1 mr-5">
          Add Parking <details></details>
        </span>
      </div>
      <div class="date ml-5">
        Feb 2,2022 . 1 minute to do
      </div>
      <div class="card-body-text ma-3">
        {{text}}
      </div>
      <v-divider></v-divider>
      <div  class="d-flex ml-3 ">
        <v-checkbox
          label="parking"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
      </div>
      <div class="mt-5 ml-2">
         <v-textarea
         rows="1"
          outlined
          name="input-7-4"
          label="Description"
          value=""
        ></v-textarea>
      </div>
      <div style="margin-top:-2rem" class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
      </div>
      <div  class="d-flex ml-3 ">
        <v-checkbox
          label="red"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
      </div>
      <div class="mt-5 ml-5">
        <v-btn rounded outlined dense small color="primary">
          Save
        </v-btn>
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
<style scoped>
.heading {
  font-size:16px;
  font-weight: bold;
}
.sub-heading {
  font-size:14px;
}
.text-feild{
  width: 50%;
}
.card-title{
  font-size:14px;
  font-weight: bold;
}
.date {
  font-size:12px;
  color: grey;
}
.card-body-text {
  font-size:12px;
  text-align: justify;
}
.select-dropdown {
  width: 30% !important;
}
</style>