import {Box} from '@mui/material';
import CCMessageList from "./ccMessageList"
import CCMessageField from "./ccMessgeField"


function CCContainer({messages, profile, updateMessages,enableUpdate}){
    function updateMsg(msg){
        const newMessage = {
            "role": "user",
            "message": msg
        };
        updateMessages(newMessage);
    }
    return (
        <Box sx={{ position: 'relative', 
                    backgroundImage: `url(${profile.avatar})`,
                    backgroundSize: 'cover', // Add this line
                    backgroundRepeat: 'no-repeat', // Add this line
                    backgroundPosition: 'bottom', // Add this line
                    '::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    height: '80vh',
                    width: '68vw',
                    marginTop: 1}}>

            <CCMessageList messages={messages} profile={profile} />
            
            <CCMessageField onUpdate={updateMsg} enableUpdate = {enableUpdate}/>
            


        </Box>
    )
}

export default CCContainer;