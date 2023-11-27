"use strict"
const { createApp } = Vue

createApp({
    data() {
        return {
            // immagine1
            immagini:[
                {
              img:"img/01.webp",
              titolo:"Marvel\'s Spiderman Miles Morale",
              paragrafo:"Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."

            },
            // immagine2
            {
                img:"img/02.webp",
                titolo:"Ratchet & Clank: Rift Apart",
                paragrafo:"Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality."
            },
            // immagine3
            {
                img:"img/03.webp",
              titolo:"fortnite",
              paragrafo:"Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."

            },
            // immagine4
            {
                img:"img/04.webp",
              titolo:"Stray",
              paragrafo:"Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city."

            },
            // immagine5
            {
                img:"img/05.webp",
              titolo:"Marvel's Avengers",
              paragrafo:"Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay."
            }
        ],
            conteggio:0,
        }
    },
    methods:{
        next(){
          this.conteggio++
           if(this.conteggio > this.immagini.length -1 ){
            this.conteggio = 0;
           }
        },
        prev(){
            this.conteggio--
         if(this.conteggio < 0){
            this.conteggio = this.immagini.length-1
         }
        },
        autoplay(){
          setInterval(this.next,3000); 
        },

    },
    mounted(){
        this.autoplay()
    }
}).mount('#app')
