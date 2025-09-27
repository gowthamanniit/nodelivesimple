//var express =require("express");
//var mongoose =require("mongoose");
//var bodyParser =require("body-parser");
//var dotenv =require("dotenv");
//var cors = require("cors")
import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import route from "./UserRoute.js";


//var User=require("./UserModel")

const app =express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT =process.env.PORT || 9009;
const MONGOURL =process.env.uri;

mongoose.connect(MONGOURL).then(()=>{
                 console.log("Database is connected in successfully.")
                               
  /*               var inputdata={
                    rno:1006,
                    sname:"kavin",
                    mark:55                   
                 }

                const usrobj=new User(inputdata);
                /*
                usrobj.save().then(()=>{
                    console.log("insert success")                    
                }).catch((err)=>{
                    console.log("something error",err.toString())
                })
                        async function test()
                        {
                            try{
                            var res =await usrobj.save();   
                            console.log("success",res)}
                            catch(err){
                                console.log("error",err)
                            }
                        }                        
                        test();*/

                 app.listen(PORT,()=>{
                     console.log(`Server is Running on Port :${PORT}`)
                 });
        }).catch((error)=> console.log(error))

        app.use("/api",route);