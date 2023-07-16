import { useContext, useState } from "react";
import Cropper from "react-easy-crop";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { registrationContext } from "../../../context/formContext";

// eslint-disable-next-line react/prop-types
function ImageCropperMobile({ image, onCropDone, onCropCancel }) {
    const { page } = useContext(registrationContext)
    console.log(page)
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState(null);
    const aspect = 4 / 5;

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
                            top: "25rem",
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
                    <div className={page === 9 ? "absolute text-black -mt-[40rem] -ml-3.5 cursor-pointer"
                        : page === 11 ? "absolute text-black -mt-[40rem] -ml-3.5 cursor-pointer"
                            : "absolute text-black -mt-[40rem] -ml-3.5 cursor-pointer"} onClick={onCropCancel}>
                        <KeyboardBackspaceOutlinedIcon />
                    </div>
                    <div
                        className={page === 9 ? "absolute mt-[16vw] font-oxygen bg-[#F92739] py-2 rounded-xl text-white px-8 ml-48 cursor-pointer"
                            : page === 11 ? "absolute mt-[16vw] font-oxygen bg-[#F92739] py-2 rounded-xl text-white px-8 ml-[13rem] sm:ml-60 cursor-pointer"
                                : "absolute mt-[16vw] font-oxygen bg-[#F92739] py-2 rounded-xl text-white px-8 ml-48 cursor-pointer"}
                        onClick={() => {
                            onCropDone(croppedArea);
                        }}
                    >
                        Crop
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ImageCropperMobile;