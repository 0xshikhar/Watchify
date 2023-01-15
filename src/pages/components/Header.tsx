import React,{useState,useContext} from 'react'
import { useRouter } from 'next/router'

import { SlMenu } from 'react-icons/sl'
import { IoIosSearch } from 'react-icons/io'
import { RiVideoAddLine} from 'react-icons/ri' 
import { FiBell } from 'react-icons/fi' 
import { CgClose } from 'react-icons/cg'

import { Context } from '@/src/context/contextApi'


export const Header = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const {loading, mobileMenu, setMobileMenu} = useContext(Context);
    
    const searchQueryHandler = (event) => {
        if( (event?.key == "Enter" || event === "searchButton") && searchQuery?.length > 0 ){
            router(`searchResult/${searchQuery}`)
        }
    }

    const mobileMenuToggle = ()=>{
        setMobileMenu(!mobileMenu);
    }

    return (

    <div className='sticky top-0 z-10 flex flex-row items-center px-4 md:px-8 bg-white dark:bg-black'>
        <div >
            {loading && <Loader />}
            <div className='flex h-5 items-center'>
                {pageName !== "video"}
            </div>
        </div>
    </div>

    )
}
