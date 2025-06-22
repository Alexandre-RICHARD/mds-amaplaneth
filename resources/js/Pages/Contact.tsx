import InputLabel from '@/Components/InputLabel';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import FrontOffice from '@/Layouts/FrontOfficeLayout';
import '@css/home.css';
import helpField from '@images/help_field.jpg';
import localisation from '@images/map.png';
import { router } from '@inertiajs/react';
import type { FormEvent } from 'react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('Un curieux');
    const [phone, setPhone] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const message = {
            name: name,
            email: email,
            subject: subject,
            phone: phone,
            body: content,
        };
        router.post('/contact-send-mail', message);
    };

    return (
        <FrontOffice
            header={
                <div>
                    <h1 className="text-4xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        CONTACT
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
            <section className="mx-4 my-8 md:mx-8 lg:grid lg:grid-cols-2">
                <div className="text-[#446D49]">
                    <h2 className="my-3 text-center text-2xl font-bold">
                        AMAP L'ANETH
                    </h2>
                    <p>
                        📞
                        <a className="hover:underline" href="tel:0123456789">
                            01 23 45 67 89
                        </a>
                    </p>
                    <p>
                        📨
                        <a
                            className="hover:underline"
                            href="mailto:amaplaneth@riseup.net"
                        >
                            amaplaneth@riseup.net
                        </a>
                    </p>
                    <p>Rue du Chanoine Jean Brac, 49100 Angers</p>
                    <div className="w-full">
                        <img
                            src={localisation}
                            className="my-2 h-[55vh] w-auto"
                        />
                    </div>
                </div>
                <div className="rounded-2xl bg-[#446D49] p-4 text-white">
                    <h2 className="my-3 text-center text-2xl font-bold">
                        CONTACTEZ-NOUS
                    </h2>
                    <form onSubmit={handleSubmit} className="w-full p-5">
                        <div className="flex flex-col">
                            <InputLabel htmlFor="name">Prénom / Nom</InputLabel>
                            <TextInput
                                id="name"
                                value={name}
                                name="name"
                                required
                                onChange={(e) => setName(e.target.value)}
                                className="rounded-lg"
                            />
                            {/* <InputError message={'test'} /> */}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="subject">Je suis... </label>
                            <select
                                id="subject"
                                value={subject}
                                name="subject"
                                required
                                onChange={(e) => setSubject(e.target.value)}
                                className="text-black"
                                aria-placeholder="--Séléctionnez une option--"
                            >
                                <option value={'Un curieux'}>Un curieux</option>
                                <option value={'Un producteur'}>
                                    Un producteur
                                </option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <TextInput
                                id="email"
                                value={email}
                                name="email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="rounded-lg"
                            />
                            {/* <InputError message={'test'} /> */}
                        </div>
                        <div className="flex flex-col">
                            <InputLabel htmlFor="phone">
                                Numéro de téléphone
                            </InputLabel>
                            <TextInput
                                id="phone"
                                value={phone}
                                name="phone"
                                onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                className="rounded-lg"
                            />
                            {/* <InputError message={'test'} /> */}
                        </div>
                        <div className="flex flex-col">
                            <InputLabel htmlFor="message">Message</InputLabel>
                            <textarea
                                id="message"
                                value={content}
                                name="message"
                                required
                                onChange={(e) => setContent(e.target.value)}
                                className="rounded-lg text-black"
                            />
                        </div>
                        <div className="m-4 flex justify-center">
                            <SecondaryButton type="submit">
                                Envoyer
                            </SecondaryButton>
                        </div>
                    </form>
                </div>
            </section>
        </FrontOffice>
    );
}
