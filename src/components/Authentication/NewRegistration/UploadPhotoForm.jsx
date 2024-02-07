import { useContext } from "react";
import { registrationContext } from "../../../context/formContext";
import { useState } from "react";
import FileInput from "./FileInput";
import ImageCropper from "./ImageCropper";
import ImageCropperMobile from "./ImageCropperMobile";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { savePhotos } from "../../../api";

const UploadPhotoForm = () => {
  const { page, setPage } = useContext(registrationContext)

  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgNumber, setimgNumber] = useState(0)
  const [imgAfterCrop1, setImgAfterCrop1] = useState("");
  const [imgAfterCrop2, setImgAfterCrop2] = useState("");
  const [imgAfterCrop3, setImgAfterCrop3] = useState("");
  const [imgAfterCrop4, setImgAfterCrop4] = useState("");
  const [isOpen, setIsOpen] = useState("");
  const [image, setImage] = useState("");

  // Invoked when new image file is selected
  const onImageSelected = (selectedImg) => {
    setImage(selectedImg);
    setIsOpen(" ")
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
  const onCropDone = (imgCroppedArea, imgIdentifier) => {
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

      // Update the image state based on the identifier
      switch (imgIdentifier) {
        case 1:
          setImgAfterCrop1(compressedDataURL);
          break;
        case 2:
          setImgAfterCrop2(compressedDataURL);
          break;
        case 3:
          setImgAfterCrop3(compressedDataURL);
          break;
        case 4:
          setImgAfterCrop4(compressedDataURL);
          break;
        default:
          break;
      }

      setCurrentPage("choose-img");
    };
  };

  // Handle Cancel Button Click
  const onCropCancel = () => {
    setCurrentPage("choose-img");
    setImage("");
  };

  function dataURItoBlob(dataURI) {
    // Convert base64 to Blob
    const byteString = atob(dataURI.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg' }); // Adjust the type based on your image format
  }

  const handleData = async (e) => {
    e.preventDefault()

    // Create FormData object
    const formData = new FormData();

    // Append imgAfterCrop1 only if it exists
    if (imgAfterCrop1) {
      const blob1 = dataURItoBlob(imgAfterCrop1);
      formData.append('files', blob1);
    }

    // Append imgAfterCrop2 only if it exists
    if (imgAfterCrop2) {
      const blob2 = dataURItoBlob(imgAfterCrop2);
      formData.append('files', blob2);
    }

    // Append imgAfterCrop3 only if it exists
    if (imgAfterCrop3) {
      const blob3 = dataURItoBlob(imgAfterCrop3);
      formData.append('files', blob3);
    }

    // Append imgAfterCrop4 only if it exists
    if (imgAfterCrop4) {
      const blob4 = dataURItoBlob(imgAfterCrop4);
      formData.append('files', blob4);
    }

    await savePhotos(formData)
      .then(() => {
        if (imgAfterCrop1) {
          localStorage.setItem("p1", imgAfterCrop1)
        }

        if (imgAfterCrop2) {
          localStorage.setItem("p2", imgAfterCrop2)
        }

        if (imgAfterCrop3) {
          localStorage.setItem("p3", imgAfterCrop3)
        }

        if (imgAfterCrop4) {
          localStorage.setItem("p4", imgAfterCrop4)
        }
        setPage(page === 10 ? 0 : page + 1);
      })
      .catch((err) => {
        console.log(err)
      })

  }

  return (
    <>
      {currentPage === "crop-img" ? "" :
        <div className="px-4 mt-5 flex">
          <button type="button" onClick={() => setPage(page - 1)}>
            <KeyboardBackspaceOutlinedIcon />
          </button>
          <div className="font-bold ml-auto">
            6/7
          </div>
        </div> }
      <div className="flex justify-center mt-10 sm:mt-20">
        <div>
          <div className="relative right-20">
            <svg width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="33" cy="18" r="18" fill="#FE1940" fillOpacity="0.6" />
              <circle cx="18" cy="18" r="18" fill="#FF7901" fillOpacity="0.6" />
            </svg>
            <div className="absolute top-0 left-16 w-64 -ml-20">
              <p className="text-[21px] font-semibold text-center">Show off your style. <br />
                It’s all about impression !</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <p className="text-[12px]">
          Add your best and latest photo’s of you have.
        </p>
      </div>
      <form className="w-72 ml-3.5 sm:ml-12" onSubmit={handleData}>

        {currentPage === "choose-img" ? (
          <>
            <div className="flex flex-wrap w-72 space-x-4 mt-8">
              <button onClick={() => {
                setIsOpen("photo")
                window.scrollTo(0, 600)
                setimgNumber(1)
              }} type="button" className={imgAfterCrop1 ? "bg-[#D7D7D7] w-[136px] h-[116px] rounded-xl flex justify-center" : "bg-[#D7D7D7] w-[136px] py-12 rounded-xl flex justify-center"}>
                {imgAfterCrop1 ? <img src={imgAfterCrop1} className="w-full h-full object-cover rounded-xl" /> :
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2931 6.73708C13.5021 7.15508 13.6256 7.63008 13.6256 8.13358C13.6161 9.8151 12.2956 11.1926 10.6236 11.2401C10.5571 11.2306 10.4716 11.2306 10.3956 11.2401C8.72358 11.1831 7.39355 9.8151 7.39355 8.13358C7.39355 6.41408 8.78058 5.01758 10.5096 5.01758" stroke="#FE1940" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.9027 17.5114C15.2117 19.0599 12.9697 20.0004 10.4997 20.0004C8.02968 20.0004 5.78768 19.0599 4.09668 17.5114C4.19168 16.6184 4.76168 15.7444 5.77818 15.0604C8.38118 13.3314 12.6372 13.3314 15.2212 15.0604C16.2377 15.7444 16.8077 16.6184 16.9027 17.5114Z" stroke="#FE1940" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.9 4.8C1.7125 6.3865 1 8.3625 1 10.5C1 15.744 5.256 20 10.5 20C15.744 20 20 15.744 20 10.5C20 5.256 15.744 1 10.5 1C9.1415 1 7.84 1.285 6.6715 1.8075" stroke="#FE1940" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>}
              </button>
              <button onClick={() => {
                setIsOpen("photo")
                window.scrollTo(0, 600)
                setimgNumber(2)
              }} type="button" className={imgAfterCrop2 ? "bg-[#D7D7D7] w-[136px] h-[116px] rounded-xl flex justify-center" : "bg-[#D7D7D7] w-[136px] py-12 rounded-xl flex justify-center"}>
                {imgAfterCrop2 ? <img src={imgAfterCrop2} className="w-full h-full object-cover rounded-xl" /> :
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.56116 0C6.86049 0 6.21971 0.39512 5.90508 1.02117L5.17668 2.47054H3.0891C1.38304 2.47054 0 3.85356 0 5.55963V15.4455C0 17.1515 1.38304 18.5346 3.0891 18.5346H9.38469C9.18459 18.1431 9.02132 17.7297 8.89948 17.2989H3.0891C2.06546 17.2989 1.23564 16.4691 1.23564 15.4455V5.55963C1.23564 4.53599 2.06546 3.70617 3.0891 3.70617H5.55764C5.7912 3.70617 6.0048 3.57447 6.10968 3.36578L7.00914 1.57603C7.11402 1.36735 7.32761 1.23564 7.56116 1.23564H12.2124C12.4464 1.23564 12.6603 1.36788 12.765 1.57721L13.6585 3.36459C13.7631 3.57394 13.977 3.70617 14.211 3.70617H16.6811C17.7048 3.70617 18.5345 4.53599 18.5345 5.55963V9.39347C18.9768 9.62004 19.3908 9.89363 19.7702 10.2076V5.55963C19.7702 3.85357 18.3872 2.47054 16.6811 2.47054H14.593L13.8702 1.02471C13.5563 0.396714 12.9145 0 12.2124 0H7.56116Z" fill="#FE1940" />
                    <path d="M9.87908 4.94336C12.1973 4.94336 14.1427 6.53938 14.6766 8.69257C14.2601 8.7391 13.8549 8.82328 13.4646 8.94161C13.0471 7.35172 11.6 6.179 9.87908 6.179C7.8318 6.179 6.17216 7.83865 6.17216 9.88588C6.17216 11.6069 7.34489 13.0539 8.9348 13.4715C8.81647 13.8618 8.73229 14.267 8.68577 14.6835C6.53257 14.1497 4.93652 12.2042 4.93652 9.88588C4.93652 7.15622 7.14938 4.94336 9.87908 4.94336Z" fill="#FE1940" />
                    <path d="M20.9996 15.4451C20.9996 18.5161 18.5102 21.0055 15.4392 21.0055C12.3684 21.0055 9.87891 18.5161 9.87891 15.4451C9.87891 12.3742 12.3684 9.88477 15.4392 9.88477C18.5102 9.88477 20.9996 12.3742 20.9996 15.4451ZM16.057 12.9739C16.057 12.6327 15.7805 12.356 15.4392 12.356C15.0981 12.356 14.8214 12.6327 14.8214 12.9739V14.8273H12.968C12.6268 14.8273 12.3501 15.104 12.3501 15.4451C12.3501 15.7863 12.6268 16.063 12.968 16.063H14.8214V17.9164C14.8214 18.2576 15.0981 18.5342 15.4392 18.5342C15.7805 18.5342 16.057 18.2576 16.057 17.9164V16.063H17.9105C18.2518 16.063 18.5283 15.7863 18.5283 15.4451C18.5283 15.104 18.2518 14.8273 17.9105 14.8273H16.057V12.9739Z" fill="#FE1940" />
                  </svg>}
              </button>
            </div>

            <div className="flex flex-wrap w-72 space-x-4 mt-4 mb-10">
              <button onClick={() => {
                setIsOpen("photo")
                window.scrollTo(0, 600)
                setimgNumber(3)
              }} type="button" className={imgAfterCrop3 ? "bg-[#D7D7D7] w-[136px] h-[116px] rounded-xl flex justify-center" : "bg-[#D7D7D7] w-[136px] py-12 rounded-xl flex justify-center"}>
                {imgAfterCrop3 ? <img src={imgAfterCrop3} className="w-full h-full object-cover rounded-xl" /> :
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.56116 0C6.86049 0 6.21971 0.39512 5.90508 1.02117L5.17668 2.47054H3.0891C1.38304 2.47054 0 3.85356 0 5.55963V15.4455C0 17.1515 1.38304 18.5346 3.0891 18.5346H9.38469C9.18459 18.1431 9.02132 17.7297 8.89948 17.2989H3.0891C2.06546 17.2989 1.23564 16.4691 1.23564 15.4455V5.55963C1.23564 4.53599 2.06546 3.70617 3.0891 3.70617H5.55764C5.7912 3.70617 6.0048 3.57447 6.10968 3.36578L7.00914 1.57603C7.11402 1.36735 7.32761 1.23564 7.56116 1.23564H12.2124C12.4464 1.23564 12.6603 1.36788 12.765 1.57721L13.6585 3.36459C13.7631 3.57394 13.977 3.70617 14.211 3.70617H16.6811C17.7048 3.70617 18.5345 4.53599 18.5345 5.55963V9.39347C18.9768 9.62004 19.3908 9.89363 19.7702 10.2076V5.55963C19.7702 3.85357 18.3872 2.47054 16.6811 2.47054H14.593L13.8702 1.02471C13.5563 0.396714 12.9145 0 12.2124 0H7.56116Z" fill="#FE1940" />
                    <path d="M9.87908 4.94336C12.1973 4.94336 14.1427 6.53938 14.6766 8.69257C14.2601 8.7391 13.8549 8.82328 13.4646 8.94161C13.0471 7.35172 11.6 6.179 9.87908 6.179C7.8318 6.179 6.17216 7.83865 6.17216 9.88588C6.17216 11.6069 7.34489 13.0539 8.9348 13.4715C8.81647 13.8618 8.73229 14.267 8.68577 14.6835C6.53257 14.1497 4.93652 12.2042 4.93652 9.88588C4.93652 7.15622 7.14938 4.94336 9.87908 4.94336Z" fill="#FE1940" />
                    <path d="M20.9996 15.4451C20.9996 18.5161 18.5102 21.0055 15.4392 21.0055C12.3684 21.0055 9.87891 18.5161 9.87891 15.4451C9.87891 12.3742 12.3684 9.88477 15.4392 9.88477C18.5102 9.88477 20.9996 12.3742 20.9996 15.4451ZM16.057 12.9739C16.057 12.6327 15.7805 12.356 15.4392 12.356C15.0981 12.356 14.8214 12.6327 14.8214 12.9739V14.8273H12.968C12.6268 14.8273 12.3501 15.104 12.3501 15.4451C12.3501 15.7863 12.6268 16.063 12.968 16.063H14.8214V17.9164C14.8214 18.2576 15.0981 18.5342 15.4392 18.5342C15.7805 18.5342 16.057 18.2576 16.057 17.9164V16.063H17.9105C18.2518 16.063 18.5283 15.7863 18.5283 15.4451C18.5283 15.104 18.2518 14.8273 17.9105 14.8273H16.057V12.9739Z" fill="#FE1940" />
                  </svg>}
              </button>
              <button onClick={() => {
                setIsOpen("photo")
                window.scrollTo(0, 600)
                setimgNumber(4)
              }} type="button" className={imgAfterCrop4 ? "bg-[#D7D7D7] w-[136px] h-[116px] rounded-xl flex justify-center" : "bg-[#D7D7D7] w-[136px] py-12 rounded-xl flex justify-center"}>
                {imgAfterCrop4 ? <img src={imgAfterCrop4} className="w-full h-full object-cover rounded-xl" /> :
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.56116 0C6.86049 0 6.21971 0.39512 5.90508 1.02117L5.17668 2.47054H3.0891C1.38304 2.47054 0 3.85356 0 5.55963V15.4455C0 17.1515 1.38304 18.5346 3.0891 18.5346H9.38469C9.18459 18.1431 9.02132 17.7297 8.89948 17.2989H3.0891C2.06546 17.2989 1.23564 16.4691 1.23564 15.4455V5.55963C1.23564 4.53599 2.06546 3.70617 3.0891 3.70617H5.55764C5.7912 3.70617 6.0048 3.57447 6.10968 3.36578L7.00914 1.57603C7.11402 1.36735 7.32761 1.23564 7.56116 1.23564H12.2124C12.4464 1.23564 12.6603 1.36788 12.765 1.57721L13.6585 3.36459C13.7631 3.57394 13.977 3.70617 14.211 3.70617H16.6811C17.7048 3.70617 18.5345 4.53599 18.5345 5.55963V9.39347C18.9768 9.62004 19.3908 9.89363 19.7702 10.2076V5.55963C19.7702 3.85357 18.3872 2.47054 16.6811 2.47054H14.593L13.8702 1.02471C13.5563 0.396714 12.9145 0 12.2124 0H7.56116Z" fill="#FE1940" />
                    <path d="M9.87908 4.94336C12.1973 4.94336 14.1427 6.53938 14.6766 8.69257C14.2601 8.7391 13.8549 8.82328 13.4646 8.94161C13.0471 7.35172 11.6 6.179 9.87908 6.179C7.8318 6.179 6.17216 7.83865 6.17216 9.88588C6.17216 11.6069 7.34489 13.0539 8.9348 13.4715C8.81647 13.8618 8.73229 14.267 8.68577 14.6835C6.53257 14.1497 4.93652 12.2042 4.93652 9.88588C4.93652 7.15622 7.14938 4.94336 9.87908 4.94336Z" fill="#FE1940" />
                    <path d="M20.9996 15.4451C20.9996 18.5161 18.5102 21.0055 15.4392 21.0055C12.3684 21.0055 9.87891 18.5161 9.87891 15.4451C9.87891 12.3742 12.3684 9.88477 15.4392 9.88477C18.5102 9.88477 20.9996 12.3742 20.9996 15.4451ZM16.057 12.9739C16.057 12.6327 15.7805 12.356 15.4392 12.356C15.0981 12.356 14.8214 12.6327 14.8214 12.9739V14.8273H12.968C12.6268 14.8273 12.3501 15.104 12.3501 15.4451C12.3501 15.7863 12.6268 16.063 12.968 16.063H14.8214V17.9164C14.8214 18.2576 15.0981 18.5342 15.4392 18.5342C15.7805 18.5342 16.057 18.2576 16.057 17.9164V16.063H17.9105C18.2518 16.063 18.5283 15.7863 18.5283 15.4451C18.5283 15.104 18.2518 14.8273 17.9105 14.8273H16.057V12.9739Z" fill="#FE1940" />
                  </svg>}
              </button >
            </div >


            <div className='flex justify-center'>
              <button
                type="submit"
                className="bg-[#FE1940] rounded-xl textWhite py-2.5 px-32 text-white"
              >
                Upload
              </button>
            </div>

            <p className="mt-8 flex justify-center text-[12px] text-[#4D4D4D]">Add at-least <span className="font-bold">&nbsp;two photos&nbsp;</span> of you</p>
          </>
        ) : currentPage === "crop-img" ? (
          <>
            <div className='mt-[29rem] -ml-1.5 sm:block hidden'>
              <ImageCropper
                image={image}
                onCropDone={onCropDone}
                imgIdentifier={imgNumber}
                onCropCancel={onCropCancel} />
            </div>
            <div className='mt-[29rem] -ml-1 sm:hidden block'>
              <ImageCropperMobile
                image={image}
                onCropDone={onCropDone}
                imgIdentifier={imgNumber}
                onCropCancel={onCropCancel} />
            </div>
          </>
        ) : ""}

      </form >

      <div className={currentPage === "crop-img" ? 'flex justify-center mt-[110px]' : 'flex justify-center mt-[130px]'}>
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4635 0H5.48785C2.19514 0 0 2.19514 0 5.48785V12.0733C0 15.366 2.19514 17.5611 5.48785 17.5611V19.8989C5.48785 20.777 6.46468 21.3038 7.18908 20.8099L12.0733 17.5611H16.4635C19.7563 17.5611 21.9514 15.366 21.9514 12.0733V5.48785C21.9514 2.19514 19.7563 0 16.4635 0ZM10.9757 13.3574C10.5147 13.3574 10.1525 12.9843 10.1525 12.5343C10.1525 12.0843 10.5147 11.7111 10.9757 11.7111C11.4367 11.7111 11.7989 12.0843 11.7989 12.5343C11.7989 12.9843 11.4367 13.3574 10.9757 13.3574ZM12.3586 8.80252C11.9306 9.08789 11.7989 9.27447 11.7989 9.58179V9.81228C11.7989 10.2623 11.4257 10.6355 10.9757 10.6355C10.5257 10.6355 10.1525 10.2623 10.1525 9.81228V9.58179C10.1525 8.3086 11.0855 7.68299 11.4367 7.44152C11.8428 7.16713 11.9745 6.98054 11.9745 6.69517C11.9745 6.14639 11.5245 5.69639 10.9757 5.69639C10.4269 5.69639 9.97691 6.14639 9.97691 6.69517C9.97691 7.14518 9.60373 7.51835 9.15373 7.51835C8.70373 7.51835 8.33055 7.14518 8.33055 6.69517C8.33055 5.23541 9.51593 4.05003 10.9757 4.05003C12.4355 4.05003 13.6208 5.23541 13.6208 6.69517C13.6208 7.9464 12.6989 8.57203 12.3586 8.80252Z" fill="#3E3E3E" />
        </svg>
      </div>
      <div className='flex justify-center text-center'>
        <p className="text-[13px] text-[#4D4D4D]">
          Your photos are copy-protected. <br />
          Add more pics for a better profile reach.
        </p>
      </div>

      {isOpen === "photo" ?
        <>
          <div className='-mt-[108px] -ml-0.5 sm:block hidden'>
            <div className='absolute w-96 py-3 sm:rounded-xl border border-[#D8D8D8] bg-[#FE1940] h-16 -mt-6'>
              <p className='font-oxygen text-white text-[14px] text-center font-semibold'>
                Add Photo
              </p>
              <div onClick={() => setIsOpen(" ")} className='text-white ml-[21.5rem] -mt-6 cursor-pointer'>
                <KeyboardArrowDownOutlinedIcon />
              </div>
            </div>
            <div className='absolute w-96 py-3 rounded-b-xl border border-[#D8D8D8] bg-white h-36 mt-6'>
              <button type="button" className="border border-[#FF7901] rounded-2xl w-52 py-3 mt-8 ml-[5.3rem] flex">
                <div className='mx-auto flex'>
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 31H20.5C28 31 31 28 31 20.5V11.5C31 4 28 1 20.5 1H11.5C4 1 1 4 1 11.5V20.5C1 28 4 31 11.5 31Z" stroke="#FF7901" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.5 13C13.1569 13 14.5 11.6569 14.5 10C14.5 8.34314 13.1569 7 11.5 7C9.84314 7 8.5 8.34314 8.5 10C8.5 11.6569 9.84314 13 11.5 13Z" stroke="#FF7901" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.00488 26.4248L9.39988 21.4598C10.5849 20.6648 12.2949 20.7548 13.3598 21.6698L13.8548 22.1048C15.0248 23.1098 16.9148 23.1098 18.0848 22.1048L24.3248 16.7498C25.4948 15.7448 27.3848 15.7448 28.5548 16.7498L30.9998 18.8498" stroke="#FF7901" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <FileInput setImage={setImage} onImageSelected={onImageSelected} />
                </div>
              </button>
            </div>
          </div>

          <div className="sm:hidden block -mt-36">
            <div className='absolute w-80 py-3 rounded-t-xl border border-[#D8D8D8] bg-[#FE1940] h-12 -mt-6'>
              <p className='font-oxygen text-white text-[14px] text-center font-semibold'>
                Add Photo
              </p>
              <div onClick={() => setIsOpen(" ")} className='text-white text-end -mt-6 cursor-pointer'>
                <KeyboardArrowDownOutlinedIcon />
              </div>
            </div>
            <div className='absolute w-80 py-3 rounded-b-xl border border-[#D8D8D8] bg-white h-36 mt-6'>
              <button type="button" className="border border-[#FF7901] rounded-2xl w-52 py-3 mt-8 flex mx-auto">
                <div className='mx-auto flex'>
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 31H20.5C28 31 31 28 31 20.5V11.5C31 4 28 1 20.5 1H11.5C4 1 1 4 1 11.5V20.5C1 28 4 31 11.5 31Z" stroke="#FF7901" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.5 13C13.1569 13 14.5 11.6569 14.5 10C14.5 8.34314 13.1569 7 11.5 7C9.84314 7 8.5 8.34314 8.5 10C8.5 11.6569 9.84314 13 11.5 13Z" stroke="#FF7901" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.00488 26.4248L9.39988 21.4598C10.5849 20.6648 12.2949 20.7548 13.3598 21.6698L13.8548 22.1048C15.0248 23.1098 16.9148 23.1098 18.0848 22.1048L24.3248 16.7498C25.4948 15.7448 27.3848 15.7448 28.5548 16.7498L30.9998 18.8498" stroke="#FF7901" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <FileInput setImage={setImage} onImageSelected={onImageSelected} />
                </div>
              </button>
            </div>
          </div>
        </>
        : " "}
    </>
  )
}

export default UploadPhotoForm