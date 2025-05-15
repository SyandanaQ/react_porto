import { useState } from "react";

function useSinglePopup() {
  const [popupId, setPopupId] = useState(null);
  const [zIndices, setZIndices] = useState({});
  const [maxZIndex, setMaxZIndex] = useState(1000);

  const openPopup = () => {
    if (popupId === null) {
      const newId = Date.now();
      setPopupId(newId);
      setZIndices({ [newId]: maxZIndex + 1 });
      setMaxZIndex((prev) => prev + 1);
    }
  };

  const closePopup = () => {
    if (popupId !== null) {
      setPopupId(null);
      setZIndices({});
    }
  };

  const bringToFront = () => {
    if (popupId !== null) {
      setZIndices((prev) => ({
        ...prev,
        [popupId]: maxZIndex + 1,
      }));
      setMaxZIndex((prev) => prev + 1);
    }
  };

  return {
    popupId,
    zIndex: popupId ? zIndices[popupId] : null,
    openPopup,
    closePopup,
    bringToFront,
  };
}

export default useSinglePopup;
