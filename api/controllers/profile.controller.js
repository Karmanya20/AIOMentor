import User from "../models/user.model.js";

export const updateProfile = async (req, res) => {
    try {
        const { dateOfBirth = "", goal = "", phone = "", location = "", industry = "", area_of_expertise = "" } = req.body;
        const id = req.user.id;
        
        // Update the profile fields
        await User.findByIdAndUpdate(id, {
            dateOfBirth,
            goal,
            phone,
            location,
            industry,
            area_of_expertise
        });

        // Retrieve the updated profile
        const profile = await User.findById(id);

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

export const deleteAccount = async (req, res) => {
    try {
        const id = req.user.id;

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Now Delete User
        await User.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be deleted successfully",
        });
    }
};

export const updateDisplayPicture = async (req, res) => {
    try {
        const displayPicture = req.files.displayPicture;
        const userId = req.user.id;
        const image = await uploadImageToCloudinary(displayPicture, process.env.FOLDER_NAME, 1000, 1000);
        console.log(image);
        const updatedProfile = await User.findByIdAndUpdate(userId, { image: image.secure_url }, { new: true });
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

export const getAllUserDetails = async (req, res) => {
    try {
        const id = req.user.id;
        const userDetails = await User.findById(id);
        console.log(userDetails);
        return res.status(200).json({
            success: true,
            message: "User Data fetched successfully",
            data: userDetails,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
