import { useState } from "react";
import Cropper from "react-easy-crop";

// eslint-disable-next-line react/prop-types
function ImageCropper({ image, onCropDone, onCropCancel }) {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState(null);
    const aspect = 1 / 1;

    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
    };

    return (
        <div className="cropper">
            <div>
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
                            top: "45%",
                            marginLeft: "40%",
                            width: "20%",
                            height: "55%",
                            backgroundColor: "#fff",
                        },
                    }}
                />
                <div className="w-28 flex">
                    <div className="text-[#A0A0A0] border border-[#D8D8D8] font-oxygen bg-white px-8 py-2 rounded-xl -ml-1 cursor-pointer" onClick={onCropCancel}>
                        Cancel
                    </div>

                    <div
                        className="font-oxygen bg-[#F92739] py-2 rounded-xl text-white px-8 ml-20 cursor-pointer"
                        onClick={() => {
                            onCropDone(croppedArea);
                        }}
                    >
                        Done
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ImageCropper;
