import FrontOffice from '@/Layouts/FrontOfficeLayout';

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
        >
            <section className="m-8 flex flex-col items-center">
                <h2 className="my-3 text-2xl font-bold">
                    LES PRODUITS PROPOSÉS
                </h2>
                <div className="flex w-full flex-row justify-between">
                    <div>
                        <div className="h-[100px] w-[100px] rounded-lg bg-black"></div>
                        <p className="text-center">PRODUITS 1</p>
                    </div>
                    <div>
                        <div className="h-[100px] w-[100px] rounded-lg bg-black"></div>
                        <p className="text-center">PRODUITS 2</p>
                    </div>
                    <div>
                        <div className="h-[100px] w-[100px] rounded-lg bg-black"></div>
                        <p className="text-center">PRODUITS 3</p>
                    </div>
                    <div>
                        <div className="h-[100px] w-[100px] rounded-lg bg-black"></div>
                        <p className="text-center">PRODUITS 4</p>
                    </div>
                    <div>
                        <div className="h-[100px] w-[100px] rounded-lg bg-black"></div>
                        <p className="text-center">PRODUITS 5</p>
                    </div>
                </div>
            </section>
            <section className="m-8 grid grid-cols-[2fr,1fr]">
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
                <div className="h-full w-full rounded-lg bg-black"></div>
            </section>
            <section className="my-8 flex flex-col items-center bg-zinc-800">
                <h2 className="my-3 text-2xl font-bold uppercase dark:text-gray-200">
                    Nous sommes ici !
                </h2>
                <img src="{{asset('../../images/sunny-meadow-landscape.jpg')}}" />
            </section>
            <section className="m-8 grid grid-cols-[1fr,2fr]">
                <div className="h-full w-full rounded-lg bg-black"></div>
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
            <section className="m-8">
                <div className="h-full w-full rounded-lg bg-black">
                    <h2 className="my-3 text-center text-2xl font-bold uppercase dark:text-gray-200">
                        Une convivialité qui rapproche
                    </h2>
                </div>
                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur. Tristique in egestas
                    nisi vitae curabitur amet egestas eleifend volutpat. Eget
                    donec non pulvinar proin tristique lectus aliquet velit
                    aliquam. Vulputate arcu magna tortor fusce consequat quam
                    porta habitasse. Nisl et ut sit nam.
                </p>
            </section>
        </FrontOffice>
    );
}
