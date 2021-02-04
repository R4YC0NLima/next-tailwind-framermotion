import Link from 'next/link'
import { motion } from 'framer-motion'

interface CardProps {
  href: string,
  imgSrc: string,
  layoutId: string
}

const Card: React.FC<CardProps> = ({ href, imgSrc, layoutId }) => {
  return (
    <Link href={href}>
      <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
        <motion.img src={imgSrc} layoutId={layoutId} className="w-full h-full" />
      </div>
    </Link>
  )
}

export default Card