import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  detail: string;
  icon: string;
}

export const Modal = ({ isOpen, onClose, title, detail, icon }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-stretch justify-end bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-surface border-l border-outline-variant p-8 max-w-md w-full relative sm:h-screen overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-primary"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-4xl text-primary-fixed mb-4">{icon}</div>
            <h2 className="text-2xl font-display-sm text-on-background mb-4">{title}</h2>
            <p className="text-on-surface-variant font-light leading-relaxed">{detail}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
