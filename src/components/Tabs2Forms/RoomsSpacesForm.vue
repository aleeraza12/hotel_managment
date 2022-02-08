<template>
    <div>
        <div class="heading mt-2 mb-5">
            Rooms and spaces
        </div>
        <div class="sub-heading mt-2 mb-5">Let guests know about the property's rooms spaces</div>
         <v-expansion-panels>
    <v-expansion-panel
    >
      <v-expansion-panel-header>
       <div class="card-title"> Property details </div>
      
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div>
        <v-select class="mb-0 select-dropdown" dense small :items="items" label="Coste" outlined></v-select>
         </div>
         <div class="card-title">Living area</div>
             <div class="d-flex">
           <div >
        <v-select style="width:50%" class="mb-0" dense small :items="items" label="Coste" outlined></v-select>
        </div>
        <div style="width:100%">
         <v-text-field
         style="margin-left:-5rem"
        outlined
        dense
        label='213323124124124'
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
           <div class="card-title">Accessibilty</div> 
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <div class="sub-heading">Is your property wheelchair accessible?</div>
                 <v-radio-group v-model="column" column dense>
        <v-radio label="Yes, it is accessible" value="radio-1"></v-radio>
        <v-radio label="No it is not accessible" value="radio-1"></v-radio>
      </v-radio-group>
        </v-expansion-panel-content>
    </v-expansion-panel>
     <v-expansion-panel>
        <v-expansion-panel-header>
          <div class="card-title">  Sleeping arrangements</div> 
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <div>  
            <div class="sub-heading">Sharing the bed types in each room will help guests plan their stay</div>
            <div class="d-flex">
                <div class="card-title mb-3 mt-3">Basement Queen</div>
                <div style="margin-left:12rem;color:blue" class="mt-3" >Edit</div>
                </div>
                <div class="sub-heading">
                    Queen bed
                </div>
                <v-chip class="mt-2 mb-2" dense small>Queen(1)</v-chip>
                </div>
            <div class="d-flex">
                <div class="card-title mt-3 mb-3">Master Bedroom</div>
                <div style="margin-left:12rem;color:blue" class="mt-3" >Edit</div>
                </div>
                <div class="sub-heading">
                    Master bach and walk in closet
                </div>
                <v-chip class="mt-2 mb-2" small dense>king(1)</v-chip>
                <div class="d-flex">
                <div class="card-title mt-3 mb-3">Queen 2</div>
                <div style="margin-left:15rem;color:blue" class="mb-2 mt-2">Edit</div>
                </div>
                <div class="sub-heading">
                    Queen bed
                </div>
                <v-chip small dense class="mt-2 mb-2">Queen(2)</v-chip>
                <div class="align-start justify-start d-flex">
                <v-btn class="mt-5 mb-5" color="primary" small dense rounded outlined>Add Bedroom</v-btn>
                </div> 
                <div class="mt-5 mb-2" style="color:blue;font-size:13px">+Add  additional Bedroom details</div>
                <div>
                <div class="card-title mt-5 mb-2">
                Common Areas    
                </div>    
                <div class="sub-heading">
                    Shared spaces with beds or couches? Add them here
                </div>
                </div>   
                <div>
                     <v-btn class="mt-5 mb-5" color="primary" small dense  rounded outlined>Add common area</v-btn>
                </div> 
        </v-expansion-panel-content>
         </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-header>
             <div class="card-title"> Bathrooms </div>   
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <div>
                    <div class="sub-heading">
                        Adding bathroom details will help guests determine if your property will be a good fit for their stay 
                    </div>
                    <div class="d-flex">
                <div class="mt-5 mb-2 card-title">Main level</div>
                <div style="margin-left:12rem;color:blue" class="mt-5">Edit</div>
                </div>
                <div class="sub-heading mb-5 mt-5">
                   Off of Kitchen
                </div>
                <div class="sub-heading mb-5 mt-5" >
                    Toilet
                </div>
                 <div class="d-flex">
                <div class="mt-5 mb-2 card-title">Master Bath</div>
                <div  style="margin-left:12rem;color:blue" class="mt-5">Edit</div>
                 </div>
                <div class="sub-heading mb-5 mt-5">
                   Master Bedroom
                </div>
                <div class="sub-heading mb-5 mt-5">
                    Shower,Toilet
                </div>
                 <div class="d-flex">
                <div class="card-title mb-5 mt-5">Shared Bathroom</div>
                <div style="margin-left:12rem;color:blue" class="mt-5">Edit</div>
                 </div>
                <div class="sub-heading mb-5 mt-5">
                   Top of Stars
                </div>
                <div class="sub-heading mb-5 mt-5">
                    Tub,Combination tub/shower,Shower, Toilet
                </div>
                </div>
                <div>
                     <v-btn class="mb-5 mt-5" color="primary" small dense rounded outlined>Add bathroom</v-btn>
                </div>
                <div  class="mt-5 mb-2" style="color:blue;font-size:13px">+Add additional bathroom details</div>
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