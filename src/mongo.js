const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/MealMingle")
                .then(() => console.log("mongodb connection successfull....."))
                .catch((err) => console.log(err));

                
                const StudentSchema = new mongoose.Schema({
                    Name:{
                        type : String,
                        required : true
                    },
                    RegistrationNumber:{
                        type : Number,
                        required : true
                    },
                    Email:{
                        type : String,
                        required : true
                    },
                    HostelName:{
                        type : String,
                        required : true
                    },
                    MobileNumber:{
                        type : Number,
                        required : true
                    },
                    Password:{
                        type : String,
                        required : true
                    }
                })
                 

                const ManagerSchema = new mongoose.Schema({
                    Name:{
                        type : String,
                        required : true
                    },
                    Position:{
                        type : String,
                        required : true
                    },
                    Email:{
                        type : String,
                        required : true
                    },
                    HostelName:{
                        type : String,
                        required : true
                    },
                    MobileNumber:{
                        type : Number,
                        required : true
                    },
                    Password:{
                        type : String,
                        required : true
                    }
                })


                const WardenSchema = new mongoose.Schema({
                    Name:{
                        type : String,
                        required : true
                    },
                    Email:{
                        type : String,
                        required : true
                    },
                    HostelName:{
                        type : String,
                        required : true
                    },
                    MobileNumber:{
                        type : Number,
                        required : true
                    },
                    Password:{
                        type : String,
                        required : true
                    }
                })


                const ComplaintSchema = new mongoose.Schema({
                    Name:{
                        type : String,
                        // required : true
                    },
                    RegistrationNumber:{
                        type : Number,
                        // required : true
                    },
                    Email:{
                        type : String,
                        // required : true
                    },
                    HostelName:{
                        type : String,
                        // required : true
                    },
                    Complaint:{
                        type : String,
                        required : true
                    }
                  
                })
                 


                const Student=new mongoose.model('Student',StudentSchema)
                const Manager=new mongoose.model('Manager',ManagerSchema )
                const Warden =new mongoose.model('Warden',WardenSchema) 
                const Complaint=new mongoose.model('Complaint', ComplaintSchema)

                module.exports={
                    student:Student,
                    manager:Manager,
                    warden:Warden,
                    complaint:Complaint

                };