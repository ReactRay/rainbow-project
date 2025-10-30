

import { useSelector } from 'react-redux'


function Profile() {
    const user = useSelector((state: any) => state.user.currentUser);
    console.log(user)
    return (
        <div>
            welcome to profile {user?.userName}
        </div>
    )
}

export default Profile
