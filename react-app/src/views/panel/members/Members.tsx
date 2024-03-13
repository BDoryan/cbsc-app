import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

const Members: React.FC<RouteComponentProps<{}>> = () => {

    return (
        <>
            <h1 className="text-2xl mb-2 font-bold">Liste des membres</h1>
            <p className="text-sm">Retrouvez tous les membres de votre club et faciliter leurs gestions et la communication avec eux.</p>
            <div className="pt-3">
                <Link to="/members/new" className="flex justify-center w-full mt-auto px-4 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">
                    + Nouveau membre
                </Link>
            </div>
            <hr className="my-5" />
            <div className="flex flex-col gap-3">
                <div className="mt-2 w-full">
                    <label htmlFor="search" className="mb-2 block text-sm font-medium leading-6 text-gray-900">Rechercher un membre</label>
                    <input id="search" name="search" type="text" autoComplete="search" required className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <p className="text-gray-400 text-xs py-2 mb-2">Nous avons trouvée 1 membre(s) dans votre club</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
                    <div className="flex flex-col items-center p-10 pb-0">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900">Bonnie Green</h5>
                        <span className="text-sm text-gray-500">Visual Designer</span>
                    </div>
                        <div className="flex justify-center flex-wrap mt-4 md:mt-6 gap-2 pb-10 px-4">
                            <a href="tel:0623647928" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300">
                                <i className="fa-solid fa-phone pe-1 text-sm"></i>
                                Téléphoner
                            </a>
                            <a href="sms:0623647928" className="py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                                <i className="fa-solid fa-envelope pe-1 text-sm"></i>
                                Message
                            </a>
                            <a className="py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                                <i className="fa-solid fa-pen pe-1 text-sm"></i>
                                Gérer
                            </a>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Members;