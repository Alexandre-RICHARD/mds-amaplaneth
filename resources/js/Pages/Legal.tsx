import FrontOffice from '@/Layouts/FrontOfficeLayout';
import '@css/home.css';
import helpField from '@images/help_field.jpg';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Legal() {
    return (
        <FrontOffice
            header={
                <div>
                    <h1 className="text-4xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        MENTIONS LÉGALES
                    </h1>
                    <p className="max-w-[50%] text-gray-800 dark:text-gray-200">
                        Conformément aux dispositions de la loi n° 2004-575 du
                        21 juin 2004 pour la confiance en l'économie numérique,
                        il est précisé aux utilisateurs du site Amap l'Aneth
                        l'identité des différents intervenants dans le cadre de
                        sa réalisation et de son suivi.
                    </p>
                </div>
            }
            image={helpField}
        >
            <section className="mx-4 my-8 flex flex-col md:mx-8">
                <h2 className="my-3 text-2xl font-bold">Edition du site</h2>
                <div className="w-full">
                    Le présent site, accessible à l’URL{' '}
                    <a
                        className="hover:underline"
                        href="https://amaplaneth-angers.fr"
                    >
                        https://amaplaneth-angers.fr
                    </a>{' '}
                    (le « Site »), est édité par l’association Amap l'Aneth,
                    enregistrée auprès de la préfecture d'Angers sous le numéro
                    Numéro RNA, ayant son siège situé à Addresse de
                    l'association, représentée par Annely Boucher dûment
                    habilitée
                    <br />
                    Le numéro individuel TVA de l’éditeur est : Numéro de TVA.
                </div>
            </section>
            <section className="mx-4 my-8 flex flex-col md:mx-8">
                <h2 className="my-3 text-2xl font-bold">Hébergement</h2>
                <div className="w-full">
                    Le Site est hébergé par la société o2switch, situé 222
                    Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, (contact
                    téléphonique :{' '}
                    <a className="hover:underline" href="tel:(+33) 4 44 44 60 40">
                        (+33) 4 44 44 60 40
                    </a>
                    ).
                </div>
            </section>
            <section className="mx-4 my-8 flex flex-col md:mx-8">
                <h2 className="my-3 text-2xl font-bold">
                    Directeur de publication
                </h2>
                <div className="w-full">
                    Le Directeur de la publication du Site est .{' '}
                </div>
            </section>
            <section className="mx-4 my-8 flex flex-col md:mx-8">
                <h2 className="my-3 text-2xl font-bold">Nous Contacter</h2>
                <div className="w-full">
                    Par téléphone :{' '}
                    <a className="hover:underline" href="tel:+33123456789">
                        +33123456789
                    </a>
                    <br />
                    Par email :{' '}
                    <a
                        className="hover:underline"
                        href="mailto:amaplaneth@riseup.net"
                    >
                        amaplaneth@riseup.net
                    </a>
                    <br />
                    Par courrier : Adresse postale du contact du site
                    <br />
                </div>
            </section>
            <section className="mx-4 my-8 flex flex-col md:mx-8">
                <h2 className="my-3 text-2xl font-bold">
                    Données personnelles
                </h2>
                <div className="w-full">
                    Le traitement de vos données à caractère personnel est régi
                    par notre Charte du respect de la vie privée, disponible
                    depuis la section "Charte de Protection des Données
                    Personnelles", conformément au Règlement Général sur la
                    Protection des Données 2016/679 du 27 avril 2016
                    («RGPD»).{' '}
                </div>
            </section>
            <section className="mx-4 my-8 flex flex-col md:mx-8">
                <p>
                    Génération des mentions légales par{' '}
                    <a className="hover:underline" href="https://www.legalstart.fr/">
                        Legalstart.fr
                    </a>
                    .
                </p>
            </section>
        </FrontOffice>
    );
}
