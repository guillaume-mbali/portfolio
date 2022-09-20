import React, { useState } from "react"
import { AnimatePresence, motion } from 'framer-motion'
import { useColorModeValue, Stack, Button } from '@chakra-ui/react'
import { FaLanguage } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Language } from '../Language';

const LanguageToggleButton = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState<Language>(i18n.language as Language);
    const [islanguage, setIsLanguage] = useState(true);

    const changeLanguage = () => {
        setIsLanguage(!islanguage);
        if (islanguage) {
            setLang(Language.EN);
            i18n.changeLanguage(Language.EN);
        } else {
            setLang(Language.FR);
            i18n.changeLanguage(Language.FR);
        }
    }

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <Stack direction='row' spacing={4}>
                    <Button rightIcon={useColorModeValue(<FaLanguage />, <FaLanguage />)} colorScheme={useColorModeValue('green', 'red')} variant='outline' onClick={() => changeLanguage()}>
                        {lang === Language.FR ? "EN" : "FR"}
                    </Button>
                </Stack>
            </motion.div>
        </AnimatePresence>

    )
}

export default LanguageToggleButton;
