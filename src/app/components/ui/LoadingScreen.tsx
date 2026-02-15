import { motion } from 'framer-motion';
import logoImage from '../../../assets/logo.png';

export function LoadingScreen() {
    return (
        <div className="fixed inset-0 z-[100] bg-[#FBF7F0] flex items-center justify-center">
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="flex flex-col items-center"
            >
                <img
                    src={logoImage}
                    alt="Maison Khoub Loading"
                    className="w-48 md:w-64 object-contain"
                />
            </motion.div>
        </div>
    );
}
