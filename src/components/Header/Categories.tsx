import { topMenuList } from "../../constant"

const Categories = () => {
    return (
        <div className='flex gap-2 overflow-x-scroll text-black dark:text-white'>
            <div className='bg-black dark:bg-white text-white dark:text-black px-3 py-1.5 text-xs text-nowrap rounded-md' >
                All
            </div>
            {
                topMenuList?.map((item, i) => (
                    <div key={i} className='bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 px-3 py-1.5 text-xs text-nowrap rounded-md' >
                        {item}
                    </div>
                ))
            }
        </div>
    )
}

export default Categories