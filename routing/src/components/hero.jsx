import Image from 'next/image'
import profilePic from "../../public/man-img.avif" 
const HeroPic = () => {
  return (
    <div>
      <Image src={profilePic} alt='img' height={200} width={200} placeholder='blur'/>
    </div>
  )
}

export default HeroPic

