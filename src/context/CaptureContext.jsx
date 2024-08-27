import html2canvas from "html2canvas";
import { createContext, useRef } from "react";

export const CaptureContext = createContext();

export function CaptureProvicer({children}){

    const captureRef = useRef(null);

    const handleCaptureClick = async () => {
      const element = captureRef.current;
  
      // 캡처를 수행하고 결과를 Canvas로 반환
      const canvas = await html2canvas(element);
  
      // Canvas를 이미지로 변환하여 다운로드
      const dataURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'capture.png';
      link.click();
    };

    return(
        <CaptureContext.Provider value={{captureRef, handleCaptureClick}}>
            {children}
        </CaptureContext.Provider>
    )
}