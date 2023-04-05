export const BASE_URL = "http://localhost:3001/";
export const PATH = {
    GET_USERS_INFO: "getuserinfo",
    SEARCH_USER: "searchUser"
}

export const TABLE_HEADERS = ['Name', 'nhsNumber', 'Vaccine Type'];
export const SORT_LABELS = [{
        label: 'Ascending',
        value: 'asc'
    }, {
        label: 'Descending',
        value: 'des',
    }];

export const LABELS = {
    header: 'accuBook Dashboard',
    search: 'Search a patient',
    searchPlaceholder: 'Search (min two characters)',
    sortByLabel: 'Sort By Name',
}

export const NO_USER_FOUND = "Oops! No user found....";