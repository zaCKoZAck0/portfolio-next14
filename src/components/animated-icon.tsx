import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

export const CopySuccessIcon = () => (
    <div className="relative text-green-200">
    <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: 0, transition: { duration: 0.2, delay: 1 } }}
    >
    <Copy className="h-5 w-5" />
    </motion.div>
    <motion.div className="absolute -translate-y-full"
    initial={{ opacity: 0, }}
    animate={{ opacity: 1, transition: { duration: 0.2, delay: 1 } }}
    >
    <Check className="h-5 w-5" />
    </motion.div>
    </div>
);