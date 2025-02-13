import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
import { ApiError } from "../utils/ApiError.js"
cloudinary.config({
    cloud_name: 'dqolqioqw',
    api_key: '159755157937872',
    api_secret: `${process.env.API_SECRET}`
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath)
        if (!response) {
            throw new ApiError(400, "file may not given something went wrong while uploading the image")
        }
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        console.log(error)
        fs.unlinkSync(localFilePath)
    }
}

export { uploadOnCloudinary }

