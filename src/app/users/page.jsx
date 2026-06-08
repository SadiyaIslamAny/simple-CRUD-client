import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '@/components/UsersTable';
import { deleteUser } from '../lib/actions';
import AddUserModal from '@/components/AddUserModal';

const UsersPage = async () => {
    const users = await getUsers();
    console.log(users)
    return (
        <div>
            <div className='flex justify-between  items-center gap-2 py-3'>
                <h2>user management: {users.length}</h2>
                <AddUserModal></AddUserModal>
            </div>
            <UsersTable users={users} deleteUserAction = {deleteUser}></UsersTable>
        </div>
    );
};

export default UsersPage;