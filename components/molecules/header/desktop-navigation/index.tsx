import clsx from 'clsx'
import { useState } from 'react'
import { NavGroupProps } from '..'
import { MenuItems } from './menuitems'

export const DesktopNav = ({ navigation }: { navigation: NavGroupProps[] }) => {
    const [isOpenMenuItems, setisOpenMenuItems] = useState(false)

    return (
        <nav className="hidden lg:flex grow justify-center h-full">
            <ul
                className={clsx('text-white', 'flex items-center gap-5 h-full')}
            >
                {navigation.map((name) => (
                    <li key={name.name} className="static">
                        <button
                            className="flex items-center p-4 h-full hover:bg-neutral-700  cursor-pointer text-start"
                            onClick={() => setisOpenMenuItems(!isOpenMenuItems)}
                        >
                            {name.name}
                        </button>
                        <MenuItems isOpenMenuItems={isOpenMenuItems} />
                    </li>
                ))}

                <li
                    className={clsx(
                        'cursor-pointer flex items-center ',
                        'from-[rgb(71,121,203)99%] to-[rgb(91,143,229)] ',
                        'rounded-md px-[15px] font-bold text-center h-[35px]',
                        'bg-gradient-to-t hover:from-[rgb(97,156,255)] hover:to-[rgb(85,140,230)] '
                    )}
                >
                    Get Plarium Play
                </li>
            </ul>
        </nav>
    )
}