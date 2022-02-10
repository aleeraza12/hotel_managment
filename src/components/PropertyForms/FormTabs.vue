<template>
<div>
    <div>
     <v-tabs
      v-model="tabs"
       fixed-tabs
       style="border:1px solid #d6d6d6;height:28px;"
       active-class="active"
  >
    <!--<v-tabs-slider color="white"></v-tabs-slider>-->
    <v-tab class="single-tab">
      Opportunities
    </v-tab>
    <v-tab class="single-tab">
      Amenities
    </v-tab>
    <v-tab class="single-tab">
      Health and Safety
    </v-tab>
    <v-tab class="single-tab">
      Location
    </v-tab>
    <v-tab class="single-tab">
      Description
    </v-tab>
    <v-tab class="single-tab">
      Contacts
    </v-tab>
     <v-tab class="single-tab">
      Photos
    </v-tab>
     <v-tab class="single-tab">
      Rooms and spaces
    </v-tab>
     <v-tab class="single-tab">
      Rates
    </v-tab>
     <v-tab class="single-tab">
      Video
    </v-tab>
    <v-tab class="single-tab">
      Virtual Tours
    </v-tab>
   </v-tabs>
   </div>
   <v-tabs-items v-model="tabs" class="pa-5" style="border:1px solid #d6d6d6">
          <v-tab-item>
            <OpportunitiesForm></OpportunitiesForm>
          </v-tab-item>
          <v-tab-item>
            <amenities-form></amenities-form>
          </v-tab-item>
          
           <v-tab-item>
            <health-safety-form></health-safety-form>
          </v-tab-item>
          
           <v-tab-item>
            <location-form></location-form>
          </v-tab-item>
          
           <v-tab-item>
            <description-form></description-form>
          </v-tab-item>

          <v-tab-item>
            <contact-form></contact-form>
          </v-tab-item>
          
          <v-tab-item>
            <photos-form></photos-form>
          </v-tab-item>
          
           <v-tab-item>
            <rooms-spaces-form></rooms-spaces-form>
          </v-tab-item>
          
          <v-tab-item>
            <rates-form></rates-form>
          </v-tab-item>
          
          <v-tab-item>
            <video-form></video-form>
          </v-tab-item>
          <v-tab-item>
            <virtual-tour-form></virtual-tour-form>
          </v-tab-item>
          
   </v-tabs-items>
</div>
   </template>
   <script>
   import OpportunitiesForm from '../PropertyForms/Opportunities.vue'
   import AmenitiesForm from '../PropertyForms/AmenitiesForm.vue'
   import ContactForm from '../PropertyForms/ContactsForm.vue'
   import DescriptionForm from '../PropertyForms/DescriptionForm.vue'
   import HealthSafetyForm from '../PropertyForms/HealthSafetyForm.vue'
   import LocationForm from '../PropertyForms/LocationForm.vue'
   import PhotosForm from '../PropertyForms/PhotosForm.vue'
   import RatesForm from '../PropertyForms/RatesForm.vue'
   import RoomsSpacesForm from '../PropertyForms/RoomsSpacesForm.vue'
   import VideoForm from '../PropertyForms/VideoForm.vue'
   import VirtualTourForm from '../PropertyForms/VirtualTourForm.vue'
   export default {
     components:{
       OpportunitiesForm,
       AmenitiesForm,
       ContactForm,
       DescriptionForm,
       HealthSafetyForm,
       LocationForm,
       PhotosForm,
       RatesForm,
       RoomsSpacesForm,
       VideoForm,
       VirtualTourForm
     },
    data () {
      return {
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
   </script>
   <style scoped>
   .active {
     background-color: white !important;
     color: grey !important;
   }
   .single-tab {
     font-weight: 12px !important;
     font-size: 11px !important;
    background-color: #f4f0f0;
    color: #4242ee94 !important;
    border: 1px solid #80808033;
    height: 28px !important;
   }
   .v-tab {
     text-transform: capitalize;
   }
   </style>
   