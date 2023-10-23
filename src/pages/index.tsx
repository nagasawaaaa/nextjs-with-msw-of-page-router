import type { InferGetStaticPropsType } from "next";
import { useEffect, useState } from "react";
import { Inter } from 'next/font/google'
import {User} from "@/pages/api/v1/user";

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/v1/user')
  const data: User  = await response.json();
  return {
    props: {
      data
    }
  }
}
export default function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {

  const [userData, setUserData] = useState<User | null>(null)
  const [isLoading, setLoading] = useState(true)

  // MEMO: msw を有効化しておくとクライアントサイドのfetchで同じエンドポイントでも mock を見に行く
  useEffect(() => {
    fetch('/api/v1/user')
      .then((res) => res.json())
      .then((user) => {
        setUserData(user)
        setLoading(false)
      })
  }, [])

  return (
    <main className="m-10 space-y-8">
      <div className="space-y-4">
        <p>Server Side User Data</p>
        <p>ID: {data.id}</p>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
      </div>
      {isLoading ? (<p>Loading...</p>) : (
        <div className="space-y-4">
          <p>Client Side User Data</p>
          {userData && (
            <>
              <p>ID: {userData.id}</p>
              <p>Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
            </>
          )}
        </div>
      )}
    </main>
  )
}
