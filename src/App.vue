<template>
<v-app >
    <v-toolbar fixed app>
      
    </v-toolbar> 
    <main class = "secondary">
      <v-content>
        <v-container class = "pb-0" grid-list-lg>
            <v-layout>
              <v-flex>
                <h3 id="text_header" class="text-xs-center mb-0">Todo</h3>
              </v-flex>
              <v-flex>
                <h3 id="text_header" class="text-xs-center mb-0">Doing</h3>
              </v-flex>
              <v-flex>
                <h3 id="text_header" class="text-xs-center mb-0">Done</h3>
              </v-flex>
            </v-layout> 
        </v-container>
        <v-container class = "pb-0" grid-list-lg>
            <v-layout>
                <v-flex v-for="i in 3" :key="i">
                  <v-card class="primary" height = "370px">
                    <v-card-text>
                        ...
                    </v-card-text>
                  </v-card>
              </v-flex>
            </v-layout>
        </v-container>
          <v-container grid-list-lg>
            <v-layout>
                <v-flex>
                  <v-card class="primary" height = "90px">
                    <v-card-text>
                        ...
                    </v-card-text>
                  </v-card>
              </v-flex>
            </v-layout>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>



<script>
  
</script>

<style scoped>
    #todo_column {
        
    }
    #text_header {
        color: #ff802a;
    }
</style>

<style lang="stylus">
  @import './stylus/main'
</style>

