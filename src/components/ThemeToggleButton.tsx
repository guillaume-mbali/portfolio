import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { BsSun } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                key={useColorModeValue('light', 'dark')}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <IconButton
                    mx={3}
                    aria-label="Toggle theme"
                    colorScheme={useColorModeValue('purple', 'orange')}
                    icon={useColorModeValue(<FaMoon />, <BsSun />)}
                    onClick={toggleColorMode}
                ></IconButton>
            </motion.div>
        </AnimatePresence>
    )
}

export default ThemeToggleButton;
