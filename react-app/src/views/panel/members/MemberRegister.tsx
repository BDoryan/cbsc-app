import React, {useState} from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';

const MemberRegister: React.FC<RouteComponentProps<{}>> = () => {

    return (
        <>
            <h1 className="text-2xl mb-2 font-bold">Création d'un membres</h1>
            <p className="text-sm">La création d'un membre va lui permettre d'intégrer votre club de pétanque.</p>
            <hr className="my-5"/>

            <form className="space-y-6" action="#" method="POST">
                <div>
                    <label htmlFor="profilePicture" className="block text-sm font-medium leading-6 text-gray-900">Choisissez
                        une photo de profil</label>
                    <div className="flex flex-row items-center justify-center ">
                        <div className="rounded-[50%] overflow-hidden shadow-md max-w-1/2 w-50 h-50 relative mt-4">
                            <img src="https://randomuser.me/api/portraits/men/93.jpg" id="preview" className=""
                                 alt="Aperçu de la photo de profil"/>
                            <div
                                className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-25 z-1">
                                <i className="fa-solid fa-camera text-white text-4xl text-opacity-50">
                                </i>
                            </div>

                            <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0"/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="firstname"
                               className="block text-sm font-medium leading-6 text-gray-900">Prénom</label>
                        <div className="mt-2">
                            <input id="firstname" name="firstname" type="text" autoComplete="firstname" required
                                   className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="lastname"
                               className="block text-sm font-medium leading-6 text-gray-900">Nom</label>
                        <div className="mt-2">
                            <input id="lastname" name="lastname" type="text" autoComplete="lastname" required
                                   className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Adresse
                        e-mail</label>
                    <div className="mt-2">
                        <input id="email" name="email" type="email" autoComplete="email" required
                               className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Numéro de
                        téléphone</label>
                    <div className="mt-2">
                        <input id="phone" name="phone" type="tel" autoComplete="email" required
                               className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="licence_number" className="block text-sm font-medium leading-6 text-gray-900">Numéro
                        de licence</label>
                    <div className="mt-2">
                        <input id="licence_number" name="licence_number" type="number" autoComplete="licence_number"
                               required
                               className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="example-select"
                           className="block text-sm font-medium leading-6 text-gray-900">Sexe</label>
                    <div className="mt-2">
                        <div
                            className="block relative h-9 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <select id="example-select" name="example-select"
                                    className="absolute px-3 bg-transparent top-0 left-0 w-full h-full bg-red-700">
                                <option value="option1">Homme</option>
                                <option value="option2">Femme</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="sex" className="block text-sm font-medium leading-6 text-gray-900">Date de
                        naissance</label>
                    <div className="mt-2">
                        <div
                            className="relative h-9 block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <input className="absolute bg-transparent px-3 top-0 left-0 w-full h-full" id="sex"
                                   name="birthday" type="date" autoComplete="birthday" required/>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="example-select"
                           className="block text-sm font-medium leading-6 text-gray-900">Rôle</label>
                    <div className="mt-2">
                        <div
                            className="block relative h-9 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <select id="example-select" name="example-select"
                                    className="absolute px-3 bg-transparent top-0 left-0 w-full h-full bg-red-700">
                                <option value="option1">Joueur</option>
                                <option value="option2">Licencié</option>
                                <option value="option3">Bureau</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-muted text-sm italic text-gray-500 mb-3">
                        Lorsque vous allez créer le compte de votre membre, celui-ci aura un QRCode qui permettra au
                        membre de se connecter à l'application.
                        <br/>
                        Le but étant de simplifier l'authentification
                    </p>
                    <button type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <i className="fa-solid f"></i>
                        Créer le compte
                    </button>
                </div>
            </form>
        </>
    )
}

export default MemberRegister;