import React from 'react'

const Layout = ({children, classname=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-20 xl:pr-32 xl:pb-32 xl:pl-32 dark:bg-dark ${classname} scrollbar-hide`}>
        {children}
    </div>
  )
}

export default Layout
