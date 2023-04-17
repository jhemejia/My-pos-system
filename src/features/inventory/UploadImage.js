import React, { useState } from 'react'
import { uploadFile } from '../../firebase';


const UploadImage = (props) => {
    const { setImageUrl } = props;
    const [file, setFile] = useState(null)
    
    const handleChange = (e) =>{
        e.preventDefault();
        console.log(e.target.files[0].name)
        setFile(e.target.files[0])
        
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await uploadFile(file)               
        console.log(response)
        setImageUrl(response);
    }
  
  return (
  <div>
    <label>Upload Image: </label>
  <input 
  type="file" 
  name="image" 
  onChange={handleChange}
    />
  <input  type="submit" value="Save" onClick={handleSubmit} />
  </div>
  )
}

export default UploadImage
