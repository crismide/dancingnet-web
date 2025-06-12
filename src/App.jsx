import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className="md:px-[208px] px-[18px] py-[36px] md:pt-[48px] flex flex-col md:gap-[41px] gap-10">
          <div className="flex flex-col md:gap-[84px] gap-[55px]">
          <div className="flex justify-end">
            Políticas
          </div>
    
          <div className="flex flex-col items-center text-center">
            <h1 className="md:text-[48px] text-[40px] font-extrabold bg-gradient-to-r from-[#C286F1] to-[#FFC46B] bg-clip-text text-transparent">
              DancingNet
            </h1>
            <p className="md:text-[24px] text-[20px] text-[#A1A1A1] italic mt-4">
              Un cuaderno de artista digital en la palma de tu mano
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex md:flex-row flex-col md:gap-[59px] gap-10">
          <div className="md:w-[402px] md:h-[300px] w-[310px] rounded-4xl bg-[#F4F4F4] p-10 flex flex-col justify-center text-center">
            <p className="text-[22px] md:mb-10 mb-5">Obtén el APK de la aplicación</p>
             <a
              href={`${import.meta.env.BASE_URL}dancingnet-release.apk`}
              download="DancingNet.apk"   // Optional: Custom filename for download
              className="flex items-center gap-2 bg-[#C286F1] hover:bg-[#b06ceb] text-white text-2xl py-4 px-6 rounded-2xl transition-colors"
            >
              {/* <FaDownload className="text-lg" /> */}
              <p>Descargar APK</p>
            </a>
          </div>
          <div className="md:w-[402px] md:h-[300px] w-[310px] rounded-4xl bg-[#F4F4F4] p-10 flex flex-col justify-center text-center">
            <p className="text-[22px] md:mb-10 mb-5">... o obtenerla en la Play Store</p>
            <p className="text-[22px] text-[#C286F1] font-bold">Estamos trabajando en ello, gracias por su paciencia</p>
          </div>
        </div>
        </div>
      </div>
  )
}

export default App
