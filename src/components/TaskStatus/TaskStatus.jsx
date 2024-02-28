import React, {useState} from 'react';
import {Stack, Button} from "@chakra-ui/react";

const TaskStatus = ({status, setStatus}) => {

    return (
        <div>
            <Stack mb={5} mt={5} direction='row' spacing={4} align='center' justify={'center'}>
                <Button onClick={() => setStatus('done')} colorScheme='teal'
                        variant={status === 'done' ? 'solid' : 'outline'}>
                    DONE
                </Button>
                <Button onClick={() => setStatus('important')} colorScheme='teal'
                        variant={status === 'important' ? 'solid' : 'outline'}>
                    IMPORTANT
                </Button>
                <Button onClick={() => setStatus('all')} colorScheme='teal'
                        variant={status === 'all' ? 'solid' : 'outline'}>
                    ALL
                </Button>
            </Stack>
        </div>
    );
};

export default TaskStatus;