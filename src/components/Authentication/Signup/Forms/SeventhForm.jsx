import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import { useContext, useRef, useState } from "react";
import { registrationContext } from "../../../../context/formContext";
import FileInput from '../FileInput';
import ImageCropper from '../ImageCropper';
import { uploadImage, uploadVideo } from '../../../../api';

const SeventhForm = () => {
  const { page, setPage } = useContext(registrationContext)
  const [isOpen, setIsOpen] = useState("");

  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgAfterCrop, setImgAfterCrop] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const inputVideoRef = useRef();

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

  console.log(imgAfterCrop)

  // Handle Cancel Button Click
  const onCropCancel = () => {
    setCurrentPage("choose-img");
    setImage("");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const video = document.createElement('video');

    video.preload = 'metadata';
    video.onloadedmetadata = () => {
      if (video.duration > 60) {
        alert('The video duration should be within 1 minute.');
      } else {
        setSelectedFile(file);
      }
    };

    video.src = URL.createObjectURL(file);
  };

  const handleFileUpload = async (event) => {
    event.preventDefault();

    if (isOpen === 'photo') {
      await uploadImage(imgAfterCrop)
        .then((response) => {
          console.log(response)
          setPage(page === 10 ? 0 : page + 1);
        })
        .catch((err) => {
          console.log(err)
        })
    }

    if (isOpen === 'video') {
      if (selectedFile) {

        const formData = new FormData();
        formData.append("video", selectedFile);

        try {
          await uploadVideo(formData).then((response) => {
            console.log(response)
            setPage(page === 10 ? 0 : page + 1);
          })
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      }
    }
  };

  const onChooseVideo = (e) => {
    e.preventDefault()
    inputVideoRef.current.click();
  };

  const handleNext = () => {
    setPage(page === 10 ? 0 : page + 1);
  };
  return (
    <>
      <form className="w-72 ml-12 mt-16">

        {currentPage === "choose-img" ? (
          <>
            <div onClick={() => setIsOpen("photo")} className="bg-[#F92739] text-center cursor-pointer text-white w-full py-3 rounded-xl mb-6">
              Upload Photos
            </div>

            <div onClick={() => setIsOpen("video")} className="bg-[#F92739] text-center cursor-pointer text-white w-full py-3 rounded-xl mb-6">
              Upload Videos
            </div>
            {isOpen === "photo" ?
              <>
                <div className="w-full py-3 rounded-xl mb-6 border border-[#D8D8D8] bg-white h-36">
                  <button type="button" className="border border-[#D8D8D8] rounded-2xl w-52 py-3 mt-8 ml-[2.4rem] flex">
                    <div className='mx-auto flex'>
                      <LocalSeeOutlinedIcon />
                      <FileInput setImage={setImage} onImageSelected={onImageSelected} />
                    </div>
                  </button>
                </div>
              </>
              : isOpen === "video" ?
                <>
                  {selectedFile ?
                    <>
                      <div className="w-full py-3 rounded-xl mb-6 border border-[#D8D8D8] bg-white h-56">
                        <button type="button" className="rounded-2xl w-52 py-3 mt-7 ml-[2.4rem]">
                          <div className='text-[#A0A0A0]'>
                            <MovieCreationOutlinedIcon />
                          </div>
                          <p className='mt-2 font-oxygen font-medium'>
                            {selectedFile?.name}
                          </p>
                          <div onClick="" className='text-[#A0A0A0] border border-[#D8D8D8] font-oxygen bg-white px-6 py-2 rounded-xl mt-5'>Uploading</div>
                        </button>
                      </div>
                    </>
                    :
                    <div className="w-full py-3 rounded-xl mb-6 border border-[#D8D8D8] bg-white h-36">
                      <button type="button" className="border border-[#D8D8D8] rounded-2xl w-52 py-3 mt-8 ml-[2.4rem]">
                        <MovieCreationOutlinedIcon />
                        <button className="text-sm ml-3" onClick={onChooseVideo}>Upload from Gallery</button>
                        <input type="file" accept="video/*" name='video' ref={inputVideoRef} onChange={handleFileChange} style={{ display: "none" }} />
                      </button>
                    </div>
                  }
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
                <div className="w-full py-3 rounded-xl mb-6 border border-[#D8D8D8] bg-white h-72">
                  <button type="button" className="rounded-2xl w-52 py-3 mt-8 ml-[2.4rem] flex">
                    <div className='mx-auto'>
                      <div>
                        <img src={imgAfterCrop} className="mx-auto rounded-xl h-28 w-28" />
                      </div>

                      <button
                        onClick={() => {
                          setCurrentPage("crop-img");
                        }}
                        className="text-[#A0A0A0] border border-[#D8D8D8] font-oxygen bg-white px-6 py-2 rounded-xl mt-9"
                      >
                        Crop
                      </button>

                      <button
                        onClick={() => {
                          setCurrentPage("choose-img");
                          setImage("");
                        }}
                        className="text-[#A0A0A0] border border-[#D8D8D8] font-oxygen bg-white px-3 py-2 rounded-xl ml-3"
                      >
                        New Image
                      </button>
                    </div>
                  </button>
                </div>
              </>
              : isOpen === "video" ?
                <>
                  <div className="w-full py-3 rounded-xl mb-6 border border-[#D8D8D8] bg-white h-36">
                    <button type="button" className="border border-[#D8D8D8] rounded-2xl w-52 py-3 mt-8 ml-[2.4rem]">
                      <MovieCreationOutlinedIcon />
                      <span className="text-sm ml-3">Upload from Gallery</span>
                      <input type="file" accept="video/*" onChange={handleFileChange} />
                      <button type="submit">Upload</button>
                    </button>
                  </div>
                </>
                : " "}
          </>
        )}
        {currentPage != "crop-img" ? <div className="flex mt-10">
          <button
            onClick={handleNext}
            className="rounded-xl text-[#A0A0A0] px-4 bg-white w-16 h-8 mt-1 text-sm border border-[#D8D8D8]"
          >
            Skip
          </button>

          <button
            onClick={handleFileUpload}
            className="bg-[#F92739] rounded-xl text-white py-2 px-10 ml-20"
          >
            Continue
          </button>
        </div>
          : " "}



        <div className="flex items-center justify-between"></div>
      </form>
    </>
  );
};

export default SeventhForm;