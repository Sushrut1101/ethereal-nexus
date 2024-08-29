'use client'

import { signOutAction } from '@/auth/actions/signOutAction';

export function UserNavLogout() {
  return <div className="justify-end" onClick={async () => {
    await signOutAction()
  }}>Log out
  </div>
}
