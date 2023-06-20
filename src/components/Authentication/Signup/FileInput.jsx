import { useRef } from "react";

// eslint-disable-next-line react/prop-types
function FileInput({ onImageSelected }) {
    const inputRef = useRef();

    const handleOnChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function () {
                onImageSelected(reader.result);
            };
        }
    };

    const onChooseImg = (e) => {
        e.preventDefault()
        inputRef.current.click();
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleOnChange}
                style={{ display: "none" }}
            />

            <button className="text-sm ml-2" onClick={onChooseImg}>
                Upload from Gallery
            </button>
        </div>
    );
}

export default FileInput;
