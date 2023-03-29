import { MENUITEMS_GAMES } from '@/data/menuitems'
import Link from 'next/link'

export const MenuItemGames = () => {
    return (
        <div className="flex py-8 px-12">
            {MENUITEMS_GAMES.map(({ name, items }) => (
                <div key={name}>
                    <div className="text-xl font-semibold mb-3">{name}</div>
                    <div className="flex flex-col">
                        {items.map(({ title }) => (
                            <div
                                key={title}
                                className="text-white/50 mb-2 w-[140px]"
                            >
                                <Link
                                    href={'/'}
                                    className="hover:text-white/70"
                                >
                                    {title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
