import { Button, ButtonSize, ButtonVariant } from '@/components/atom';
import { Card } from '@/components/molecules';
import { GAMES } from '@/utils/constants';
import Image from 'next/image';

export const CrossPlatformSection = () => {
    return (
        <div className="pt-[40px] pb-[80px] bg-[#191b1f] flex justify-center w-full ">
            <Card
                variant={'dark'}
                containerClassName={
                    'rounded-[8px] pr-[55px] pb-[45px] pt-[35px] pl-[12px]'
                }
            >
                <div className="flex w-[1140px]">
                    <div className="relative lg: w-3/5 flex flex-shrink-0 justify-center">
                        <Image
                            className="object-contain"
                            placeholder={'blur'}
                            blurDataURL={GAMES}
                            src={GAMES}
                            alt="games"
                            fill
                        />
                    </div>
                    <div className="flex flex-col ml-10 pt-16">
                        <div className="text-white font-extrabold text-4xl mb-4">
                            CROSS-PLATFORM GAMES
                        </div>
                        <div className="text-white/80 mb-8">
                            Get Plarium Play for PC or Mac to play our mobile
                            games for free anytime, everywhere!
                        </div>
                        <div>
                            <Button
                                variant={ButtonVariant.PRIMARY}
                                size={ButtonSize.EXTRA_LARGE}
                            >
                                Get Plarium Play
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};
