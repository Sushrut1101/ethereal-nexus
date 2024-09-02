import React from "react";
import { columns } from '@/components/user/table/columns';
import { getUsers } from '@/data/users/actions';
import { DataTable } from '@/components/ui/data-table/data-table';
import Link from "next/link";
import InviteUserIcon from '@/components/ui/icons/InviteUserIcon';

export default async function Teams() {
  const users = await getUsers()

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      {
        users.success ?
          <DataTable
            entity={'users'}
            createSlot={
              <div className="w-full flex justify-between">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold">Users</h2>
                  <p>Manage your users here</p>
                </div>
                <Link
                  href="/users/new"
                  passHref
                >
                  <InviteUserIcon width="40" height="40"></InviteUserIcon>
                </Link>
              </div>
            }
            columns={columns}
            data={users.data}
          /> :
          users.error.message
      }
    </div>
  );
}
