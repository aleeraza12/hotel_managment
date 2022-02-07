<template>
  <div class="pa-10">
    <h1>
      Enhanced cleaning practices
    </h1>
    <h5>
      Guests would like to know about your cleaning practices. Share some details by answering a few of our questions.
    </h5>

    <h5 class="mt-3">Are any enhanced cleaning measures currently being implemented at this property?</h5>
    <div>
      <v-radio-group v-model="column" column dense>
        <v-radio label="Yes" value="radio-1"></v-radio>
        <v-radio label="No" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
    <h5 class="mt-3">Is this property cleaned with disinfectant?</h5>
    <div>
      <v-radio-group v-model="column" column dense>
        <v-radio label="Yes" value="radio-1"></v-radio>
        <v-radio label="No" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
    <h5 class="mt-3">Are high-touch surfaces cleaned with disinfectant?</h5>
    <div>
      <v-radio-group v-model="column" column dense>
        <v-radio label="Yes" value="radio-1"></v-radio>
        <v-radio label="No" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
    <h5 class="mt-3">Are all towels and bedding washed in water that's at least 60 C/140 F between stays?</h5>
    <div>
      <v-radio-group v-model="column" column dense>
        <v-radio label="Yes" value="radio-1"></v-radio>
        <v-radio label="No" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
      <h5 class="mt-3">Do you follow standard cleaning practices recommended by an industry association?</h5>
    <div>
      <v-radio-group v-model="column" column dense>
        <v-radio label="Yes" value="radio-1"></v-radio>
        <v-radio label="No" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
    <h2>Guest safety practices</h2>
     <h5 class="mt-3">Are any enhanced guest safety practices currently being implemented at this property?</h5>
    <div>
      <v-radio-group v-model="column" column dense>
        <v-radio label="Yes" value="radio-1"></v-radio>
        <v-radio label="No" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
     <h5 class="mt-3">Are guests able to check in without any person-to-person contact?</h5>
    <div>
      <v-radio-group v-model="column" column dense>
        <v-radio label="Yes" value="radio-1"></v-radio>
        <v-radio label="No" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
     <h5 class="mt-3">Are guests able to check out without any person-to-person contact?</h5>
    <div>
      <v-radio-group v-model="column" column dense>
        <v-radio label="Yes" value="radio-1"></v-radio>
        <v-radio label="No" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
    
     <h5 class="mt-3">Are you making this property unavailable for a certain amount of time between guests?</h5>
    <div>
      <v-radio-group v-model="column" column dense>
        <v-radio label="Yes" value="radio-1"></v-radio>
        <v-radio label="No" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
    <v-divider></v-divider>
    <h1>
      Home safety features
    </h1>
    <div>
      <v-checkbox></v-checkbox>
    </div>
    <div>
      <v-checkbox></v-checkbox>
    </div>
    <div>
      <v-checkbox></v-checkbox>
    </div>
      <div class="">
               <v-text-field
               outlined
            label="Amount per night"
          
            class="text-feild"
          ></v-text-field>
      </div>
    <div>
      <v-checkbox></v-checkbox>
    </div>
      <div class="">
               <v-text-field
               outlined
            label="Amount per night"
          
            class="text-feild"
          ></v-text-field>
      </div>
       <div>
      <v-checkbox></v-checkbox>
    </div>
       <div class="">
               <v-text-field
               outlined
            label="Amount per night"
          
            class="text-feild"
          ></v-text-field>
      </div>
      <div>
      <v-checkbox></v-checkbox>
    </div>
       <div class="">
               <v-text-field
               outlined
            label="Amount per night"
          
            class="text-feild"
          ></v-text-field>
      </div>
        <div>
      <v-checkbox></v-checkbox>
    </div>
    <div>Emergency exit route
     <v-textarea
          outlined
          name="input-7-4"
          label="Outlined textarea"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
         </div>
         <div>Emergency phone number
          <v-text-field
               outlined
            label="911"
          
            class="text-feild"
          ></v-text-field>
           <v-text-field
               outlined
            label="911"
          
            class="text-feild"
          ></v-text-field>
           <v-text-field
               outlined
            label="911"
          
            class="text-feild"
          ></v-text-field>
         </div>
  </div>
</template>