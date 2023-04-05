import React, { useState, useEffect } from 'react';
import UserData from '../UserData/UserData';
import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import { BASE_URL, PATH, TABLE_HEADERS, LABELS, NO_USER_FOUND } from '../../constants';
import './Dashboard.scss';
const Dashboard = () => {
    const [userData, setUserData] = useState([]);
    const [searchVal, setSearchVal] = useState("");
    const [sortBy, setSortBy] = useState("asc");
    const fetchData = async (url, parms)=> {
        try {
            const data = await fetch(url);
            let userData = await data.json();
            setUserData(userData);
        } catch(error){
            console.log("error", error)
        }
    }
    const searchUser = (search)=> {
        const currentUrl = new URL(window.location);
        const url= `${BASE_URL}${PATH.SEARCH_USER}?search=${search}`;
        fetchData(url);
        currentUrl.searchParams.set('search', search);
        window.history.pushState(null, '', currentUrl.toString());
    }
    const handleSearch = (value)=> {
        searchUser(value);
        setSearchVal(value);
    }
    useEffect(()=>{
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const searchParam = urlParams.get('search');
        searchParam && setSearchVal(searchParam);
        searchParam ? searchUser(searchParam) : fetchData(`${BASE_URL}${PATH.GET_USERS_INFO}`);
    },[]);
    useEffect(()=>{
        let sortedData = userData;
        if(sortBy==='des') {
            sortedData = userData.sort((a, b)=>a.lastName.toLowerCase() < b.lastName.toLowerCase() ? -1 : a.lastName.toLowerCase() > b.lastName.toLowerCase()? 1 : 0)
        } else {
            sortedData = userData.sort((a, b)=>a.lastName.toLowerCase() < b.lastName.toLowerCase() ? 1 : a.lastName.toLowerCase() > b.lastName.toLowerCase()? -1 : 0)
            }
        
        setUserData(sortedData);
    },[sortBy, userData]);
  return (
    <div>
        <header>
            <h1>{LABELS.header}</h1>
            <Search handleSearch={handleSearch} value={searchVal} />
        </header>
        {userData?.length ? 
        <>
            <Sort handleSort={(value)=>setSortBy(value)} />
            <main>
                <table className='table-container'>
                    <thead>
                        <tr>
                            {TABLE_HEADERS.map(label => <th key={label}>{label}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((data, index)=>(
                            <UserData key={index} userData = {data}/>
                        ))}
                    </tbody>
                </table>
            </main>
        </> : <>{NO_USER_FOUND}</>
       }
    </div>
  )
}

export default Dashboard