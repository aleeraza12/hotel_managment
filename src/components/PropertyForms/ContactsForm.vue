<template>
    <div>
        <div class="heading mt-3"> Contact owner role</div>
        <div>
         <v-radio-group v-model="column" column dense>
            <v-radio label="I own and manage this property" value="radio-1"></v-radio>
            <v-radio label="I own this property but i dont't manage it" value="radio-1"></v-radio>
            <v-radio label="I am a property manager" value="radio-1"></v-radio>
          </v-radio-group>
        </div>
        <div class="mt-3">
            <div class="card-title">Contact selector</div>
        <div class="d-flex">
          <div>
              <v-select class="mb-0" dense small :items="items" label="Cost" outlined></v-select>
          </div>
      
        <v-btn class="ml-5 mt-2" color="primary" dense small rounded>Add new contact</v-btn>
        </div>
        </div>
        <div class="mt-5">
          <div class="card-title mb-5">Contact Information</div>
          <v-text-field
          
             dense
        outlined
        label='Name'
        class="text-feild mt-5"
        ></v-text-field>
        </div>
        <div >
            <div class="card-title">Email</div>
               <v-radio-group v-model="column" column dense>
        <v-radio label="User my member email abc@gmail.com" value="radio-1"></v-radio>
        <div class="card-title mt-5"> Go to my account</div>
        <v-radio class="mt-5" label="Use this unique email" value="radio-1"></v-radio>
      </v-radio-group>
        </div>

          <div>
            <div class="card-title">Phone</div>
               <v-radio-group v-model="column" column dense>
        <v-radio label="Use my primary member phone 11123123123233" value="radio-1"></v-radio>
        <v-radio label="Use this unique number" value="radio-1"></v-radio>
      </v-radio-group>
        </div>

         <div class="d-flex">
           <div>
        <v-select style="width:45%" class="mb-0" dense small :items="items" label="Cost" outlined></v-select>
        </div>
        <div style="width:100%">
         <v-text-field
         style="margin-left:-6rem"
        outlined
        dense
        label='213323124124124'
        class="text-feild"
        ></v-text-field>
        </div>
         </div>
        <div>
        <v-text-field
        outlined
        dense
        label='213323124124124'
        class="text-feild"
        ></v-text-field>
        </div>
       <div>
        <v-radio-group v-model="column" column dense>
        <v-radio label="Don't display this phone number on my listing" value="radio-1"></v-radio>
      </v-radio-group>
        </div>
        <div class="heading mt-5 mb-5 ">Text message alerts</div>
        <div class="card-body-text mt-5 mb-5">{{text}}</div>
        <div class="card-body-text mt-5 mb-5">Phone number status</div>
        <v-btn small dense color="success" class="mb-5">Verified</v-btn>
        <div class="d-flex">
           <div>
        <v-select style="width:45%" class="mb-0" dense small :items="items" label="Cost" outlined></v-select>
        </div>
        <div style="width:100%">
         <v-text-field
         style="margin-left:-6rem"
        outlined
        dense
        label='213323124124124'
        class="text-feild"
        ></v-text-field>
        </div>
         </div>
        <v-checkbox label="Send me a text message every time i get an inquiry or a reservation request"></v-checkbox>
        <div>
            <div class="card-title">Phone 2</div>
             <v-radio-group v-model="column" column dense>
        <v-radio label="Use my primary member phone 11123123123233" value="radio-1"></v-radio>
        <v-radio label="Use this unique number" value="radio-1"></v-radio>
        <v-radio label="Don't display this number on my listing" value="radio-1"></v-radio>
      </v-radio-group>
        </div>
        <div>
            <div class="card-title">Phone 3</div>
             <v-radio-group v-model="column" column dense>
        <v-radio label="Use this unique number" value="radio-1"></v-radio>
        <v-radio label="Don't display this number on my listing" value="radio-1"></v-radio>
      </v-radio-group>
        </div>
           <div>
            <div class="card-title">Fax information</div>
             <v-radio-group v-model="column" column dense>
        <v-radio label="Use this unique number" value="radio-1"></v-radio>
        <v-radio label="Don't display this number on my listing" value="radio-1"></v-radio>
      </v-radio-group>
        </div>
        <div>
            <div class="card-title">
                Language spoken
            </div>
            <div class="sub-heading">
                Please enter the language in which you can take rentel inquires by telephone or email
            </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="Swahili"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="Mandarin"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-14"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="Czesh"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="Finnish"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="Singhalese"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="French"
          color="Hungarian"
          value="s"
          hide-details
          class="ml-8"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="Croatian"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="Danish"
          color="Turkish"
          value="s"
          hide-details
          class="ml-12"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="Italian"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="Indonesian"
          color="Indonesian"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="Arabic"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="English"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="Sloverian"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="Portuguese"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-11"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="Dutch"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="Greek"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="Yugoslaw"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="Russian"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-9"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="Russian"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="Romanian"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-12"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="Spanish"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="Norwegian"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-12"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="Japanise"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
        <v-checkbox
          label="Swedish"
          color="red darken-3"
          value="s"
          hide-details
          class="ml-10"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3">
        <v-checkbox
          label="Korean"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
      </div>
        </div>
        <div class="mt-5">
          <v-text-field
          dense
        outlined
        label='Other language'
        class="text-feild"
        ></v-text-field>
        </div>
         
    </div>
</template>
<script>
  export default {
    components:{
      
    },
    data () {
      return {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          items: ['+1', '+2', '+3', '+4'],
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