const searchData = (data, search)=>{
    return data && data.filter((item)=>
        item.firstName.toLowerCase().includes(search.toLowerCase()) ||
        item.lastName.toLowerCase().includes(search.toLowerCase()) ||
        item.nhsNumber.toLowerCase().includes(search.toLowerCase()) ||
        item.vaccineType.toLowerCase().includes(search.toLowerCase())
    )
};
module.exports = searchData;

