import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useContext, useEffect, useState } from "react";
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';
import { registrationContext } from '../../../context/formContext';
import { uploadImage } from '../../../api';
import FileInput from '../Signup/FileInput';
import ImageCropper from './ImageCropper';
import CircleIcon from '@mui/icons-material/Circle';
import { Toaster, toast } from 'react-hot-toast';

const SeventhForm = () => {
  const { page, setPage } = useContext(registrationContext)
  const [isOpen, setIsOpen] = useState("");

  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgAfterCrop, setImgAfterCrop] = useState("");
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

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

      setImgAfterCrop(compressedDataURL);
      setCurrentPage("img-cropped");
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

    if (imgAfterCrop === "") {
      toast.error("Upload Image")
    }
    else {
      if (isOpen === 'photo') {
        await uploadImage(imgAfterCrop, {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
            setFilled(progress);
            console.log(progress)
          },
        })
          .then((response) => {
            console.log(response)
            setPage(page === 10 ? 0 : page + 1);
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  };

  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled(prev => prev += 4), 50)
    }
  }, [filled, isRunning])
  return (
    <>
      <form className="w-72 ml-3.5 sm:ml-12 mt-16">
        <Toaster />
        {currentPage === "choose-img" ? (
          <>
            <div onClick={() => setIsOpen("photo")} className="bg-[#F92739] text-center cursor-pointer text-white w-full py-3 rounded-xl mb-6">
              Upload Photos
            </div>
            <div className="w-full py-3 rounded-xl mb-6 border border-[#D8D8D8] bg-white h-fit mt-16">
              <div className='font-oxygen text-[12px] text-justify p-4'>
                <p className='font-bold'>
                  Guidelines to add Pictures
                </p>
                <p className='mt-4'>
                  Celebrity images, wallpapers, screenshots are not allowed. This activity will lead to permanent termination of profile.
                </p>
                <p className='mt-2'>
                  Group photos are not allowed.
                </p>
                <p className='mt-2'>
                  Text’s, Graphics, Watermark are not allowed in photos.
                </p>
                <p className='mt-2'>
                  Add your latest pictures with good quality.
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
                <div className='mt-[78px] mb-80'>
                  <div className='absolute w-96 -ml-12 py-3 rounded-xl border border-[#D8D8D8] bg-[#FE1940] h-16 -mt-6'>
                    <p className='font-oxygen text-white text-[14px] text-center font-semibold'>
                      Add Photo
                    </p>
                    <div onClick={() => setIsOpen(" ")} className='text-white ml-[21rem] -mt-6 cursor-pointer'>
                      <KeyboardArrowDownOutlinedIcon />
                    </div>
                  </div>
                  <div className='absolute w-96 -ml-12 py-3 rounded-b-xl border border-[#D8D8D8] bg-white h-36 mt-6'>
                    <button type="button" className="border border-[#D8D8D8] rounded-2xl w-52 py-3 mt-8 ml-[5.3rem] flex">
                      <div className='mx-auto flex'>
                        <LocalSeeOutlinedIcon />
                        <FileInput setImage={setImage} onImageSelected={onImageSelected} />
                      </div>
                    </button>
                  </div>
                </div>
              </>
              : " "}
          </>
        ) : currentPage === "crop-img" ? (
          <div className='mt-[29rem]'>
            <ImageCropper
              image={image}
              onCropDone={onCropDone}
              onCropCancel={onCropCancel}
            />
          </div>

        ) : (
          <>
            {isOpen === "photo" ?
              <>
                <div className="absolute -ml-12 w-[24rem] py-3 rounded-xl mb-6 -mt-[193px]">
                  <button className="rounded-2xl py-3 mt-8 ml-[2rem] flex">
                    <div className='mx-auto'>
                      <div className='mt-40'>
                        <img src={imgAfterCrop} className="mx-auto rounded-xl h-72 w-72 ml-4" />
                      </div>

                      <div
                        onClick={() => {
                          setCurrentPage("crop-img");
                          setIsRunning(false)
                          setFilled(0)
                        }}
                        className="-mt-[29.6rem] text-black -ml-[290px]"
                      >
                        <KeyboardBackspaceOutlinedIcon />
                      </div>
                    </div>
                  </button>

                  {isRunning &&
                    <div className="progressbar mt-[34rem] ml-[4.2rem]">
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
                    className={isRunning ? "bg-[#F92739] rounded-xl text-white py-2 px-10 ml-44 mt-[3.8rem]" : "bg-[#F92739] rounded-xl text-white py-2 px-10 ml-44 mt-[38rem]"}
                  >
                    Continue
                  </button>
                </div>
              </>
              : " "}
          </>
        )}
        {currentPage != "crop-img" && isOpen != 'photo' ?
          <div className="flex mt-10">
            <button
              onClick={handleFileUpload}
              className="bg-[#F92739] rounded-xl text-white py-2 px-10 ml-36"
            >
              Continue
            </button>
          </div>
          : " "
        }

        <div className="flex items-center justify-between"></div>
      </form>
      {isOpen != "photo" ? <div className="flex justify-center mt-[7.8rem] mb-10">
        <div className={
          page === 0
            ? " text-[#F92739] font-medium"
            : "text-gray-300 cursor-pointer"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 1
            ? "text-[#F92739] font-medium"
            : "text-gray-300 cursor-pointer"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
        <div className={
          page === 2
            ? "text-[#F92739] font-medium"
            : "text-gray-300 cursor-pointer"
        } >
          <CircleIcon sx={{ height: "8px" }} />
        </div>
      </div>
        : " "}
    </>
  );
};

export default SeventhForm;