import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export type ImageSlide = {
    label: string;
    url: string;
};

export default function ProductsCarousel({ images }: { images: ImageSlide[] }) {
    return (
        <section className="mx-4 my-20 flex flex-col items-center md:mx-8">
            <h2 className="my-3 text-2xl font-bold">LES PRODUITS PROPOSÉS</h2>
            <div className="flex w-full flex-row justify-between">
                <Swiper
                    className="products"
                    navigation
                    slidesPerView={5}
                    spaceBetween={30}
                    breakpoints={{
                        425: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 4, spaceBetween: 40 },
                        1024: { slidesPerView: 5, spaceBetween: 50 },
                    }}
                    modules={[Autoplay, Navigation]}
                    loop
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                >
                    {images.map((image) => (
                        <SwiperSlide key={image.label}>
                            <div>
                                <div
                                    className="h-[100px] w-auto rounded-lg bg-center"
                                    style={{ backgroundImage: `url(${image.url})` }}
                                ></div>
                                <p className="text-center">{image.label}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
