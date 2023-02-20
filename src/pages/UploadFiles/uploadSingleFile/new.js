import React, { useState } from "react";

function uploadSingleFile() {
    const [selectedFiles, setSelectedFiles] =
        useState([]);

    const handleFileInput = (e) => {
        setSelectedFiles([
            ...selectedFiles,
            ...e.target.files,
        ]);
    };

    const handleFileDelete = (fileToDelete) => {
        setSelectedFiles(
            selectedFiles.filter(
                (file) => file !== fileToDelete
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedFiles);
        // Handle file upload logic here
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    multiple
                    onChange={handleFileInput}
                />
                <button type="submit">
                    Upload Files
                </button>
            </form>
            {selectedFiles.length > 0 && (
                <div>
                    <h2>Selected Files:</h2>
                    <ul>
                        {selectedFiles.map(
                            (file, index) => (
                                <li key={index}>
                                    {file.name}
                                    <button
                                        onClick={() =>
                                            handleFileDelete(
                                                file
                                            )
                                        }
                                    >
                                        Delete
                                    </button>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default uploadSingleFile;
