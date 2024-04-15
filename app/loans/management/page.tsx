import React, { ReactNode } from 'react';
import NavBarDashboard from '@/app/components/NavBarDashboard';
import SideBar from '@/app/components/SideBar';
import Footer from '@/app/components/Footer';

import NavBar from '@/app/components/NavBarDashboard';

interface mainInterface {
  children:ReactNode
}


const page = ({children}:mainInterface ) => {
  return (
    <>
      <NavBarDashboard/>
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">

        <SideBar />

        <div id="main-content" className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
          <main>
            {children}
          </main>
          <Footer />
        </div>

      </div>


    </>
  )
}

export default page
