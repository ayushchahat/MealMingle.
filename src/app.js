const express = require("express")
const app = express()
const path = require("path")
const db = require("./mongo")


const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')


app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))



app.get('/', (req, res) => {
    return res.render('index')
})

app.get('/StudentLoginAndRegister', (req, res) => {
    return res.render('StudentLoginAndRegister')
})

app.get('/ManagementLoginAndRegister', (req, res) => {
    return res.render('ManagementLoginAndRegister')
})

app.get('/WardenLoginAndRegister', (req, res) => {
    return res.render('WardenLoginAndRegister')
})

app.get('/FetchComplaints', async (req, res) => {
    try {
        const complaints = await db.complaint.find();
       return res.json(complaints);
    } catch (error) {
        console.error('Error fetching complaints:', error);
       return res.status(500).json({ error: 'Internal Server Error' });
    }
});




app.post('/StudentSignUp', async (req, res) => {
    
    const data = {
        Name: req.body.Name,
        RegistrationNumber: req.body.RegistrationNumber,
        Email: req.body.Email,
        HostelName: req.body.HostelName,
        MobileNumber: req.body.MobileNumber,
        Password: req.body.Password
    }

    const checking = await db.student.findOne({ RegistrationNumber: req.body.RegistrationNumber })

   try{
    if (checking!= null && checking.Email === req.body.Email && checking.Name===req.body.Name) {
        return res.send("user details already exists")
    }
    else{
        await db.student.insertMany([data])
    }
   }
   catch(err){
    return res.send("wrong inputs")
   }

    return res.status(201).render("StudentLoginAndRegister")
})


app.post('/ManagerSignUp', async (req, res) => {
    
    const data = {
        Name: req.body.Name,
        Position:req.body.Position,
        Email: req.body.Email,
        HostelName: req.body.HostelName,
        MobileNumber: req.body.MobileNumber,
        Password: req.body.Password
    }

    const checking = await db.manager.findOne({ Email: req.body.Email })

   try{
    if (checking!= null && checking.Email === req.body.Email && checking.Name===req.body.Name) {
        return res.send("user details already exists")
    }
    else{
        await db.manager.insertMany([data])
    }
   }
   catch(err){
    return res.send("wrong inputs")
   }

    return res.status(201).render("ManagementLoginAndRegister")
})



app.post('/WardenSignUp', async (req, res) => {
    
    const data = {
        Name: req.body.Name,
        Email: req.body.Email,
        HostelName: req.body.HostelName,
        MobileNumber: req.body.MobileNumber,
        Password: req.body.Password
    }

    const checking = await db.warden.findOne({ Email: req.body.Email })

   try{
    if (checking!= null && checking.Email === req.body.Email && checking.Name===req.body.Name) {
        return res.send("user details already exists")
    }
    else{
        await db.warden.insertMany([data])
    }
   }
   catch(err){
    return res.send("wrong inputs")
   }

    return res.status(201).render("WardenLoginAndRegister")
})





app.post('/StudentSignIn', async (req, res) => {

    try {
        const check = await db.student.findOne({ Email: req.body.Email })

        if (check.Password === req.body.Password) {
           return res.status(201).render("AfterLogin",{ UserName: `${req.body.Name}`})
        }

        else {
           return res.send("incorrect password")
        }

    } 
    
    catch (err) {
        return res.send("wrong details")
    }

})


app.post('/ManagerSignIn', async (req, res) => {

    try {
        const check = await db.manager.findOne({ Email: req.body.Email })

        if (check.Password === req.body.Password) {
           return res.status(201).render("AfterLogin")
        }

        else {
           return res.send("incorrect password")
        }

    } 
    
    catch (err) {
        return res.send("wrong details")
    }

})


app.post('/WardenSignIn', async (req, res) => {

    try {
        const check = await db.warden.findOne({ Email: req.body.Email })

        if (check.Password === req.body.Password) {
           return res.status(201).render("AfterLogin")
        }

        else {
           return res.send("incorrect password")
        }

    } 
    
    catch (err) {
        return res.send("wrong details")
    }

})


app.post('/AddComplaints', async (req, res) => {
    const data = {
        Complaint: req.body.Complaint,
    }

   try{
        await db.complaint.insertMany([data])
   }
   catch(err){
    return res.send("wrong inputs")
   }
    return res.status(201).render("AfterLogin")
})





app.listen(port, () => {
    console.log('port connected');
})
