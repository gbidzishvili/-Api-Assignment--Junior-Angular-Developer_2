const config = require('config')
const Joi = require('joi');
const morgan = require('morgan')

const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json());


app.use(morgan('tiny'))
app.use(cors()) 
const  list=[
    {
        mail:"bidzishviligiorgi7@gmail.com",
        pn:"12001034395",
        name:"giorgi",
        surname:"bidzishvili",
        birthDate:"15/05/2012",
      category:"VIP User",
      status:"active"

    },
   
    {
        mail:"chkadua@gmail.com",
        pn:"17054305678",
        name:"nata",
        surname:"chkadua",
        birthDate:"23/10/2013",
        category:"user_2",
        status:"status1"
        
    },
    {
        mail:"bidz7@gmail.com",
        pn:"12001034395",
        name:"giorgi",
        surname:"bidz",
        birthDate:"15/05/2012",
      category:"VIP User",
      status:"active"

    },
    {
        mail:"ckhadadze@gmail.com",
        pn:"19086243187",
        name:"vinme",
        surname:"chkadua",
        birthDate:"17/12/2014",
        category:"user_4",
        status:"Blocked"
        
    },
    {
        mail:"z_chichua@gmail.com",
        pn:"01027077710",
        name:"zura",
        surname:"chichua",
      birthDate:"19/01/2015",
      category:"user_3",
      status:"Suspended"

    },
    {
        mail:"z_chichua@gmail.com",
        pn:"44524560724",
        name:"zura",
        surname:"chichua",
        birthDate:"19/01/2016",
        category:"user_3",
        status:"active"
        
    },
    {
        mail:"z_chichua@gmail.com",
        pn:"44344322452",
        name:"zura",
        surname:"chichua",
        birthDate:"19/01/2017",
        category:"user_1",
        status:"Blocked"

    },
    {
        mail:"z_chichua@gmail.com",
        pn:"14545670012",
        name:"zura",
        surname:"chichua",
        birthDate:"19/01/2018",
        category:"user_2",
        status:"Suspended"
        
    },
]
const categories = [
    {user:"VIP User"},
    {user:"Idle User"},
    {user:"Standart User"},
    {user:"User_1"},
    {user:"User_2"},
    {user:"User_3"},
    {user:"User_4"},
]
statusArr=[
    {status:'active'},
    {status:'Blocked'},
    {status:'Suspended'},
    {status:'status1'},
    {status:'status1'},
    {status:'status1'},
    {status:'status2'},
    {status:'status3'},
    {status:'status4'}
  ]


app.get('/categories',(req,res)=>{
    res.send(categories)
});
app.post('/categories',(req,res)=>{
    const result = req.body
    console.log("result:",result);
    categories.push(result)
    res.send(categories)
});
app.put("/categories",(req,res)=>{
    console.log(req.body,  categories[req.body.id])
    categories[req.body.id] = {user:req.body.user};
 res.send(categories)
})
app.delete("/delete/categories/:id",(req,res)=>{
    console.log(req.body,  categories[req.params.id])
    categories.splice(req.params.id,1)
 res.send(categories)
})

app.get('/status',(req,res)=>{
    res.send(statusArr)
});
app.post('/status',(req,res)=>{
    const result = req.body
    console.log("result:",result);
    statusArr.push(result)
    console.log(statusArr)
    res.send(statusArr)
});
app.put("/status",(req,res)=>{
    console.log(req.body,  statusArr[req.body.id])
    statusArr[req.body.id] = {status:req.body.status};
 res.send(statusArr)
})
app.delete("/delete/status/:id",(req,res)=>{
    console.log(req.body,  statusArr[req.params.id])
    statusArr.splice(req.params.id,1)
    // statusArr[req.body.id] = {user:req.body.user};
 res.send(statusArr)
})
app.get('/getList',(req,res)=>{
    console.log({statusArr,categories})
    res.send(list)
});
app.get('/dialog',(req,res)=>{
    console.log({statusArr,categories})
    res.send(list)
});
app.get('/getList/arrays',(req,res)=>{
    res.send({statusArr,categories})
});
app.get('/details',(req,res)=>{
    res.send(list)
});
app.post('/details',(req,res)=>{
    const result = req.body
    console.log("result:",result);
    list.push(result)
    res.send(list)
});

app.get('/dialog',(req,res)=>{
    res.send(list)
});
app.post('/dialog',(req,res)=>{
    const result = req.body
    console.log("result:",result);
    list.push(result)
    res.send(list)
});

app.put('/dialog',(req,res)=>{
    list[req.body.id]=req.body.data
    console.log("$$$",req.body.id,req.body,list[req.body.id],list)
    res.send(list)
});

app.delete("/delete/details/:id",(req,res)=>{
    console.log(req.body,  list[req.params.id])
    list.splice(req.params.id,1)
 res.send(list)
})



const port = process.env.PORT || 3000
app.listen(port,()=>console.log(`listening on port ${port}...`))