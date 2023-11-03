import { useContext, useEffect, useState } from "react";
import CircleIcon from '@mui/icons-material/Circle';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import aadharLogo from '../../../../assets/aadharLogo.png'
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import FileInput from "../FileInput";
import ImageCropper from "../ImageCropper";
import { uploadAadharImage } from "../../../../api";
import { registrationContext } from "../../../../context/formContext";
import { useNavigate } from "react-router-dom";
import ImageCropperMobile from "../ImageCropperMobile";

const AadharForm = () => {
    const { page } = useContext(registrationContext)
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState("");
    const [imageSide, setImageSide] = useState("");
    const [image, setImage] = useState("");
    const [currentPage, setCurrentPage] = useState("choose-img");
    const [imgFrontAfterCrop, setImgFrontAfterCrop] = useState("");
    const [imgBackAfterCrop, setImgBackAfterCrop] = useState("");
    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [count, setCount] = useState(0)

    // Invoked when new image file is selected
    const onImageSelected = (selectedImg) => {
        setImage(selectedImg);
        setCurrentPage("crop-img");
    };

    const compressImage = (dataURL, maxSizeInMB) => {
        const maxFileSize = maxSizeInMB * 1024 * 1024; // Convert maxSizeInMB to bytes

        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = function () {
                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");

                let width = image.width;
                let height = image.height;
                const aspectRatio = width / height;

                // Reduce the dimensions while maintaining the aspect ratio
                while ((width * height * 4) > maxFileSize) {
                    width -= 100;
                    height = Math.floor(width / aspectRatio);
                }

                canvas.width = width;
                canvas.height = height;
                context.drawImage(image, 0, 0, width, height);

                canvas.toBlob(
                    function (blob) {
                        const reader = new FileReader();
                        reader.onloadend = function () {
                            resolve(reader.result);
                        };
                        reader.onerror = reject;
                        reader.readAsDataURL(blob);
                    },
                    "image/jpeg"
                );
            };
            image.onerror = reject;
            image.src = dataURL;
        });
    };

    // Generating Cropped Image When Done Button Clicked
    const onCropDone = (imgCroppedArea) => {
        const canvasEle = document.createElement("canvas");
        canvasEle.width = imgCroppedArea.width;
        canvasEle.height = imgCroppedArea.height;

        const context = canvasEle.getContext("2d");

        let imageObj1 = new Image();
        imageObj1.src = image;
        imageObj1.onload = async function () {
            context.drawImage(
                imageObj1,
                imgCroppedArea.x,
                imgCroppedArea.y,
                imgCroppedArea.width,
                imgCroppedArea.height,
                0,
                0,
                imgCroppedArea.width,
                imgCroppedArea.height
            );

            const dataURL = canvasEle.toDataURL("image/jpeg");
            const compressedDataURL = await compressImage(dataURL, 1); // Maximum size set to 1 MB

            if (count === 0) {
                setImgFrontAfterCrop(compressedDataURL);
                setCurrentPage("img-cropped");
                setCount(count + 1)
            } else {
                setImgBackAfterCrop(compressedDataURL)
                setCurrentPage("img-cropped-back");
            }
        };
    };

    // Handle Cancel Button Click
    const onCropCancel = () => {
        setCurrentPage("choose-img");
        setImage("");
    };

    const handleFileUpload = async (event) => {
        event.preventDefault();
        setIsRunning(true)

        if (isOpen === 'photo') {
            await uploadAadharImage(imgFrontAfterCrop, imgBackAfterCrop, {
                onUploadProgress: (progressEvent) => {
                    const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                    setFilled(progress);
                },
            })
                .then((result) => {
                    localStorage.setItem("signupStatus", result?.data?.signupStatus)
                    navigate('/home')
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    };

    useEffect(() => {
        if (filled < 100 && isRunning) {
            setTimeout(() => setFilled(prev => prev += 4), 50)
        }
    }, [filled, isRunning])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {currentPage === "choose-img" ? (
                <form className="w-72 ml-3.5 sm:ml-12 mt-5">
                    <p className="text-[12px] font-oxygen font-semibold text-[#4D4D4D]">
                        Upload both side image of your Aadhar Card
                    </p>
                    <p className="text-[12px] font-oxygen mt-3 text-[#4D4D4D">
                        Please add both sides of your Aadhar Card.
                    </p>
                    <p className="text-[12px] font-oxygen text-[#4D4D4D">
                        Here you can select multiple images at a time.
                    </p>
                    <div onClick={() => {
                        setIsOpen("photo")
                        window.scrollTo(0, 300)
                    }}
                        className="bg-white cursor-pointer w-full mt-10 border border-[##B8B8B8] flex gap-1 items-center justify-center py-2.5 text-[12px] text-[#4D4D4D] rounded-xl">
                        <p className="mr-3 -mt-0.5">
                            <ArrowUpwardOutlinedIcon sx={{ height: "22px" }} />
                        </p>
                        <span>Upload Aadhaar</span>
                        <img src={aadharLogo} className="h-6 w-7 ml-4" alt="" />
                    </div>
                    <div className="w-full py-3 rounded-xl mb-6 border border-[#D8D8D8] bg-white h-fit mt-10">
                        <div className='font-oxygen text-[12px] text-justify p-4'>
                            <p className='font-bold'>
                                Guidelines to add Aadhaar Card
                            </p>
                            <p className='mt-4'>
                                We request Aadhar ID for Indian citizens is only to verify the account. It helps to avoid the fake and duplicate profiles, and get you better results.
                            </p>
                            <p className='mt-2'>
                                Please don’t try to upload other’s Aadhaar Card. It was legally punishable.
                            </p>
                            <p className='mt-2'>
                                Add image with good quality.
                            </p>
                            <p className='mt-2'>
                                We recommend 1000 x 1000 pixel resolution square size photos for better visibility.
                            </p>
                            <p className='mt-2'>
                                You can add more photos from your profile, after complete the registration.
                            </p>
                        </div>
                    </div>
                    {isOpen === "photo" ?
                        <>
                            <div className='mb-20'>
                                <div className='absolute w-96 -ml-12 py-3 rounded-xl border border-[#D8D8D8] bg-[#FE1940] h-16 -mt-28'>
                                    <p className='font-oxygen text-white text-[14px] text-center font-semibold'>
                                        Add Photo (Front Side)
                                    </p>
                                    <div onClick={() => setIsOpen(" ")} className='text-white ml-[21rem] -mt-6 cursor-pointer'>
                                        <KeyboardArrowDownOutlinedIcon />
                                    </div>
                                </div>
                                <div className='absolute w-96 -ml-12 py-3 rounded-b-xl border border-[#D8D8D8] bg-white h-36 -mt-16'>
                                    <button type="button" className="border border-[#D8D8D8] rounded-2xl w-52 py-3 mt-8 ml-[5.3rem] flex">
                                        <div className='mx-auto flex'>
                                            <LocalSeeOutlinedIcon />
                                            <FileInput setImage={setImage} onImageSelected={onImageSelected} />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </>
                        : null
                    }
                </form>
            ) : currentPage === "crop-img" ? (
                <>
                    <div className='mt-[29rem] sm:block hidden'>
                        <ImageCropper
                            image={image}
                            onCropDone={onCropDone}
                            onCropCancel={onCropCancel} />
                    </div>
                    <div className='mt-[29rem] sm:hidden block'>
                        <ImageCropperMobile
                            image={image}
                            onCropDone={onCropDone}
                            onCropCancel={onCropCancel} />
                    </div>
                </>
            ) : currentPage === "img-cropped" ? (
                <>
                    {isOpen === "photo" ?
                        <>
                            <div className="absolute -ml-12 w-[20.5rem] sm:w-[24rem] py-3 rounded-xl mb-6 -mt-72">
                                <button className="rounded-2xl py-3 mt-8 ml-[2rem] flex">
                                    <div className='mx-auto'>
                                        <div className='mt-[19rem]'>
                                            <img src={imgFrontAfterCrop} className="rounded-xl h-[10rem] w-[20rem] ml-7 sm:ml-12" />
                                        </div>

                                        <div
                                            onClick={() => {
                                                setCurrentPage("crop-img");
                                                setImgFrontAfterCrop("")
                                                setCount(0)
                                            }}
                                            className="text-black -mt-[25.5rem] -ml-[14rem] sm:-ml-60"
                                        >
                                            <KeyboardBackspaceOutlinedIcon />
                                        </div>
                                    </div>
                                </button>

                                <div
                                    onClick={() => {
                                        setImageSide("photoBack")
                                        window.scrollTo(0, 500)
                                    }}
                                    className="bg-[#F92739] cursor-pointer rounded-xl w-40 text-[14px] text-center text-white py-2 ml-[12.2rem] sm:ml-[15rem] mt-[32rem] sm:mb-0 "
                                >
                                    Upload Rear Side
                                </div>
                                {imageSide === "photoBack" ?
                                    <>
                                        <div className='mb-20 sm:ml-12 ml-4 mt-9'>
                                            <div className='absolute w-96 py-3 sm:rounded-xl bg-[#FE1940] h-16 '>
                                                <p className='font-oxygen text-white text-[14px] text-center font-semibold'>
                                                    Add Photo (Back Side)
                                                </p>
                                                <div onClick={() => setImageSide(" ")} className='text-white ml-[21rem] -mt-6 cursor-pointer'>
                                                    <KeyboardArrowDownOutlinedIcon />
                                                </div>
                                            </div>
                                            <div className='absolute w-96 py-3 rounded-b-xl bg-white h-36 mt-[3rem]'>
                                                <button type="button" className="border border-[#D8D8D8] rounded-2xl w-52 py-3 mt-8 ml-[5.3rem] flex">
                                                    <div className='mx-auto flex'>
                                                        <LocalSeeOutlinedIcon />
                                                        <FileInput setImage={setImage} onImageSelected={onImageSelected} />
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                    : null
                                }
                            </div>
                        </>
                        : " "}
                </>
            ) : (
                <>
                    {isOpen === "photo" ?
                        <>
                            <div className="absolute w-[19rem] sm:w-[24rem] py-3 rounded-xl mb-6 bg-white sm:bg-[#F2F2F2] sm:h-[35rem] -mt-48 sm:-mt-64">
                                <button className="rounded-2xl py-3 mt-8 ml-4 sm:ml-[2rem] flex">
                                    <div className='mx-auto'>
                                        <p className='font-bold text-xl'>Preview</p>
                                        <div className='mt-[5rem]'>
                                            <img src={imgFrontAfterCrop} className="rounded-xl h-48 w-[318px]" />
                                            <img src={imgBackAfterCrop} className="rounded-xl h-48 w-[318px] mt-5" />
                                        </div>

                                        <div
                                            onClick={() => {
                                                setCurrentPage("crop-img");
                                                setIsRunning(false)
                                                setFilled(0)
                                                setCount(0)
                                                setImgFrontAfterCrop("")
                                                setImgBackAfterCrop("")
                                            }}
                                            className="text-black -mt-[32rem] -ml-[290px]"
                                        >
                                            <KeyboardBackspaceOutlinedIcon />
                                        </div>
                                    </div>
                                </button>

                                {isRunning &&
                                    <div className="progressbar mt-[34rem] ml-[3.3rem] sm:ml-[4.2rem]">
                                        <div style={{
                                            height: "100%",
                                            width: `${filled}%`,
                                            backgroundColor: "#F92739",
                                            transition: "width 0.5s"
                                        }}></div>
                                    </div>
                                }
                                <button
                                    onClick={handleFileUpload}
                                    className={isRunning ? "bg-[#F92739] rounded-xl text-white py-2 px-10 ml-[10rem] sm:ml-[13rem] mt-[3.8rem] mb-4" : "bg-[#F92739] rounded-xl text-white py-2 px-10 ml-[10rem] sm:ml-[13rem] mt-[34rem] mb-4"}
                                >
                                    Finish
                                </button>
                            </div>
                        </>
                        : " "}
                </>
            )}
            <div className={currentPage === "crop-img" ? "flex justify-center mt-[7.8rem] mb-3 sm:mb-10" : "flex justify-center mt-[3.8rem] sm:mb-10"}>
                <div className={
                    page === 0
                        ? " text-[#F92739] font-medium"
                        : "text-gray-300 cursor-pointer"
                } >
                    <CircleIcon sx={{ height: "8px" }} />
                </div>
                <div className={
                    page === 1
                        ? "text-[#F92739] font-medium -ml-1"
                        : "text-gray-300 cursor-pointer -ml-1"
                } >
                    <CircleIcon sx={{ height: "8px" }} />
                </div>
                <div className={
                    page === 2 || page === 3
                        ? "text-[#F92739] font-medium -ml-1"
                        : "text-gray-300 cursor-pointer -ml-1"
                } >
                    <CircleIcon sx={{ height: "8px" }} />
                </div>
                <div className={
                    page === 4
                        ? "text-[#F92739] font-medium -ml-1"
                        : "text-gray-300 cursor-pointer -ml-1"
                } >
                    <CircleIcon sx={{ height: "8px" }} />
                </div>
                <div className={
                    page === 5 || page === 6
                        ? "text-[#F92739] font-medium -ml-1"
                        : "text-gray-300 cursor-pointer -ml-1"
                } >
                    <CircleIcon sx={{ height: "8px" }} />
                </div>
                <div className={
                    page === 7 || page === 8
                        ? "text-[#F92739] font-medium -ml-1"
                        : "text-gray-300 cursor-pointer -ml-1"
                } >
                    <CircleIcon sx={{ height: "8px" }} />
                </div>
                <div className={
                    page === 9
                        ? "text-[#F92739] font-medium -ml-1"
                        : "text-gray-300 cursor-pointer -ml-1"
                } >
                    <CircleIcon sx={{ height: "8px" }} />
                </div>
                <div className={
                    page === 10 || page === 11
                        ? "text-[#F92739] font-medium -ml-1"
                        : "text-gray-300 cursor-pointer -ml-1"
                } >
                    <CircleIcon sx={{ height: "8px" }} />
                </div>
            </div >
        </>
    )
}

export default AadharForm