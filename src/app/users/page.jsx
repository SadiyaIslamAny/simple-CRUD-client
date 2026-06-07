import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '@/components/UsersTable';

const UsersPage = async () => {
    const users = await getUsers();
    console.log(users)
    return (
        <div>
            <h2>user management: {users.length}</h2>
            <UsersTable users={users}></UsersTable>
        </div>
    );
};

export default UsersPage;