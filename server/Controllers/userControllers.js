// import User from "../models/userModels.js";

// export const createUser = async (req, res) => {
//   try {
//     const userData = new User(req.body);
//     if (!userData) {
//       res.status(404).json({ msg: "User not Found" });
//     }
//     await userData.save();
//     res.status(200).json({ msg: "User got created successfully." });
//   } catch (error) {
//     res.status(500).json({ err: error });
//   }
// }

// export const getAll =  async (req,res)=>{
//     try { 
//         const userData= await User.find();
//     if(!userData){res.status(404).json({msg:"User not found"});
//     }
//     res.status(200).json(userData);
//     }

// catch(error){
//     res.status(500).json({err:error})
//     }
// }

// export const getOne = async (req,res)=>{
//     try{
//         const id =req.params.id;
//         const userData = await User.findById(id);
//         if(!userData){
//             res.status(404).json({msg:"User doesn't exist"});
//         }
//         res.status(200).json(userData);
//     }

// catch(error){
//     res.status(500).json({err:error})
//     }

// }

// export const Updateuser = async(req,res)=>{
//     try{
//          const userid= req.params.id;
 
//       const  userData= await User.findById(userid);
      
//       if(!userData){
//          res.status(404).json({message:"User not found."});
//         }
//         const updatedata= await User.updateUser(userid,req.body,{new:true});
//         res.status(200).json({msg:"User Updated successfully"});
//      }
//       catch(error){
//         res.status(500).json({err:error});
//      }
       
//  }

import User from "../models/userModels.js";
export const createUser = async (req, res) => {
  try {
    const userData = new User(req.body);
    if (!userData) {
      res.status(404).json({ msg: "User not Found" });
    }
    await userData.save();
    res.status(200).json({ msg: "User got created successfully." });
  } catch (error) {
    res.status(500).json({ err: error });
  }
}

export const getAll =  async (req,res)=>{
    try { 
        const userData= await User.find();
    if(!userData){res.status(404).json({msg:"User not found"});
    }
    res.status(200).json(userData);
    }

catch(error){
    res.status(500).json({err:error})
    }
}

export const findUserById = async(req,res)=> {
    try{
         const userid= req.params.id;
 
      const userData= await User.findById(userid);
      
      if(!userData){
         res.status(404).json({message:"User not found."});
        }
        res.status(200).json(userData);
     }
      catch(error){
        res.status(500).json({err:error});
     }
       
 }

 export const updateUser = async(req,res)=>{
    try{
         const userid= req.params.id;
 
      const userExist= await User.findById(userid);
      
      if(!userExist){
         res.status(404).json({message:"User not found."});
        }
        const updatedata= await User.findByIdAndUpdate(userid,req.body,{new:true});

        res.status(200).json({msg:"User has been updated succesfully"});
     }
      catch(error){
        res.status(500).json({err:error});
     }       
 }

 export const DeleteUser = async(req,res)=>{
  try{
       const userid= req.params.id;

    const  userData= await User.findById(userid);
    
    if(!userData){
       res.status(404).json({message:"User not found."});
      }
      const deleteData = await User.findByIdAndDelete(userid);
      res.status(200).json({msg:"User Deleted Successfully"});
   }
    catch(error){
      res.status(500).json({err:error});
   }
}
