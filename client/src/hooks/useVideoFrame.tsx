import { useState } from 'react';

function useVideoFrame() {
  const [isOpenFrame, setIsOpenFrame] = useState(false);
  const openVideoFrame = () => setIsOpenFrame(true);
  const closeVideoFrame = () => setIsOpenFrame(false);

  return { isOpenFrame, openVideoFrame, closeVideoFrame };
}

export default useVideoFrame;
