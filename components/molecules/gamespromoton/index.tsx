import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '../card'
import { Cavet } from '../icons'
import {
    Button,
    ButtonSize,
    ButtonVariant,
    Rating,
    Tag
} from '@/components/atom'

type TGamesPromProps = {
    src_bg: string
    src: string
    name: string
    rating: string
    tags: string[]
    description: string
    className?: string
}

export const GamesPromotions = (props: TGamesPromProps) => {
    const { src, name, rating, tags, src_bg, description, className } = props
    return (
        <Card
            containerClassName={clsx(
                'h-auto w-[calc(100%-30px)]',
                'max-md:bg-[rgb(55,64,84)]',
                'px-0',
                `relative mx-[15px] lg:mx-auto mt-[45px] lg:mt-[-20px] mb-[70px] z-[200] lg:w-[1160px] lg:px-[70px]  pt-0 flex max-md:flex-col ${
                    className
                        ? `lg:px-[80px] pb-[45px] my-[70px] ${className} `
                        : 'lg:px-[70px] pb-[50px] '
                }`
            )}
        >
            <div className="relative w-full mx-auto lg:w-[433px] h-[340px]  lg:h-[24.5rem] flex flex-shrink-0">
                <div>
                    <div
                        className={clsx(
                            `${
                                className && 'left-[35px]'
                            } absolute overflow-hidden h-[355px] w-full lg:h-[510px] lg:w-[400px] left-[10px] bottom-[-75px] drop-shadow-xl bg-white rounded-[8px]`
                        )}
                    >
                        <Image
                            className="max-md:object-cover"
                            src={src_bg}
                            placeholder={'blur'}
                            blurDataURL={src_bg}
                            fill
                            alt="game"
                        />
                    </div>

                    <div
                        className={clsx(
                            `${
                                className
                                    ? 'left-[-15px] lg:h-[620px] bottom-[-73px]'
                                    : 'left-[30px] bottom-[-75px] lg:h-[650px]'
                            }`,
                            'z-[1] absolute',
                            'w-[277px] lg:w-[460px]',
                            'max-md:h-[406px]',
                            `transition-[transform,translate] ease-[ease,ease] duration-[0.3s,0.3s] delay-[0s,0s] lg:hover:translate-y-[-9px] lg:hover:scale-[1.03]`
                        )}
                    >
                        <Image
                            src={src}
                            placeholder={'blur'}
                            blurDataURL={src}
                            fill
                            alt="hero"
                        />
                    </div>
                </div>
            </div>
            <div
                className={clsx(
                    `px-[15px] mt-[-60px] relative ${
                        className ? 'mr-[90px]' : 'pl-24'
                    } pt-20 z-[250]`
                )}
            >
                <div className="max-md:auto flex flex-col max-w-[450px] relative">
                    <h2 className="font-anton text-4xl tracking-[2px] font-bold uppercase text-slate-800 mb-5">
                        {name}
                    </h2>
                    <div className="flex">
                        <div className="mr-3">
                            <div className="flex flex-col ">
                                <span className="text-xs text-zinc-500 font-semibold text-center">
                                    Rating
                                </span>
                                <span className="font-bold text-xl text-slate-700 text-center">
                                    {rating}
                                </span>
                                <span>
                                    <Rating />
                                </span>
                            </div>
                        </div>
                        <div className="flex self-center flex-wrap max-w-[350px]">
                            {tags.map((tag) => (
                                <Tag variant={'primary'} key={tag}>
                                    {tag}
                                </Tag>
                            ))}
                        </div>
                    </div>
                    <div className="text-gray-500 mt-15px text-[18px] mb-[20px]">
                        {description}
                    </div>
                    <div className="flex">
                        <Button
                            variant={ButtonVariant.PRIMARY}
                            size={ButtonSize.EXTRA_LARGE}
                        >
                            Download
                        </Button>
                        <Link
                            className="group text-blue-500 inline-flex items-center ml-[1.23rem] font-semibold"
                            href={'/'}
                        >
                            Learn More
                            <Cavet
                                fill={'currentColor'}
                                className="group-hover:translate-x-1 ease-in duration-[0.3s] delay-[0s]"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </Card>
    )
}
