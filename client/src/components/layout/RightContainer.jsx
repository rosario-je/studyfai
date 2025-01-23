import React from 'react'

const RightContainer = ({ children, expanded }) => {
    return (
        <section className={`main-container flex flex-col-reverse items-center w-full md:flex-row md:items-stretch justify-center gap-x-5 transition-all duration-200 px-6 h-[calc(100vh-6rem)] bg-blue p-6 
            ${expanded 
                ? 'md:w-[calc(100vw-16vw)] lg:w-[calc(100vw-14vw)] xl:w-[calc(100vw-10vw)]' 
                : 'md:w-[calc(100vw-5vw)] lg:w-[calc(100vw-4vw)] xl:w-[calc(100vw-3vw)]'
            }`}>
            {children}
        </section>
    )
}

export default RightContainer