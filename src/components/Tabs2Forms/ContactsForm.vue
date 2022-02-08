<template>
    <div>
        <div> Contact owner role</div>
        <div>
              <v-radio-group v-model="column" column dense>
        <v-radio label="I own and manage this property" value="radio-1"></v-radio>
        <v-radio label="I own this property but i dont't manage it" value="radio-1"></v-radio>
        <v-radio label="I am a property manager" value="radio-1"></v-radio>
      </v-radio-group>
        </div>
        <div>
            <div>Contact selector</div>
        <div >
        <v-select class="mb-0" dense small :items="items" label="Coste" outlined></v-select>
        <v-btn color="primary" rounded>Add new contact</v-btn>
        </div>
        </div>
        <div>
             <v-text-field
        outlined
        label='Name'
        class="text-feild"
        ></v-text-field>
        </div>
        <div>
            <div>Email</div>
               <v-radio-group v-model="column" column dense>
        <v-radio label="User my member email abc@gmail.com" value="radio-1"></v-radio>
        <div>Go to my account</div>
        <v-radio label="Use this unique email" value="radio-1"></v-radio>
      </v-radio-group>
        </div>

          <div>
            <div>Phone</div>
               <v-radio-group v-model="column" column dense>
        <v-radio label="Use my primary member phone 11123123123233" value="radio-1"></v-radio>
        <v-radio label="Use this unique number" value="radio-1"></v-radio>
      </v-radio-group>
        </div>

         <div class="d-flex">
        <v-select class="mb-0" dense small :items="items" label="Coste" outlined></v-select>
         <v-text-field
        outlined
        label='213323124124124'
        class="text-feild"
        ></v-text-field>
        </div>
        <div>
             <v-text-field
        outlined
        label='213323124124124'
        class="text-feild"
        ></v-text-field>
        </div>
       <div>
        <v-radio-group v-model="column" column dense>
        <v-radio label="Don't display this phone number on my listing" value="radio-1"></v-radio>
      </v-radio-group>
        </div>
        <div>Text message alerts</div>
        <div>{{text}}</div>
        <div>Phone number status</div>
        <v-btn color="green">Verified</v-btn>
          <div class="d-flex">
        <v-select class="mb-0" dense small :items="items" label="Coste" outlined></v-select>
         <v-text-field
        outlined
        label='213323124124124'
        class="text-feild"
        ></v-text-field>
        </div>
        <v-checkbox label="Send me a text message every time i get an inquiry or a reservation request"></v-checkbox>
        <div>
            <div>Phone 2</div>
             <v-radio-group v-model="column" column dense>
        <v-radio label="Use my primary member phone 11123123123233" value="radio-1"></v-radio>
        <v-radio label="Use this unique number" value="radio-1"></v-radio>
        <v-radio label="Don't display this number on my listing" value="radio-1"></v-radio>
      </v-radio-group>
        </div>
        <div>
            <div>Phone 3</div>
             <v-radio-group v-model="column" column dense>
        <v-radio label="Use this unique number" value="radio-1"></v-radio>
        <v-radio label="Don't display this number on my listing" value="radio-1"></v-radio>
      </v-radio-group>
        </div>
           <div>
            <div>Fax information</div>
             <v-radio-group v-model="column" column dense>
        <v-radio label="Use this unique number" value="radio-1"></v-radio>
        <v-radio label="Don't display this number on my listing" value="radio-1"></v-radio>
      </v-radio-group>
        </div>
        <div>
            <div>
                Language spoken
            </div>
            <div>
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
          class="ml-16"
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
          class="ml-16"
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
          class="ml-16"
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
          class="ml-16"
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
          class="ml-16"
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
          class="ml-16"
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
          class="ml-16"
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
          class="ml-16"
        ></v-checkbox>
      </div>
      <div class="d-flex ml-3 ">
        <v-checkbox
          label="Korean"
          color="primary"
          value="red"
          hide-details    
        ></v-checkbox>
      </div>
        </div>
         <v-text-field
        outlined
        label='Other language'
        class="text-feild"
        ></v-text-field>
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