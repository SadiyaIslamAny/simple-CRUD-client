export const getUsers = async() =>{
    const res = await fetch("http://localhost:5000/users");
    const usersData = await res.json();
    return usersData
}


export const getUserById = async(userId) =>{
       const res =await fetch(`http://localhost:5000/users/${userId}`);
       const data = await res.json();
       return data;
}