"use client";

import { useState, useRef } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
    const [pickedImage, setPickedImage] = useState(null);
    const imageInputRef = useRef();

    const handlePickClick = () => {
        imageInputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setPickedImage(null);
        if (!file) {
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    };
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet</p>}
                    {pickedImage && (
                        <Image
                            src={pickedImage}
                            alt="Image selected by the user"
                            fill
                        />
                    )}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInputRef}
                    onChange={handleImageChange}
                    required
                />
                <button
                    className={classes.button}
                    type="button"
                    onClick={handlePickClick}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    );
};

export default ImagePicker;
