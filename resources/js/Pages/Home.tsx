import FrontOffice from '@/Layouts/FrontOfficeLayout';
import '@css/home.css';
import distrib from '@images/distrib.jpg';
import helpField from '@images/help_field.jpg';
import localFarmers from '@images/local_farmer.jpg';
import largeMap from '@images/map-large.png';
import map from '@images/map.png';
import nearFarmers from '@images/near_farmers.jpg';
import plant from '@images/plant.jpg';
import raddish from '@images/raddish.jpg';
import salad from '@images/salad.jpg';
import ProductsCarousel, { ImageSlide } from '@/Components/Home/ProductsCarousel';
import ConvivialitySlider from '@/Components/Home/ConvivialitySlider';

export default function Home() {
    const imagesToSlide: ImageSlide[] = [
        {
            label: 'PRODUITS 1',
            url: plant,
        },
        {
            label: 'PRODUITS 2',
            url: raddish,
        },
        {
            label: 'PRODUITS 3',
            url: salad,
        },
        {
            label: 'PRODUITS 4',
            url: salad,
        },
        {
            label: 'PRODUITS 5',
            url: salad,
        },
        {
            label: 'PRODUITS 6',
            url: salad,
        },
        {
            label: 'PRODUITS 7',
            url: salad,
        },
        {
            label: 'PRODUITS 8',
            url: salad,
        },
    ];

    return (
        <FrontOffice
            header={
                <div>
                    <h1 className="text-4xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        AMAP L'ANETH
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
            <ProductsCarousel images={imagesToSlide} />
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
            {/* <section className="my-20 flex flex-col items-center bg-zinc-800 p-5">
                <h2 className="my-4 text-2xl font-bold uppercase dark:text-gray-200">
                    Nous sommes ici !
                </h2>
                <img src={localisation} className="my-2 h-[55vh] w-auto" />
            </section> */}
            <section className="my-20 h-[400px] w-full bg-zinc-800 py-10">
                <h2 className="mb-6 text-center text-2xl font-bold uppercase text-gray-200">
                    Nous sommes ici !
                </h2>
                <img
                    src={largeMap}
                    alt="Emplacement de l'AMAP au sein de la ville d'Angers"
                    srcSet={`${map} 800w, ${largeMap} 1200w`}
                    sizes="(max-width: 800px) 100vw, 100vw"
                    className="h-full w-full object-cover"
                />

                {/* <img
                    src={largeMap}
                    alt="Emplacement de l'AMAP au sein de la ville d'Angers"
                    className="h-full w-full object-cover"
                />
                <img
                    src={map}
                    alt="Emplacement de l'AMAP au sein de la ville d'Angers"
                    className="h-full w-full object-cover"
                /> */}
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
            <ConvivialitySlider
                images={[
                    distrib,
                    helpField,
                    distrib,
                    distrib,
                    distrib,
                    distrib,
                    distrib,
                    distrib,
                    distrib,
                ]}
            />
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
