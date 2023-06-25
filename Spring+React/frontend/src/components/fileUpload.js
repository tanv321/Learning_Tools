import React, { useState } from 'react';
import axios from 'axios';

export default function FileUpload() {
    
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('http://localhost:8080/upload', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error during file upload:', error);
        }
    };

    return (
        <div>
            <input type='file' onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

