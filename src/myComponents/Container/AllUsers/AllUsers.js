import axios from "axios";
import React from "react";
import styles from './AllUsers.module.css'
import userPhoto from './../../../assets/images/person.png'

let AllUsers = (props) => {
    let getUsers = () => {
        if (props.allusers.length === 0){

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            });
    }

        // props.setUsers([
        //         {id: 1, photoURL: 'https://i.work.ua/employer_design/7/9/2/1898792_company_logo_1.png', followed: true, fullname: 'Misha', status: "First, nah", location: {city: 'Kryvyi Rih', country: 'Ukraine'} },
        //         {id: 2, photoURL: 'https://i.work.ua/employer_design/7/9/2/1898792_company_logo_1.png', followed: true, fullname: 'Sasha', status: "Second, nah", location: {city: 'Kryvyi Rih', country: 'Ukraine'} },
        //         {id: 3, photoURL: 'https://i.work.ua/employer_design/7/9/2/1898792_company_logo_1.png', followed: false, fullname: 'Anton', status: "Third, nah", location: {city: 'Kyiw', country: 'Ukraine'} },
        //         {id: 4, photoURL: 'https://i.work.ua/employer_design/7/9/2/1898792_company_logo_1.png', followed: true, fullname: 'Sveta', status: "dsdsdsds", location: {city: 'Kryvyi Rih', country: 'Ukraine'} },
        //         {id: 5, photoURL: 'https://i.work.ua/employer_design/7/9/2/1898792_company_logo_1.png', followed: false, fullname: 'Rita', status: "ewewewewe", location: {city: 'Krakow', country: 'Poland'} },
        //     ]
        // );
    }
    return <div>
        <button onClick={getUsers} className="button">Get Users</button>
        <div className={styles.userWrapper}>
            {props.allusers.map (u => 
                <div key={u.id} className={styles.userItem}>
                    <div className={styles.flexcollumn}>
                        <div><img src={ u.photos.small != null ? u.photos.small : userPhoto} className={styles.image} /></div>
                        <div>{u.followed 
                        ? <button onClick={()=>{props.unfollow(u.id)}} className="button">Unfollow</button> 
                        : <button onClick={()=>{props.follow(u.id)}} className="button">Follow</button>}</div>
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
            }</div>
        </div>
}


export default AllUsers;