import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import FrontOffice from '@/Layouts/FrontOfficeLayout';
import '@css/home.css';
import helpField from '@images/help_field.jpg';
import localFarmers from '@images/local_farmer.jpg';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Contract() {
    return (
        <FrontOffice
            header={
                <div>
                    <h1 className="text-4xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        NOS CONTRATS
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
            <section className="mx-4 my-8 md:mx-8">
                <h2 className="my-3 text-center text-2xl font-bold">
                    DÉCOUVREZ NOTRE VARIÉTÉ DE CONTRATS
                </h2>
                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur. Tristique in egestas
                    nisi vitae curabitur amet egestas eleifend volutpat. Eget
                    donec non pulvinar proin tristique lectus aliquet velit
                    aliquam. Vulputate arcu magna tortor fusce consequat quam
                    porta habitasse. Nisl et ut sit nam.
                </p>
            </section>
            <section className="mx-4 my-20 md:mx-8 md:grid md:grid-cols-[1fr,2fr]">
                <img
                    className="h-full w-full rounded-lg max-md:hidden"
                    src={localFarmers}
                />
                <article className="ml-4">
                    <h2 className="my-3 text-2xl font-bold uppercase">
                        Contrat oeuf
                    </h2>
                    <div className="grid grid-cols-[2fr,1fr]">
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Tristique in
                            egestas nisi vitae curabitur amet egestas eleifend
                            volutpat. Eget donec non pulvinar proin tristique
                            lectus aliquet velit aliquam. Vulputate arcu magna
                            tortor fusce consequat quam porta habitasse. Nisl et
                            ut sit nam.
                        </p>
                        <div className="flex flex-col justify-around text-right font-bold">
                            <p>15 livraisons</p>
                            <p>Du 15/04 au 26/11</p>
                            <p>Prix</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <SecondaryButton>
                            Télécharger le contrat
                        </SecondaryButton>
                        <br />
                        <PrimaryButton>Découvrir le producteur</PrimaryButton>
                    </div>
                </article>
            </section>
        </FrontOffice>
    );
}
