import { motion } from "framer-motion";
import { Copy, Check, Mail, MessageCircle, Smile } from "lucide-react";

export const CopySuccessIcon = () => (
    <div className="relative text-green-200">
    <motion.div
    initial={{ transform: "translateX(0%)", opacity: 1 }}
    animate={{ transform: "translateX(-100%)", opacity: 0, transition: { duration: 0.2, delay: 1 } }}
    >
    <Copy className="h-5 w-5" />
    </motion.div>
    <motion.div className="absolute"
    initial={{ opacity: 0, transform: "translate(100%, -100%)" }}
    animate={{ opacity: 1, transform: "translate(0%, -100%)", transition: { duration: 0.2, delay: 1 } }}
    >
    <Check className="h-5 w-5" />
    </motion.div>
    </div>
);

export const MailSentSuccess = () => (
    <div className="relative text-purple-200">
    <motion.div
    initial={{ transform: "translateX(0%)", opacity: 1 }}
    animate={{ transform: "translateX(-100%)", opacity: 0, transition: { duration: 0.2, delay: 1 } }}
    >
    <Mail className="h-5 w-5" />
    </motion.div>
    <motion.div className="absolute"
    initial={{ opacity: 0, transform: "translate(100%, -100%)" }}
    animate={{ opacity: 1, transform: "translate(0%, -100%)", transition: { duration: 0.2, delay: 1 } }}
    >
    <Check className="h-5 w-5" />
    </motion.div>
    </div>
);

export const Greet = () => (
    <div className="relative text-yellow-200">
    <motion.div
    initial={{ transform: "translateX(0%)", opacity: 1 }}
    animate={{ transform: "translateX(-100%)", opacity: 0, transition: { duration: 0.2, delay: 1 } }}
    >
    <MessageCircle className="h-5 w-5" />
    </motion.div>
    <motion.div className="absolute"
    initial={{ opacity: 0, transform: "translate(100%, -100%)" }}
    animate={{ opacity: 1, transform: "translate(0%, -100%)", transition: { duration: 0.2, delay: 1 } }}
    >
    <Smile className="h-5 w-5" />
    </motion.div>
    </div>
);