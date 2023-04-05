const searchData = require('../utils/searchData')
const fetchData = async()=> {
    const url = process.env.USERINFO_ENDPOINT;
    try{
        let data = await fetch(url);
        let userInfo = await data.json();
        return userInfo;
    } catch(error) {
        console.log("error occured", error);
    }
}
const getUserInfo = async(req, res)=> {
    const data = await fetchData();
    console.log(data)
    res.send(data);  
}

const searchUser = async(req, res)=> {
    const {search} = req.query || "";
    const data = await fetchData();
    let filterData = data;
    if(search.length>2) {
        filterData = searchData(data, search);
    }
    console.log(filterData)
    res.send(filterData);
}

module.exports = {getUserInfo, searchUser};


