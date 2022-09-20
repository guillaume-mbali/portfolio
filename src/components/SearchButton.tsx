import { AnimatePresence, motion } from 'framer-motion'
import {
    IconButton,
    useColorMode,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    InputGroup,
    Input,
    InputLeftElement
} from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDisclosure } from '@chakra-ui/react'

const SearchButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <AnimatePresence exitBeforeEnter initial={false}>
                <IconButton
                    aria-label="Search"
                    colorScheme={'blue'}
                    icon={<AiOutlineSearch />}
                    onClick={onOpen}
                ></IconButton>
            </AnimatePresence>
            <Modal
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
                size={'xl'}
            >
                <ModalOverlay
                    bg='blackAlpha.100'
                    backdropFilter='blur(10px) hue-rotate(90deg)'
                />
                <ModalContent>
                    <ModalBody>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<BsSearch />}
                            />
                            <Input type='search' placeholder='Rechercher ...' />
                        </InputGroup>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default SearchButton;
