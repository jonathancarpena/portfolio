import { useState } from 'react'

// Framer
import { motion, AnimatePresence } from 'framer-motion'

// Icons
import { FiClipboard } from 'react-icons/fi'

function Popover({ children, className, long, mobile, position = "right" }) {

    const [copy, setCopy] = useState(false)
    const positionStyles = {
        right: `${long ? 'left-[100%]' : 'left-[120%]'} bottom-[10%] `,
        left: `${long ? 'right-[100%]' : 'right-[120%]'} bottom-[10%]`,
        top: `-right-6 bottom-[110%]`,
        bottom: `-right-6 top-[110%]`,
    }
    function copyToClipboard(e) {
        const text = e.target.getAttribute('data')
        const el = document.createElement('textarea');
        el.value = text;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setCopy(true)
        setTimeout(() => { setCopy(false) }, [1500])
    };
    return (
        <button onClick={copyToClipboard} className={`${className} relative`}>
            {children}
            <AnimatePresence exitBeforeEnter>
                {copy &&
                    <motion.span
                        key={'copyClipboard'}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 0.2 } }}
                        exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                        className={`absolute ${positionStyles[position]}  ${mobile ? 'text-base' : ''} drop-shadow-lg bg-accent-500 text-lighter  z-[105] flex items-center space-x-1  px-2 py-1 rounded-lg  font-semibold  `}>
                        <FiClipboard />
                        <span>Copied!</span>
                    </motion.span>
                }
            </AnimatePresence>

        </button>
    )
}

export default Popover