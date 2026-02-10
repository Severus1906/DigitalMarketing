import DM from "../models/dm.js";

export const getDM = async (req,res) => {
    try {
       const message = await DM.find().sort({ createdAt: -1});
       res.status(200).json({success:true,count:message.length, data:message})
      } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const createDM = async (req,res) => {
      try {
    const { name, email, service, message } = req.body;

    if (!name || !email || !service || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newDM = await DM.create({
      name,
      email,
      service,
      message,
    });
    return res
      .status(201)
      .json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.log("Internal server error", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export const deleteDM = async (req,res) => {
    try {
        const deleted = await DM.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(400).json({success:false,message:"Message not found"})
        }
        res.status(200).json({success:true, message:"Message deleted successfully"})
    } catch (err) {
        console.error("Error deleting DM:", err);
        res.status(500).json({success:false,message:"Internal server error",err})
    }
}