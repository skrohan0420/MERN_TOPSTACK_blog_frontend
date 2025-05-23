import { useState, useEffect } from 'react'
import Blogs from '../../componets/Bolgs/Blogs'
import config from '../../config/config'


function Home() {
    const [data, setData] = useState(null)
    const token = localStorage.getItem('token')

    const fetchBlogs = async () => {
        try {
            let response = await fetch(`${config.backendUrl}/blog`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
            }
            )
            response = await response.json()
            if (!response.status) {
                console.error('Error fetching blogs:', response.message)
                return
            }

            setData(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchBlogs()
    }, [])



    // let data = [
    //     {
    //         id: 1,
    //         title: 'blog 1',
    //         description: 'description 1',
    //         image: 'https://placehold.co/600x200',
    //         blog: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    //     },
    //     {
    //         id: 2,
    //         title: 'blog 2',
    //         description: 'description 2',
    //         image: 'https://placehold.co/600x200',
    //         blog: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    //     },
    //     {
    //         id: 3,
    //         title: 'blog 3',
    //         description: 'description 3',
    //         image: 'https://placehold.co/600x200',
    //         blog: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    //     },
    //     {
    //         id: 4,
    //         title: 'blog 4',
    //         description: 'description 4',
    //         image: 'https://placehold.co/600x200',
    //         blog: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    //     },
    // ]





    return (
        <>
            <div className="homeCon">
                <h1 className='text-center text-info mt-5 mb-5'>Blogs</h1>
                <Blogs Blogs={data} />
            </div>
        </>
    )
}

export default Home