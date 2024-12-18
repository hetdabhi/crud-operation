// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: true
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true // Ensures no duplicate emails
//         },
//         password: {
//             type: String,
//             required: true
//         },
//         age: {
//             type: Number,
//             required: true
//         }
//     },
//     {
//         timestamps: true // Automatically adds createdAt and updatedAt fields
//     }
// );

// // Define the User model
// const User = mongoose.model("User", userSchema);

// export default User;


// --------------------------------


// import mongoose from "mongoose";
// const userschemas = new mongoose.Schema(
//     {
//         name:{
//             type:String,
//             required:true
//         },
//         email:{
//             type:String,
//             required:true
//         },
//         password:{
//             type:String,
//             required:true
//         },
//         age:{
//             type:Number,
//             required:true
//         }
//     },
//     {
//         timestamps:true
//     }
   
// )

// const User= mongoose.model('User',userschemas);

// export default User;

// ----------------------------------------
import mongoose from "mongoose";
const userschemas = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        }
    },
    {
        timestamps:true
    }
   
)

const User= mongoose.model('User',userschemas);

export default User;