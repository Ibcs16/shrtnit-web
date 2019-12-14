import React, { useState, useEffect } from "react";
import { CustomInputContainer } from "./styles";
import "../../styles/animations.css";
import { IoMdSend, IoMdLock, IoMdUnlock } from "react-icons/io";

export default function CustomInput({
  error,
  action: handleSubmitUrl,
  borderRadius,
  haveLeftIcon = false,
  haveRightIcon = false
}) {
  const [newURL, setNewURL] = useState({
    longUrl: "",
    isPrivate: false
  });
  const [errorClass, setErrorClass] = useState("");

  const handleInputChange = e => {
    setNewURL({ ...newURL, longUrl: e.target.value });
  };

  const handleSetPrivate = isPrivate => {
    setNewURL({ ...newURL, isPrivate: !isPrivate });
  };

  useEffect(() => {
    // setErrorClass('nope');
    if (error.message) {
      setErrorClass("nope");
    }

    const timer = setTimeout(() => {
      setErrorClass("");
    }, 700);
    return () => clearTimeout(timer);
  }, [error]);

  return (
    <>
      <CustomInputContainer
        borderRadius={borderRadius}
        onSubmit={e => handleSubmitUrl(e, newURL)}
        id="customInputForm"
        className={errorClass}
      >
        <div>
          {haveLeftIcon && (
            <button
              data-tip={
                !newURL.isPrivate
                  ? "Make this URL private"
                  : "Make this URL public"
              }
              type="button"
            >
              {!newURL.isPrivate && (
                <IoMdUnlock
                  onClick={() => handleSetPrivate(newURL.isPrivate)}
                  size={24}
                  color="rgba(0,0,0,.2)"
                />
              )}
              {newURL.isPrivate && (
                <IoMdLock
                  onClick={() => handleSetPrivate(newURL.isPrivate)}
                  size={24}
                  color="rgb(4,211,97)"
                />
              )}
            </button>
          )}
        </div>
        <input
          placeholder="https://some-looooooooooooooooong-url.com"
          type="url"
          name="longUrl"
          required
          defaultValue=""
          value={newURL.longUrl || ""}
          onChange={handleInputChange}
        />
        <div>
          <button type="submit">
            <IoMdSend color="rgb(4,211,97)" size={24} />
          </button>
        </div>
      </CustomInputContainer>
    </>
  );
}
