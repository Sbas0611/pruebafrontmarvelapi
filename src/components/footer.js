import React from 'react'
import Link from 'next/link';
import { footer } from "flowbite-react";

export default function Footer() {
  return (

    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-end">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="https://www.linkedin.com/in/sebasti%C3%A1n-arboleda/" className="hover:underline">Arboleda™</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}