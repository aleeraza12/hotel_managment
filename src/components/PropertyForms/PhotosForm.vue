<template>
<div>
  <v-card class="elevation-5">
    <v-card-title>
       <div>Photos</div>
      <v-spacer></v-spacer>
      <div> <v-btn rounded outlined dense small color="#2196F3">
         Add
        </v-btn></div>
    </v-card-title>
    <v-card-subtitle>
      <div>
      Your first photo will be the photo travelers see in search results
    </div>
    </v-card-subtitle>

    <v-card-text>
  <div>

     <v-container class="pa-0">
    <v-row class="pa-0">
      <v-col cols="8">
        <v-row>      
        <v-col v-for="(post, i) in posts" :key="i" cols="2">
        <base-card :href="post.href" color="grey lighten-2" height="88" tag="a">
          <v-img
            style="border: 1px solid grey;
    border-radius: 5px;"
            v-if="post.src"
            :src="require(`/public/instagram/${post.src}`)"
            height="100%"
          />
        </base-card>
      </v-col>
        <div style="height:90px;width:100px;background-color:light-gray;border:1px solid grey" class="ml-3 mt-3 pt-7">
          <v-icon class="ml-3" small color="#2196F3">mdi-plus-circle-outline</v-icon><span style="font-size:12px">Add photos</span></div>
    </v-row>
    </v-col>
    <v-col cols="4">
        <v-sheet
          class="pa-12"
          color="grey lighten-3"
          height="210"
          style="border: 1px solid grey;
    border-radius: 10px;"
        >
         <v-btn style="margin-top:7.5rem ;margin-left:11rem" rounded outlined dense small color="#2196F3">
          Rotate
        </v-btn>
          <div></div>
        </v-sheet>
         <v-text-field
            class="mt-6"
            label="Photo caption"
            placeholder="Placeholder"
            outlined
            dense
          ></v-text-field>
          <div class="ma-2">Move to archive</div>
          <div class="ma-2">Delete</div>
             </v-col>
    </v-row>
     </v-container>
     <v-card class="elevation-5 mt-5">
       <v-card-text>
   <div>
      <h4>Tips</h4>
      Upload clear ,bright photos that show off your rooms and amenities, it may
      take up to 10 minutes for your listing to update with changes
    </div>
    <div>Photos must be</div>
    <ul>
      <li>Must be PNG,JPEG,JPG,GIF format</li>
      <li>Smaller than 20 MB</li>
    </ul>
    <div>
      We will sometimes edit or delete individual photos if they break our
      guidelines
    </div>
       </v-card-text>
     </v-card>
 
  </div>
  </v-card-text>
  </v-card>
</div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      items: ["House", "Appartment", "Cottage"],
      items1: ["sq ft.", "feet"],
      items3: ["1", "2", "3", "4", "6"],
      posts: [
        { src: "adventurealtitude.jpg" },
        { src: "garden.jpg" },
        { src: "pigduck.jpg" },
        { src: "rain.jpg" },
        { src: "spices.jpg" },
        { src: "sunset.jpg" },
                { src: "adventurealtitude.jpg" },
        { src: "garden.jpg" },
        { src: "pigduck.jpg" },
        { src: "rain.jpg" },
        { src: "spices.jpg" },
        { src: "sunset.jpg" },
          { src: "adventurealtitude.jpg" },
        { src: "garden.jpg" },
        { src: "pigduck.jpg" },
        { src: "rain.jpg" },
        { src: "spices.jpg" },
        { src: "sunset.jpg" },
          { src: "adventurealtitude.jpg" },
        { src: "garden.jpg" },
        { src: "pigduck.jpg" },
        { src: "rain.jpg" },
      ],
    };
  },
};
</script>
