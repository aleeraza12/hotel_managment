<template>
    <div>
        <div>
            Rooms and spaces
        </div>
        <div>Let guests know about the property's rooms spaces</div>
         <v-expansion-panels>
    <v-expansion-panel
    >
      <v-expansion-panel-header>
   Property details
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div>
        <v-select class="mb-0" dense small :items="items" label="Coste" outlined></v-select>
         </div>
         <div>Living area</div>
         <div class="d-flex">
                <div class="d-flex">
        <v-select class="mb-0" dense small :items="items1" label="Coste" outlined></v-select>
         <v-text-field
        outlined
        label='2000'
        class="text-feild"
        ></v-text-field>
        </div>
        </div>
        <div>
            <v-checkbox label="Senior adults only community"></v-checkbox>
            <v-checkbox label="Long term renters Welcome"></v-checkbox>
            <v-checkbox label="Elevator"></v-checkbox>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
        <v-expansion-panel-header>
            Accessibilty
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <div>Is your property wheelchair accessible?</div>
                 <v-radio-group v-model="column" column dense>
        <v-radio label="Yes, it is accessible" value="radio-1"></v-radio>
        <v-radio label="No it is not accessible" value="radio-1"></v-radio>
      </v-radio-group>
        </v-expansion-panel-content>
    </v-expansion-panel>
     <v-expansion-panel>
        <v-expansion-panel-header>
            Sleeping arrangements
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <div>  
            <div>Sharing the bed types in each room will help guests plan their stay</div>
            <div class="d-flex">
                <div>Basement Queen</div>
                <div class="ml-10">Edit</div>
                </div>
                <div>
                    Queen bed
                </div>
                <v-chip>Queen(1)</v-chip>
                </div>
            <div class="d-flex">
                <div>Master Bedroom</div>
                <div class="ml-10">Edit</div>
                </div>
                <div>
                    Master bach and walk in closet
                </div>
                <v-chip>king(1)</v-chip>
                <div class="d-flex">
                <div>Queen 2</div>
                <div class="ml-10">Edit</div>
                </div>
                <div>
                    Queen bed
                </div>
                <v-chip>Queen(2)</v-chip>
                <div>
                <v-btn color="primary" rounded outlined>Add Bedroom</v-btn>
                </div>
                <div>+Add  additional Bedroom details</div>
                <div>
                <div>
                Common Areas    
                </div>    
                <div>
                    Shared spaces with beds or couches? Add them here
                </div>
                </div>   
                <div>
                     <v-btn color="primary" rounded outlined>Add common area</v-btn>
                </div> 
        </v-expansion-panel-content>
         </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-header>
                Bathrooms
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <div>
                    <div>
                        Adding bathroom details will help guests determine if your property will be a good fit for their stay 
                    </div>
                    <div class="d-flex">
                <div>Main level</div>
                <div class="ml-10">Edit</div>
                </div>
                <div>
                   Off of Kitchen
                </div>
                <div>
                    Toilet
                </div>
                 <div class="d-flex">
                <div>Master Bath</div>
                <div class="ml-10">Edit</div>
                 </div>
                <div>
                   Master Bedroom
                </div>
                <div>
                    Shower,Toilet
                </div>
                 <div class="d-flex">
                <div>Shared Bathroom</div>
                <div class="ml-10">Edit</div>
                 </div>
                <div>
                   Top of Stars
                </div>
                <div>
                    Tub,Combination tub/shower,Shower, Toilet
                </div>
                </div>
                <div>
                     <v-btn color="primary" rounded outlined>Add bathroom</v-btn>
                </div>
                <div>+Add additional bathroom details</div>
            </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
        <v-expansion-panel-header>
            Dining
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <div>
                <div class="d-flex">
                    <div>
                        What does your property have?
                        <v-checkbox label="Dining area"></v-checkbox>
                        <v-checkbox label="Dining room"></v-checkbox>
                        <v-checkbox label="Dining table"></v-checkbox>
                        <v-checkbox label="Childs highchair"></v-checkbox>
                    </div>
                    <div>
                        How many people does your dining space seat comfortably?
                         <v-select class="mb-0" dense small :items="items3" label="Coste" outlined></v-select>
                    </div>
                </div>
            </div>
            <div>
                What else should traveler know about your dining spaces?
                <v-textarea    outlined
            class="text-feild" label="Details"></v-textarea>
            </div>
        </v-expansion-panel-content>
    </v-expansion-panel>
         </v-expansion-panels>   
    </div>
</template>

<script>
  export default {
    components:{
      
    },
    data () {
      return {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          items: ['House', 'Appartment', 'Cottage'],
          items1: ['sq ft.', 'feet'],
          items3: ['1','2','3','4','6']
      }
    },
  }
</script>