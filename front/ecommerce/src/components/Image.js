import { useState } from "react"

export const Image= ({className,img}) => {

  const [hovered,setHovered] = useState(false)

  return (
    <div className={`${className} image-container`}
    onMouseEnter={() => {setHovered(true)}}
    onMouseLeave={() => {setHovered(false)}}
    >
        {hovered && <><i className="ri-heart-line favorite"></i><i className="ri-add-circle-line cart"></i></>}
        <img src={img.url} alt="imag" className="image-grid"></img>
    </div>
  )
}
