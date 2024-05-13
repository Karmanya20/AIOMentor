const User = require("../models/user.model");

exports.updateProfile = async (req, res) => {
    try {
      const { dateOfBirth = "", goal = "", phone ="",location="",industry="",area_of_expertise=""} = req.body;
      const id = req.user.id;
     
      // Update the profile fields
      User.dateOfBirth = dateOfBirth;
      User.goal = goal;
      User.phone = phone;
      User.location=location;
      User.industry=industry;
      User.area_of_expertise=area_of_expertise;

  
      // Save the updated profile
      await User.save();
  
      return res.json({
        success: true,
        message: "Profile updated successfully",
        profile,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  };
  exports.deleteAccount = async (req, res) => {
    try {
      // TODO: Find More on Job Schedule
      // const job = schedule.scheduleJob("10 * * * * *", function () {
      // 	console.log("The answer to life, the universe, and everything!");
      // });
      // console.log(job);
      console.log("Printing ID: ", req.user.id);
      const id = req.user.id;
  
      const user = await User.findById({ _id: id });
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
      
      
      // Now Delete User
      await User.findByIdAndDelete({ _id: id });
      res.status(200).json({
        success: true,
        message: "User deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "User Cannot be deleted successfully" });
    }
  };
  exports.updateDisplayPicture = async (req, res) => {
    try {
      const displayPicture = req.files.displayPicture;
      const userId = req.user.id;
      const image = await uploadImageToCloudinary(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,
        1000
      );
      console.log(image);
      const updatedProfile = await User.findByIdAndUpdate(
        { _id: userId },
        { image: image.secure_url },
        { new: true }
      );
      res.send({
        success: true,
        message: `Image Updated successfully`,
        data: updatedProfile,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

