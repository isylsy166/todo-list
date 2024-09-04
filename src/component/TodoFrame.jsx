
import { useContext, useState } from 'react';
import style from '../css/todoFrame.module.css'
import { CaptureContext } from '../context/CaptureContext';
import { IoCamera } from 'react-icons/io5';
import { RiSettings4Fill } from 'react-icons/ri';
import RightMenuBar from './RightMenuBar';

export default function TodoFrame({children}) {

  const [isSetting, setIsSetting] = useState(false);
  const {captureRef, handleCaptureClick} = useContext(CaptureContext);
  

  return (
    <>
      <div className={style.menuBar}>
          <IoCamera size={30} color='#a19e9e' onClick={handleCaptureClick} />
          <RiSettings4Fill size={30} className={style.icon_setting} onClick={() => setIsSetting((mode) => !mode)} />
      </div>

      <div className={style.frame} ref={captureRef}>
          <div className={style.box}>
            {children}
          </div>
      </div>
      <RightMenuBar isVisible={isSetting}/>
    </>
  )
}

