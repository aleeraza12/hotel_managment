<template>
    <div>
        <h3>Property description</h3>
        <div>
            <v-icon>mdi-information</v-icon>
            <span>{{text}}</span>
        </div>
        <div>
           <div>
           <v-text-field
               outlined
            :label='text'
            class="text-feild"
          ></v-text-field>
          </div>
          <div>
           <v-text-field
               outlined
            :label='text'
            class="text-feild"
          ></v-text-field>
          </div>
          <div>
           <v-textarea
               outlined
            :label='text'
            class="text-feild"
          ></v-textarea>
          </div>
          </div>
          <div>
              <h3> Are you a professional host or private host?</h3>
                <div>
      <v-radio-group v-model="column" column dense>
        <v-radio :label="text" value="radio-1"></v-radio>
        <v-radio :label="text" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
    <div>
        <h2>Regulatory</h2>
        <div>
        <v-text-field
        outlined
        :label='text'
        class="text-feild"
        ></v-text-field>
        </div>
    </div>
    <div>
        <h3>
            Owner story
            <div>{{text}}</div>
        </h3>
    </div>
    <div>
        <v-icon>mdi-account-circle</v-icon><v-btn rounded outlined>Upload photo</v-btn>
    </div>
    <div>
         <v-textarea
               outlined
            label='About you'
            class="text-feild"
          ></v-textarea>
    </div>
    <div>
         <v-textarea
               outlined
            label='Why this property'
            class="text-feild"
          ></v-textarea>
    </div>
    <div>
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