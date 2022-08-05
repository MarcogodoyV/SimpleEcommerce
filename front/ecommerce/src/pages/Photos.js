import { useContext } from "react"
import { Context } from "../Context"
import {Image} from "../components/Image"
import {getClass} from "../utils/index"

export default function Photos() {
    const { allPhotos } = useContext(Context)

    const allImages = allPhotos.map((img, index) => (
        <Image key={img.id} img={img} className={getClass(index)} />
        )
    )
    return (
        <main className="photos">
            {allImages}
        </main>
    )
}