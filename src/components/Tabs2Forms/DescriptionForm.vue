<template>
    <div>
        <div class="heading mt-5">Property description</div>
        <div class="d-flex">
            <v-icon color="primary mr-5" >mdi-information</v-icon>
            <div class="sub-heading ma-3" style="width:50%;text-align:justify">{{text}}</div>
        </div>
        <div class="card-title mt-5 mb-5" style="color:blue">view partners update</div>
        <div>
           <div>
           <v-text-field
           dense
               outlined
            :label='text'
            class="text-feild"
          ></v-text-field>
          </div>
          <div>
           <v-text-field
           dense
               outlined
            :label='text'
            class="text-feild"
          ></v-text-field>
          </div>
          <div>
           <v-textarea
               outlined
            :label='Description'
            class="text-feild"
          ></v-textarea>
          </div>
          </div>
          <div>
              <div class="card-title"> Are you a professional host or private host?</div>
                <div class="sub-heading">
      <v-radio-group v-model="column" column dense>
        <v-radio :label="text" value="radio-1"></v-radio>
        <v-radio :label="text" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
    <div>
        <div class="heading mt-5 mb-5">Regulatory</div>
        <div>
        <v-text-field
        dense
        outlined
        :label='text'
        class="text-feild"
        ></v-text-field>
        </div>
    </div>
    <div>
        <div class="heading mb-5 mt-5">
            Owner story
        </div>
         <div class="sub-heading mb-10 mt-10" style="width:50%;text-align:justify">{{text}}</div>
    </div>
    <div>
        <v-icon color="grey" size="100">mdi-account-circle</v-icon>
        <v-btn rounded outlined color="primary" class="mt-10 ml-5">Upload photo</v-btn>
    </div>
    <div class="mt-5">
         <v-textarea
               outlined
            label='About you'
            class="text-feild"
          ></v-textarea>
    </div>
    <div class="mt-5">
         <v-textarea
               outlined
            label='Why this property'
            class="text-feild"
          ></v-textarea>
    </div>
    <div class="mt-5">
         <v-textarea
               outlined
            label='Unique benefits'
            class="text-feild"
          ></v-textarea>
    </div>
    
          </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
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