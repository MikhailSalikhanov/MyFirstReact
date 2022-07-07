import React from "react"
import styles from './AllUsers.module.css'
import userPhoto from './../../../assets/images/person.png'
import { NavLink } from "react-router-dom";
import { followAPI } from "../../../API/api";


let AllUsersFunc = (props) =>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i<= pagesCount; i++){
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p=>{
                return <span className={props.currentPage === p && styles.selected} onClick={()=>{props.onPageChanged(p)}}>{p}</span>
            })}
        </div>
            <div className={styles.userWrapper}>
                {props.allusers.map (u => 
                    <div key={u.id} className={styles.userItem}>
                        <div className={styles.flexcollumn}>
                        <NavLink to={`/profile/${u.id}`}>
                            <div><img src={ u.photos.small != null ? u.photos.small : userPhoto} className={styles.image} /></div>
                        </NavLink>
                            <div>{u.followed 
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={()=>{
                                props.toggleFollowingProgress(true, u.id);
                                followAPI.deleteFollow(u.id).then(data => {
                                    if (data.resultCode == 0) {    
                                        props.unfollow(u.id);
                                    }
                                    props.toggleFollowingProgress(false, u.id);
                                });
                            }} className="button">Unfollow</button> 
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={()=>{
                                props.toggleFollowingProgress(true, u.id);
                                followAPI.postFollow(u.id).then(data => {
                                    if (data.resultCode == 0) {    
                                        props.follow(u.id);
                                    }
                                props.toggleFollowingProgress(false, u.id);
                                debugger
                                });
                                
                                }} className="button">Follow</button>}</div>
                        </div>
                        <div className={styles.flexcollumn}>
                            <div className={styles.flexrow}>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className={styles.flexrow}>
                                <div>{"u.location.city"}</div>
                                <div>{"u.location.country"}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
    </div>

}

export default AllUsersFunc;