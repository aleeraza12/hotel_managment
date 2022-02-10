<template>
  <div class="pa-10">
    <div class="heading">
      Enhanced cleaning practices
    </div>
    <div class="sub-heading">
      Guests would like to know about your cleaning practices. Share some details by answering a few of our questions.
    </div>

    <div class="mt-3 card-title">Are any enhanced cleaning measures currently being implemented at this property?</div>
    <div>
      <v-radio-group v-model="column" column dense>
        <v-radio label="Yes" value="radio-1"></v-radio>
        <v-radio label="No" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
    <div class="mt-3 card-title">Is this property cleaned with disinfectant?</div>
    <div>
      <v-radio-group v-model="column" column dense>
        <v-radio label="Yes" value="radio-1"></v-radio>
        <v-radio label="No" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
    <div class="mt-3 card-title">Are high-touch surfaces cleaned with disinfectant?</div>
    <div>
      <v-radio-group v-model="column" column dense>
        <v-radio label="Yes" value="radio-1"></v-radio>
        <v-radio label="No" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
    <div class="mt-3 card-title">Are all towels and bedding washed in water that's at least 60 C/140 F between stays?</div>
    <div>
      <v-radio-group v-model="column" column dense>
        <v-radio label="Yes" value="radio-1"></v-radio>
        <v-radio label="No" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
      <div class="mt-3 card-title">Do you follow standard cleaning practices recommended by an industry association?</div>
    <div>
      <v-radio-group v-model="column" column dense>
        <v-radio label="Yes" value="radio-1"></v-radio>
        <v-radio label="No" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
    <div class="heading">Guest safety practices</div>
     <div class="mt-3 card-title">Are any enhanced guest safety practices currently being implemented at this property?</div>
    <div>
      <v-radio-group v-model="column" column dense>
        <v-radio label="Yes" value="radio-1"></v-radio>
        <v-radio label="No" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
     <div class="mt-3 card-title">Are guests able to check in without any person-to-person contact?</div>
    <div>
      <v-radio-group v-model="column" column dense>
        <v-radio label="Yes" value="radio-1"></v-radio>
        <v-radio label="No" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
     <div class="mt-3 card-title">Are guests able to check out without any person-to-person contact?</div>
    <div>
      <v-radio-group v-model="column" column dense>
        <v-radio label="Yes" value="radio-1"></v-radio>
        <v-radio label="No" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
    
     <div class="mt-3 card-title">Are you making this property unavailable for a certain amount of time between guests?</div>
    <div>
      <v-radio-group v-model="column" column dense>
        <v-radio label="Yes" value="radio-1"></v-radio>
        <v-radio label="No" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
    <v-divider></v-divider>
    <div class="mt-4 heading">
      Home safety features
    </div>
    <div>
      <v-checkbox
            label="abc"
            color="primary"
            value="abc"
            hide-details
          ></v-checkbox>
    </div>
    <div>
      <v-checkbox
            label="abc"
            color="primary"
            value="abc"
            hide-details
          ></v-checkbox>
    </div>
    <div>
      <v-checkbox
            label="abc"
            color="primary"
            value="abc"
            hide-details
          ></v-checkbox>
    </div>
      <div class="">
               <v-text-field
               outlined
               dense
            label="Amount per night"
          
            class="text-feild mt-2"
          ></v-text-field>
      </div>
    <div>
      <v-checkbox
            label="abc"
            color="primary"
            value="abc"
            hide-details
          ></v-checkbox>
    </div>
      <div class="">
               <v-text-field
               outlined
            label="Amount per night"
              dense
            class="text-feild mt-2"
          ></v-text-field>
      </div>
       <div>
      <v-checkbox
            label="abc"
            color="primary"
            value="abc"
            hide-details
          ></v-checkbox>
    </div>
       <div class="">
               <v-text-field
               dense
               outlined
            label="Amount per night"
          
            class="text-feild mt-2"
          ></v-text-field>
      </div>
      <div>
      <v-checkbox
            label="abc"
            color="primary"
            value="abc"
            hide-details
          ></v-checkbox>
    </div>
       <div class="">
               <v-text-field
               outlined
            label="Amount per night"
          dense
            class="text-feild mt-2"
          ></v-text-field>
      </div>
        <div>
      <v-checkbox
            label="abc"
            color="primary"
            value="abc"
            hide-details
          ></v-checkbox>
    </div>
    <div class="heading mt-5 mb-2">Emergency exit route
     <v-textarea class="mt-5 sub-heading"
          outlined
          name="input-7-4"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
         </div>
         <div class="card-title">Emergency phone number
          <v-text-field
               outlined
            label="911"
             dense
            class="text-feild mt-2"
          ></v-text-field>
           <v-text-field
               outlined
            label="911"
          dense
            class="text-feild"
          ></v-text-field>
           <v-text-field
               outlined
            label="911"
          dense
            class="text-feild"
          ></v-text-field>
         </div>
  </div>
</template>
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
