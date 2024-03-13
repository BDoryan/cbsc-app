import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

const CreateConvocation: React.FC<RouteComponentProps<{}>> = () => {

    return (
        <>
            <h1 className="text-2xl mb-2 font-bold">Création de la convocation</h1>
            <hr className="my-5" />

            <form className="space-y-6" action="#" method="POST">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Titre de la convocation</label>
                    <div className="mt-2">
                        <input id="title" name="title" type="texct" autoComplete="title" required className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Message de la convocation</label>
                    <div className="mt-2">
                        <textarea rows={4} id="message" name="message" autoComplete="message" required className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label htmlFor="sex" className="block text-sm font-medium leading-6 text-gray-900">Date de la convocation</label>
                    <div className="mt-2">
                        <div className="relative h-9 block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <input className="absolute bg-transparent px-3 top-0 left-0 w-full h-full" id="sex" name="datetime" type="datetime-local" autoComplete="birthday" required />
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-muted text-sm italic text-gray-500 mb-3">
                        Lorsqu'on vous aurez terminé la création de votre convocation, une notification sera envoyé à tous les membres de l'association.
                    </p>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <i className="fa-solid f"></i>
                        Créer la convocation
                    </button>
                </div>
            </form>
        </>
    )
}

export default CreateConvocation;