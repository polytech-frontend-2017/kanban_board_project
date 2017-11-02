<template>
<v-app >
    <v-toolbar fixed app>
      
    </v-toolbar> 
    <main>
      <v-content>
        <v-container grid-list-lg>
            <v-layout>
              <v-flex v-for="i in 3" :key="i">
                  <v-card>
                    <v-card-text xs-center>
                        Text
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

<style lang="stylus">
  //@import './stylus/main'
</style>
