import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ConvivialitySlider({ images }: { images: string[] }) {
    return (
        <section className="mx-4 mb-8 mt-20 md:mx-8">
            <div className="h-full w-full rounded-lg bg-black p-5">
                <h2 className="my-4 text-center text-2xl font-bold uppercase dark:text-gray-200">
                    Une convivialité qui rapproche
                </h2>
                <Swiper
                    navigation
                    modules={[Autoplay, Navigation]}
                    loop
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    className="conviviality"
                >
                    {images.map((img, index) => (
                        <SwiperSlide
                            key={index}
                            className="bg-cover bg-center"
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
