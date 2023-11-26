import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function ProfileListShort({profiles}) {
    if(!profiles){
        return null;
    }
    return (
        <div style={{display:'flex'}}>
              {profiles.map((profile, index) => (
                    <Link to={`chat/${profile.name}`}>
                        <Avatar key={index} alt={profile.name} src={profile.avatar} sx={{ width: 56, height: 56, margin: 1 }}/>
                    </Link>
                ))}
        </div>
    );
}

export default ProfileListShort;