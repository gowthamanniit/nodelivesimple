//var User=require("./UserModel")
import User from './UserModel.js'

export const create=async(req,res)=>{
    try
    {
const newUser=new User(req.body);

//to check already inserted or not
const {rno}=newUser;
const rnoExist=await User.findOne({rno})
if(rnoExist)
{
    return res.status(400).json({mesage:"rno already exist"})
}


const savedData=await newUser.save()
res.status(200).json({message:"inserted successfully"})
    }
    catch(err)
    {
        res.status(500).json({errormsg:err.message})
    }
}
// to view all details/records
export const getAllUsers =async(req,res)=>{
    try{
    const allData=await User.find();
    if(allData.length===0)
        return res.status(404).json({message:"empty record found"})
    res.status(200).json(allData)
    }
    catch(err)
    {
        res.status(500).json({message:err.mesage})
    }
}

// find single person using id 
export const getUserById=async(req,res)=>{
    try{
        const id=req.params.id
        const ans=await User.findById(id)
        if(!ans)
            return res.status(404).json({message:"id not found"})
        res.status(200).json(ans)        
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}
//update
export const update=async(req,res)=>{
    try{
        const id=req.params.id
        const ans=await User.findById(id)
        if(!ans)
            return res.status(404).json({message:"id not found"})
        
        const updateUser=await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({msg:"successfully updated"})

    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}
//=======delete
export const deleteUser=async(req,res)=>{
    try{
        const id=req.params.id
        const ans=await User.findById(id)
        if(!ans)
            return res.status(404).json({message:"id not found"})
        
        const delUser=await User.findByIdAndDelete(id)
        res.status(200).json({msg:"successfully deleted"})

    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}