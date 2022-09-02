import { TrashIcon, GlobeAltIcon, MagnifyingGlassMinusIcon, MagnifyingGlassPlusIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
const Buttons = () => {
    return (
        <div className="absolute top-4 right-4 w-60 h-16 rounded-lg border-2 border-gray-500 bg-gray-300 flex flex-row space-x-2 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.2 }} className="w-12 h-12 bg-white rounded-lg drop-shadow-xl flex justify-center items-center">
                <MagnifyingGlassPlusIcon className="w-10 h-10 text-black" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.2 }} className="w-12 h-12 bg-white rounded-lg drop-shadow-xl flex justify-center items-center">
                <MagnifyingGlassMinusIcon className="w-10 h-10 text-black" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.2 }} className="w-12 h-12 bg-white rounded-lg drop-shadow-xl flex justify-center items-center">
                <GlobeAltIcon className="w-10 h-10 text-black" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.2 }} className="w-12 h-12 bg-white rounded-lg drop-shadow-xl flex justify-center items-center">
                <TrashIcon className="w-10 h-10 text-red-500" />
            </motion.div>
        </div>
    )
}

export default Buttons;