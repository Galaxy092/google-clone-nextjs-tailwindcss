import React from 'react'

export default function Footer() {
  return (
    // <div className='flex items-center justify-center '>
    //     <p>Copyright &copy; {new Date().getFullYear()} | Penh Polydet</p>
    // </div>
    <footer className='absolute bottom-0 left-[50%] translate-x-[-50%] whitespace-nowrap p-6 text-sm text-gray-600'>
        <p>Copyright &copy; {new Date().getFullYear()} | Penh Polydet</p>
    </footer>
  )
}
