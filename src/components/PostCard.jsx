import React from "react";
import appwriteService from '../appwrite/config';
import {Link} from 'react-router-dom';

function PostCard(post){

    const {$id, title, featuredImage} = post

    // not using this apporach because image translation is not allowed in the appwrite free plan
    // const previewUrl = appwriteService.getFilePreview(featuredImage);
    // console.log("Image Preview URL for Post:", title, previewUrl); // ✅ Debug output

    const imageUrl = appwriteService.getFileView(featuredImage)

    return(
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 space-y-2 ">
                <div className="w-full justify-center mb-4 ">
                    {/* <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className="rounded-xl w-full h-48 object-cover-xl"/> */}
                    <img src={imageUrl} alt={title} className="rounded-xl w-full h-48 object-cover-xl shadow-md"/>
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard
