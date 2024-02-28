import React, {useState} from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormLabel,
    FormControl,
    Button,
    Input

} from '@chakra-ui/react'
import {EditIcon} from "@chakra-ui/icons";
import {useDisclosure} from "@chakra-ui/react";
import {editHandler} from "../../taskService/taskService";

const EditModal = ({text, id, setTasks}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [changeText, setChangeText] = useState(text)

    return (
        <>
            <button onClick={onOpen}><EditIcon/></button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Изменить название задачи</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Название</FormLabel>
                            <Input value={changeText} placeholder='Название задачи' onChange={(e) => setChangeText(e.target.value)} />
                        </FormControl>

                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={() => editHandler(id, changeText, setTasks, onClose)} colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default EditModal;