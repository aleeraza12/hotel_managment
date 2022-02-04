<template>
<div>
    <div>
     <v-tabs
      v-model="tabs"
      color="black"
  >
    <v-tabs-slider color="black"></v-tabs-slider>
    <v-tab>
      Base rate and discounts
    </v-tab>
    <v-tab >
      Booking requirements
    </v-tab>
    <v-tab >
      Fees
    </v-tab>
    <v-tab >
      Taxes
    </v-tab>
    <v-tab >
      Damage Protection
    </v-tab>
    <v-tab >
      Payment terms
    </v-tab>
   </v-tabs>
</div>
    <div>
    <v-tabs-items v-model="tabs">
          <v-tab-item>
        <div>
            <div class="mt-5 heading">
                Base rate
            </div>
            <span class="mt-2 sub-heading">
                Define a base rate so you are covered across your whole calender year
            </span>
             <div class="mt-5">
               <v-text-field
               outlined
            label="Amount per night"
          
            class="text-feild"
          ></v-text-field>
            </div>
            <div class="d-flex">
              <div>
                 <div class="heading"> Customize by night of week </div>
              </div>
             
              <div class="swtich-div">
                 <v-switch
                        v-model="switch1"
                        inset
                 ></v-switch>
              </div>
            </div>
        </div>
    </v-tab-item>
      <v-tab-item
      >
    <v-card flat>
    <v-card-text>
        <div>
            <div class="mt-5 heading">Minimum night stay</div>
            <div class="mt-4 sub-heading"> Define base minimum stay duration so you are covered across your whole calender</div>
            <div class="mt-5">
               <v-text-field
                 class="text-feild"
           outlined
            label="Minimum night stay"
          ></v-text-field>
            </div>
<div>
            <v-btn
      rounded
      color="primary"
      dark
      width="100"
    >
      Save
    </v-btn>
      <v-btn
      class="ml-2"
      rounded
      outlined
      color="primary"
      dark
    >
      Cancel
    </v-btn>
  </div>

        </div>
    </v-card-text>
    </v-card>
    </v-tab-item>
    <v-tab-item>
        <div>
            <div class="mt-2 heading">
                Standard fees
            </div>
            <div class="mt-2 sub-heading">
                Fees that apply to all dates on your calender
            </div>

            <div>
                <v-row>
                    <v-col class="col-md-2 mt-6">
                        <v-icon size="20">
                            mdi-account-plus
                        </v-icon>
                        <span class="ml-3 sub-heading">Extra Guests</span>
                    </v-col>
                    <v-col class="col-md-3 mt-3">
                        <v-select
                        :items="items"
                        label="Fee Type"
                        outlined
                        ></v-select>
                    </v-col>
                    <v-col class="col-md-2 mt-3">
                             <div>
                                <v-text-field
                                 outlined
                                label="$ Amount"
                                >
                            </v-text-field>
                             </div>
                    </v-col>
                    <v-col class="col-md-2 mt-3">
                        <div>
                                <v-text-field
                                 outlined
                                label="For more than"
                                prepend-inner-icon="mdi-account-multiple"
                                >
                            </v-text-field>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="col-md-2 mt-3">
                        <v-icon size="20">
                         mdi-broom
                        </v-icon>
                        <span class="ml-3 sub-heading">Cleaning</span>
                    </v-col>
                    <v-col class="col-md-3">
                        <v-select
                        :items="items"
                        label="Fee Type"
                        outlined
                        ></v-select>
                    </v-col>
                    <v-col class="col-md-2">
                             <div>
                                <v-text-field
                                 outlined
                                label="$ Amount"
                                >
                            </v-text-field>
                             </div>
                    </v-col>
                    
                </v-row>
                <v-row>
                    <v-col class="col-md-2 mt-3">
                        <v-icon size="20">
                         mdi-cat
                        </v-icon>
                        <span class="ml-3 sub-heading">Pets</span>
                    </v-col>
                    <v-col class="col-md-3">
                        <v-select
                        :items="items"
                        label="Fee Type"
                        outlined
                        ></v-select>
                    </v-col>
                    <v-col class="col-md-2">
                             <div>
                                <v-text-field
                                 outlined
                                label="$ Amount"
                                >
                            </v-text-field>
                             </div>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-tab-item>
    <v-tab-item>
        <div>
            <div class="mt-6 heading">
                Tax collection
            </div>
            <div class="mt-5 sub-heading">
               <span>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. <br>
                 standard dummy text ever since the 1500s.<br> 
                 view Lorem Ipsum.
               </span>
            </div>
        </div>
    </v-tab-item>
    <v-tab-item>
        <div>
            <div class="mt-5 heading">
                How do you protect tour property?
            </div>
            <div class="mt-2 sub-heading">
                Protect your property from any potential accidents
            </div>
            <div class="ml-2">
                 <v-radio-group
      v-model="column"
      column
    >
      <v-radio
        label="No damage protection"
        value="radio-1"
      ></v-radio>
      <v-radio
        label="Property damage protection (Recommended)"
        value="radio-2"
      ></v-radio>
    </v-radio-group>
            </div>
            <div class="ml-2 mt-1 sub-heading">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley.
            </div>
            <div class="mt-2">
            <v-btn
      
      color="primary"
      dark
      width="100"
    >
      Save 
    </v-btn>  
            </div>
        </div>
    </v-tab-item>
    <v-tab-item>
         <div>
            <div class="mt-5 heading">
                Payment Terms
            </div>
            <span class="mt-2 sub-heading">
                how and when do you want your guests to pay?
            </span>
            <div class="mt-5 heading">
               select number of payments 
            </div>
            <div class="d-flex">
              <v-btn outlined color="primary">1</v-btn>  <v-btn outlined color="primary" class="ml-3">2</v-btn>  <v-btn class="ml-3" outlined color="primary">3</v-btn>
            </div>
            <div class="mt-5 heading">
               First Payment
            </div>
             <div class="mt-5 sub-heading payment-dropdown">
                 <v-select
                        :items="items"
                        label="First Payment"
                        outlined
                        ></v-select>
            </div>
           
        </div>
    </v-tab-item>
    </v-tabs-items>
    </div> 
   </div>
</template>
<script>
  export default {
    data () {
      return {
        tabs: null,
        switch1: "",
        column: "",
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
.swtich-div {
  margin-left: 21rem;
    margin-top: -1.2rem;
}
.payment-dropdown{
  width: 30% !important;
}
</style>