import React from 'react'
import './rightbar.css'
import {Users} from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar({profile}) {

    const HomeRightbar = () => {
        return(
            <>
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users .map(u => (
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return(
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    
                </div>
            </>
            )
    }
    return (
        <div className="rightbar"> 
            <div className="rightbarWrapper">
                <ProfileRightbar/>
            </div>
        </div>
    )
}
    