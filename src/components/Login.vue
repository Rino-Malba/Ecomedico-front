<template>
    <div class="text">
    <h1 class="h1">Log in</h1>
    <div class="register">
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button id="login" v-on:click="logIn">Log in</button>
    </div>
    </div>
    </template>
    
    
    <script>
    import axios from 'axios'
    import {firebase} from '@/firebase'
    export default {
        name: 'login',
        data()
        {
            return{
                email: '',
                password: ''
            }
        },
        methods:{
            login() {
                console.log("login...")
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.username, this.password)
                    .then((result) => {
                        console.log("Uspjesno", result);
                        this.$router.replace({name: 'Home'})
    
                    })
                    .catch(function(e) {
                        console.log("greska", e)
                    })
            },
        }
    }
    
    axios.interceptors.response.use(
        response => {
            return response
        },
        error => {
            if (!error.response) {
                console.log("Please check your internet connection.");
            }
    
            return Promise.reject(error)
        }
    )
    
    </script>

<style>
    @font-face {
        font-family: 'SansitaWashed';
        src: url(@/assets/fonts/SansitaSwashed-BlackItalic.ttf);
    }
    .text{
        top: 0; bottom: 0; left: 0; right: 0; 
        margin: auto;
        margin-top: 30vh;
        z-index: 8;
        margin-left: 85vh;
    }
    h1{
        font-family: "SansitaWashed";
        color: #bb044b;
        -webkit-text-stroke: 2px black;
        text-align: center;
    }
    .register{
        margin-top: 30px;
        text-align: center;
        
    }
    .register input{
      width: 300px;
      height: 40px;
      padding-left: 20px;
      display: block;
      margin-bottom: 30px;
      margin-right: auto;
      margin-left: auto;
      border: 2px solid seagreen;
    }
    .register button{
      width: 320px;
      height: 40px;
      border: 0px;
      background: seagreen;
      color: white;
      cursor: pointer;
      }
    .register button:hover{
        background: #bb044b;
    }
    .register input:focus{
        outline: none;
    }
    </style>