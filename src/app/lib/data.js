export const getUsers = async() =>{
    const res = await fetch("http://localhost:5000/users");
    const usersData = await res.json();
    return usersData
}