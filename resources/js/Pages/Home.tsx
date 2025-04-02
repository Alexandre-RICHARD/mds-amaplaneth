import FrontOffice from '@/Layouts/FrontOfficeLayout';
import '@css/home.css';
import distrib from '@images/distrib.jpg';
import helpField from '@images/help_field.jpg';
import localFarmers from '@images/local_farmer.jpg';
import localisation from '@images/map.png';
import nearFarmers from '@images/near_farmers.jpg';
import plant from '@images/plant.jpg';
import raddish from '@images/raddish.jpg';
import salad from '@images/salad.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {
    return (
        <FrontOffice
            header={
                <div>
                    <h1 className="text-4xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        AMAP L'aneth
                    </h1>
                    <p className="max-w-[50%] text-gray-800 dark:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur. Nisl tempor
                        commodo ut ornare nibh urna diam. Magnis quis augue
                        felis viverra at elit nunc nunc sed.
                    </p>
                </div>
            }
            image={helpField}
        >
            <section className="mx-4 my-20 flex flex-col items-center md:mx-8">
                <h2 className="my-3 text-2xl font-bold">
                    LES PRODUITS PROPOSÉS
                </h2>
                <div className="flex w-full flex-row justify-between">
                    <Swiper
                        className="products"
                        navigation={true}
                        slidesPerView={2}
                        spaceBetween={30}
                        modules={[Autoplay, Navigation]}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide>
                            <div>
                                <div
                                    className="h-[100px] w-auto rounded-lg bg-center"
                                    style={{ backgroundImage: `url(${plant})` }}
                                ></div>
                                <p className="text-center">PRODUITS 1</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div
                                    className="h-[100px] w-auto rounded-lg bg-center"
                                    style={{
                                        backgroundImage: `url(${raddish})`,
                                    }}
                                ></div>
                                <p className="text-center">PRODUITS 2</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div
                                    className="h-[100px] w-auto rounded-lg bg-center"
                                    style={{ backgroundImage: `url(${salad})` }}
                                ></div>
                                <p className="text-center">PRODUITS 3</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div
                                    className="h-[100px] w-auto rounded-lg bg-center"
                                    style={{ backgroundImage: `url(${salad})` }}
                                ></div>
                                <p className="text-center">PRODUITS 4</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div
                                    className="h-[100px] w-auto rounded-lg bg-center"
                                    style={{ backgroundImage: `url(${salad})` }}
                                ></div>
                                <p className="text-center">PRODUITS 5</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div
                                    className="h-[100px] w-auto rounded-lg bg-center"
                                    style={{ backgroundImage: `url(${salad})` }}
                                ></div>
                                <p className="text-center">PRODUITS 5</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div
                                    className="h-[100px] w-auto rounded-lg bg-center"
                                    style={{ backgroundImage: `url(${salad})` }}
                                ></div>
                                <p className="text-center">PRODUITS 5</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div
                                    className="h-[100px] w-auto rounded-lg bg-center"
                                    style={{ backgroundImage: `url(${salad})` }}
                                ></div>
                                <p className="text-center">PRODUITS 5</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div
                                    className="h-[100px] w-auto rounded-lg bg-center"
                                    style={{ backgroundImage: `url(${salad})` }}
                                ></div>
                                <p className="text-center">PRODUITS 5</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="mx-4 my-20 md:mx-8 md:grid md:grid-cols-[2fr,1fr]">
                <article className="mr-4">
                    <h2 className="my-3 text-2xl font-bold uppercase">
                        Une association au plus proche des producteurs
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Tristique in
                        egestas nisi vitae curabitur amet egestas eleifend
                        volutpat. Eget donec non pulvinar proin tristique lectus
                        aliquet velit aliquam. Vulputate arcu magna tortor fusce
                        consequat quam porta habitasse. Nisl et ut sit nam.
                        <br />
                        Lorem ipsum dolor sit amet consectetur. Tristique in
                        egestas nisi vitae curabitur amet egestas eleifend
                        volutpat. Eget donec non pulvinar proin tristique lectus
                        aliquet velit aliquam. Vulputate arcu magna tortor fusce
                        consequat quam porta habitasse. Nisl et ut sit nam.
                    </p>
                </article>
                <img
                    className="h-full w-full rounded-lg max-md:hidden"
                    src={nearFarmers}
                />
            </section>
            <section className="my-20 flex flex-col items-center bg-zinc-800 p-5">
                <h2 className="my-4 text-2xl font-bold uppercase dark:text-gray-200">
                    Nous sommes ici !
                </h2>
                <img src={localisation} className="my-2 h-[55vh] w-auto" />
            </section>
            <section className="mx-4 my-20 md:mx-8 md:grid md:grid-cols-[1fr,2fr]">
                <img
                    className="h-full w-full rounded-lg max-md:hidden"
                    src={localFarmers}
                />
                <article className="ml-4">
                    <h2 className="my-3 text-2xl font-bold uppercase">
                        Des producteurs locaux
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Tristique in
                        egestas nisi vitae curabitur amet egestas eleifend
                        volutpat. Eget donec non pulvinar proin tristique lectus
                        aliquet velit aliquam. Vulputate arcu magna tortor fusce
                        consequat quam porta habitasse. Nisl et ut sit nam.
                        <br />
                        Lorem ipsum dolor sit amet consectetur. Tristique in
                        egestas nisi vitae curabitur amet egestas eleifend
                        volutpat. Eget donec non pulvinar proin tristique lectus
                        aliquet velit aliquam. Vulputate arcu magna tortor fusce
                        consequat quam porta habitasse. Nisl et ut sit nam.
                    </p>
                </article>
            </section>
            <section className="mx-4 mb-8 mt-20 md:mx-8">
                <div className="h-full w-full rounded-lg bg-black p-5">
                    <h2 className="my-4 text-center text-2xl font-bold uppercase dark:text-gray-200">
                        Une convivialité qui rapproche
                    </h2>
                    <Swiper
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className="conviviality"
                    >
                        <SwiperSlide
                            className="bg-cover bg-center"
                            style={{ backgroundImage: `url(${distrib})` }}
                        ></SwiperSlide>
                        <SwiperSlide
                            className="bg-cover bg-center"
                            style={{ backgroundImage: `url(${helpField})` }}
                        ></SwiperSlide>
                        <SwiperSlide
                            className="bg-cover bg-center"
                            style={{ backgroundImage: `url(${distrib})` }}
                        ></SwiperSlide>
                        <SwiperSlide
                            className="bg-cover bg-center"
                            style={{ backgroundImage: `url(${distrib})` }}
                        ></SwiperSlide>
                        <SwiperSlide
                            className="bg-cover bg-center"
                            style={{ backgroundImage: `url(${distrib})` }}
                        ></SwiperSlide>
                        <SwiperSlide
                            className="bg-cover bg-center"
                            style={{ backgroundImage: `url(${distrib})` }}
                        ></SwiperSlide>
                        <SwiperSlide
                            className="bg-cover bg-center"
                            style={{ backgroundImage: `url(${distrib})` }}
                        ></SwiperSlide>
                        <SwiperSlide
                            className="bg-cover bg-center"
                            style={{ backgroundImage: `url(${distrib})` }}
                        ></SwiperSlide>
                        <SwiperSlide
                            className="bg-cover bg-center"
                            style={{ backgroundImage: `url(${distrib})` }}
                        ></SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <p className="mx-4 text-center md:mx-8">
                Lorem ipsum dolor sit amet consectetur. Tristique in egestas
                nisi vitae curabitur amet egestas eleifend volutpat. Eget donec
                non pulvinar proin tristique lectus aliquet velit aliquam.
                Vulputate arcu magna tortor fusce consequat quam porta
                habitasse. Nisl et ut sit nam.
            </p>
        </FrontOffice>
    );
}
