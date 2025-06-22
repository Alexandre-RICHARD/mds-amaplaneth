import DangerButton from '@/Components/DangerButton';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useToast } from '@/Components/ToastProvider';
import FrontOffice from '@/Layouts/FrontOfficeLayout';
import localFarmers from '@images/local_farmer.jpg';
import nearFarmers from '@images/near_farmers.jpg';
import { usePage } from '@inertiajs/react';
import { FormEvent, useEffect, useState } from 'react';

interface Image {
    id: number;
    title: string;
    alt_text: string;
    url: string;
}

interface Producer {
    id: number;
    profile_picture: number;
    first_name: string;
    last_name: string;
    address_road: string;
    zipcode: number;
    city: string;
    description: string;
    images: Image[];
}

export default function Producers() {
    const [producers, setProducers] = useState<Producer[]>([]);
    const [search, setSearch] = useState('');
    const [editing, setEditing] = useState<Producer | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState<number | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const { props } = usePage<{ isAdmin: boolean }>();
    const isAdmin = props.isAdmin;
    const { addToast } = useToast();

    useEffect(() => {
        fetchProducers();
    }, []);

    function fetchProducers() {
        fetch(route('producers.show'))
            .then((result) => result.json())
            .then((data) => setProducers(data));
    }

    function handleEdit(prod?: Producer) {
        setEditing(prod ?? null);
        setShowModal(true);
    }

    function handleDelete(id: number) {
        setDeleteId(id);
        setShowDeleteModal(true);
    }

    function confirmDelete() {
        if (deleteId === null) {
            return;
        }
        fetch(route('producers.destroy', deleteId), { method: 'DELETE' }).then(
            () => {
                addToast({
                    title: 'Producteur supprimé',
                    variant: 'success',
                });
                setShowDeleteModal(false);
                setDeleteId(null);
                fetchProducers();
            },
        );
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = {
            first_name: (
                form.elements.namedItem('first_name') as HTMLInputElement
            ).value,
            last_name: (
                form.elements.namedItem('last_name') as HTMLInputElement
            ).value,
            address_road: (
                form.elements.namedItem('address_road') as HTMLInputElement
            ).value,
            zipcode: (form.elements.namedItem('zipcode') as HTMLInputElement)
                .value,
            city: (form.elements.namedItem('city') as HTMLInputElement).value,
            description: (
                form.elements.namedItem('description') as HTMLInputElement
            ).value,
            profile_picture: '1',
            pictures: (
                form.elements.namedItem('pictures') as HTMLInputElement
            ).value
                .split(',')
                .map((v) => parseInt(v, 10))
                .filter((v) => !Number.isNaN(v)),
        };
        const request = editing
            ? fetch(route('producers.update', editing.id), {
                  method: 'PUT',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
              })
            : fetch(route('producers.store'), {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
              });
        request.then(() => {
            setShowModal(false);
            setEditing(null);
            fetchProducers();
        });
    }

    const filtered = producers.filter((p) => {
        const q = search.toLowerCase();
        return (
            p.first_name.toLowerCase().includes(q) ||
            p.last_name.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
        );
    });

    const placeholders = [nearFarmers, localFarmers];

    return (
        <FrontOffice
            header={
                <div>
                    <h1 className="text-4xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        NOS PRODUCTEURS
                    </h1>
                    <p className="max-w-[50%] text-gray-800 dark:text-gray-200">
                        Retrouvez ici la liste de nos producteurs locaux.
                    </p>
                </div>
            }
            image={nearFarmers}
        >
            <div className="mb-4 flex items-center gap-4">
                <TextInput
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-lg"
                    placeholder="Rechercher..."
                />
                {isAdmin && (
                    <PrimaryButton onClick={() => handleEdit()}>
                        Ajouter
                    </PrimaryButton>
                )}
            </div>
            <div className="space-y-12">
                {filtered.map((p, index) => (
                    <div key={p.id} className="grid gap-4 md:grid-cols-2">
                        {index % 2 === 0 ? (
                            <>
                                <img
                                    src={
                                        p.images[0]?.url ||
                                        placeholders[
                                            index % placeholders.length
                                        ]
                                    }
                                    className="h-64 w-full rounded object-cover"
                                />
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#446D49]">
                                            {p.first_name} {p.last_name}
                                        </h2>
                                        <p>{p.description}</p>
                                    </div>
                                    {isAdmin && (
                                        <div className="mt-2 flex gap-2">
                                            <SecondaryButton
                                                onClick={() => handleEdit(p)}
                                            >
                                                Modifier
                                            </SecondaryButton>
                                            <DangerButton
                                                onClick={() =>
                                                    handleDelete(p.id)
                                                }
                                            >
                                                Supprimer
                                            </DangerButton>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="order-2 flex flex-col justify-between md:order-1">
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#446D49]">
                                            {p.first_name} {p.last_name}
                                        </h2>
                                        <p>{p.description}</p>
                                    </div>
                                    {isAdmin && (
                                        <div className="mt-2 flex gap-2">
                                            <SecondaryButton
                                                onClick={() => handleEdit(p)}
                                            >
                                                Modifier
                                            </SecondaryButton>
                                            <DangerButton
                                                onClick={() =>
                                                    handleDelete(p.id)
                                                }
                                            >
                                                Supprimer
                                            </DangerButton>
                                        </div>
                                    )}
                                </div>
                                <img
                                    src={
                                        p.images[0]?.url ||
                                        placeholders[
                                            index % placeholders.length
                                        ]
                                    }
                                    className="order-1 h-64 w-full rounded object-cover md:order-2"
                                />
                            </>
                        )}
                    </div>
                ))}
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <form onSubmit={handleSubmit} className="space-y-4 p-6">
                    <InputLabel htmlFor="first_name">Prénom</InputLabel>
                    <TextInput
                        id="first_name"
                        name="first_name"
                        defaultValue={editing?.first_name ?? ''}
                        required
                        className="w-full rounded"
                    />
                    <InputLabel htmlFor="last_name">Nom</InputLabel>
                    <TextInput
                        id="last_name"
                        name="last_name"
                        defaultValue={editing?.last_name ?? ''}
                        required
                        className="w-full rounded"
                    />
                    <InputLabel htmlFor="address_road">Adresse</InputLabel>
                    <TextInput
                        id="address_road"
                        name="address_road"
                        defaultValue={editing?.address_road ?? ''}
                        required
                        className="w-full rounded"
                    />
                    <InputLabel htmlFor="zipcode">Code postal</InputLabel>
                    <TextInput
                        id="zipcode"
                        name="zipcode"
                        defaultValue={editing?.zipcode ?? ''}
                        required
                        className="w-full rounded"
                    />
                    <InputLabel htmlFor="city">Ville</InputLabel>
                    <TextInput
                        id="city"
                        name="city"
                        defaultValue={editing?.city ?? ''}
                        required
                        className="w-full rounded"
                    />
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <TextInput
                        id="description"
                        name="description"
                        defaultValue={editing?.description ?? ''}
                        required
                        className="w-full rounded"
                    />
                    <InputLabel htmlFor="pictures">
                        Photos (IDs séparés par des virgules)
                    </InputLabel>
                    <TextInput
                        id="pictures"
                        name="pictures"
                        defaultValue={
                            editing?.images.map((i) => i.id).join(',') ?? ''
                        }
                        className="w-full rounded"
                    />
                    <div className="flex justify-end gap-2 pt-4">
                        <SecondaryButton type="submit">
                            {editing ? 'Mettre à jour' : 'Créer'}
                        </SecondaryButton>
                        <DangerButton
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Annuler
                        </DangerButton>
                    </div>
                </form>
            </Modal>
            <Modal
                show={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
            >
                <div className="space-y-4 p-6">
                    <p>
                        Êtes-vous sûr de vouloir supprimer ce producteur&nbsp;?
                    </p>
                    <div className="flex justify-end gap-2">
                        <SecondaryButton
                            type="button"
                            onClick={() => setShowDeleteModal(false)}
                        >
                            Annuler
                        </SecondaryButton>
                        <DangerButton type="button" onClick={confirmDelete}>
                            Supprimer
                        </DangerButton>
                    </div>
                </div>
            </Modal>
        </FrontOffice>
    );
}
