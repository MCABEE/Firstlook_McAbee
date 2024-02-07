import { useState } from "react";
import Cropper from "react-easy-crop";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function ImageCropper({ image, onCropDone, imgIdentifier, onCropCancel }) {

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState(null);

    let aspect = 4 / 5

    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="cropper">

            <div className="relative">
                <Cropper
                    image={image}
                    aspect={aspect}
                    crop={crop}
                    zoom={zoom}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                    style={{
                        containerStyle: {
                            borderRadius: "0.85rem",
                            top: "-450px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "auto",
                            width: "300px",
                            height: "410px",
                            backgroundColor: "black",
                        },
                    }}
                />
                <div className="w-28 flex">
                    <div className="absolute text-black -mt-[40rem] -ml-5 cursor-pointer" onClick={onCropCancel}>
                        <KeyboardBackspaceOutlinedIcon />
                    </div>
                    <div
                        className="absolute mt-8 font-oxygen bg-[#FE1940] py-2 rounded-xl text-white px-8 sm:ml-48 cursor-pointer"
                        onClick={() => {
                            onCropDone(croppedArea, imgIdentifier);
                        }}
                    >
                        Crop
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ImageCropper;