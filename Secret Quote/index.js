import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();
import authenticationMiddleWare from "./authenticationMiddleWare.js";
const app=express()

app.use(express.json());


const users=[]
const todos = [];
app.post('/register',async (req,res)=>
{
    const {id,username,password}=req.body;
    const find=users.find(user=>(user.username==username));
    if(find)
    {
        return res.send("User already exists");
    }
    try{
        const pass=await bcrypt.hash(password,10);
    const data={
        id: users.length + 1,
        username:username,
        password:pass
    }
    users.push(data);
    console.log(users);
    return res.status(200).send("Added the user data");
    }
    catch{
        return res.status(500).send("Facing issues");
    }
})

app.post('/login',async (req,res)=>
{
    const {username,password}=req.body;
    const find= users.find(u => u.username === username);
    
    if(!find){
        return res.status(404).send("Not Authorized");
    }

       const match = await bcrypt.compare(password, find.password);
    if (!match) {
        return res.status(401).send("Invalid credentials");
    }

    const payload=
    {
        sub:find.id,
        name:find.username,
    }
    const token=jwt.sign(payload,process.env.sp,{
        expiresIn:'1h'
    });
    return res.json({accessToken:token});
})

app.get('/secret-quote',authenticationMiddleWare,(req,res)=>
{
    res.json({
        "quote":"THE SECRET TO GETTING AHEAD IS GETTING STARTED"
    })
});

app.post('/api/todo', authenticationMiddleWare, (req, res) => {
    const { task } = req.body;
    const todo = {
        id: todos.length + 1,
        task,
        userId: req.user.sub // sub = user's id from the token
    };
    todos.push(todo);
    res.status(201).json({ message: "To-do created", todo });
});

app.get('/api/todos', authenticationMiddleWare, (req, res) => {
    const userTodos = todos.filter(todo => todo.userId === req.user.sub);
    res.json(userTodos);
});

app.delete('/api/todos/:id', authenticationMiddleWare, (req, res) => {
    const todoId = parseInt(req.params.id);
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex === -1) {
        return res.status(404).json({ message: "To-do not found" });
    }
    const todo = todos[todoIndex];
    if (todo.userId !== req.user.sub) {
        return res.status(403).json({ message: "You are not authorized to delete this to-do" });
    }
    todos.splice(todoIndex, 1); 
    return res.json({ message: "To-do deleted successfully" });
});

app.listen(5000,()=>
{
    console.log("listening at 5000");
})