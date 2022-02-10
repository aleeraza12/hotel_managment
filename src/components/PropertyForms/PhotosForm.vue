<template>
    <div>

        <div class="d-flex">
<div>Photos</div>
<v-spacer></v-spacer>
<div><v-btn color="primary" rounded small class="mb-1">Add</v-btn></div>
</div>
<div>Your first photo will be the photo travelers see in search results</div>
         <v-row>
    <v-col
      v-for="n in 9"
      :key="n"
      class="d-flex child-flex"
      cols="3"
    >
      <v-img
        :src="`https://picsum.photos/200/100?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/7/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
        height="100"
        width="60"
      >

        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
<div>Upload clear ,bright photos that show off your rooms and amenities, it may take up to 10 minutes for your listing to update with changes</div>
<div>Photos must be</div>
<ul>
<li>Must be PNG,JPEG,JPG,GIF format</li>
<li>Smaller than 20 MB</li>
</ul>
<div>We will sometimes edit or delete individual photos if they break our guidelines</div>
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
