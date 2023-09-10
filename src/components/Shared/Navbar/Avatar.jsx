import { useContext } from 'react';
import avatarImg from '../../../assets/placeholder.jpg'
import { AuthContext } from '../../../providers/AuthProvider';

const Avatar = () => {
    const {user} = useContext(AuthContext);
    return (
        <img className='h-[35px] w-[35px] rounded-full' 
        src={user && user.photoURL ? user.photoURL : avatarImg} alt="avatar" />
    );
};

export default Avatar;