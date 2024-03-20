import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';


const ConvocationView: any = () => {

    const { id }:any = useParams();

    return (
        <>
            <h1 className="text-2xl mb-2 font-bold">
                Rendez-vous pour entretien des terrains
            </h1>
            <hr className="my-5"/>
            <h2 className="text-lg font-medium text-gray-900 mb-1">
                Détails de la convocation :
            </h2>
            <p className="text-sm">
                Le bureau à décidé de mettre en place un rendez-vous pour l'entretien des terrains et le club
                organisera un petit concours avec un apéro à la fin.
            </p>
            <p className="text-sm text-gray-600 mt-10">
                <span className="text-indigo-600">11 membre(s)</span> ont été convié(s) à cet événement.<br/>
                <span className="text-gray-600">Le <span className="text-indigo-600">12/09/2021 à 14:00</span></span>
            </p>
            <div className="mt-5 w-full">
                <label htmlFor="search" className="mb-2 block text-sm font-medium leading-6 text-gray-900">Rechercher un
                    membre</label>
                <input id="search" name="search" type="text" autoComplete="search" required
                       className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
            <div className="flex flex-col gap-3 mt-5">
                <div className="flex items-center shadow p-3 rounded-2xl">
                    <img className="w-10 h-10 rounded-full shadow-2xl"
                         src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Person 1"/>
                    <h3 className="text-lg font-medium text-gray-900 ms-2 me-auto">John Doe</h3>
                    <i className="fa-solid fa-check-circle me-1 text-green-700"></i>
                </div>
                <div className="flex items-center shadow p-3 rounded-2xl">
                    <img className="w-10 h-10 rounded-full shadow-2xl"
                         src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Person 1"/>
                    <h3 className="text-lg font-medium text-gray-900 ms-2 me-auto">John Doe</h3>
                    <i className="fa-solid fa-circle-xmark me-1 text-red-700"></i>
                </div>
                <div className="flex items-center shadow p-3 rounded-2xl">
                    <img className="w-10 h-10 rounded-full shadow-2xl"
                         src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Person 1"/>
                    <h3 className="text-lg font-medium text-gray-900 ms-2 me-auto">John Doe</h3>
                    <i className="fa-solid fa-hourglass-half me-1 text-gray-700"></i>
                </div>
            </div>
        </>
    )
}

export default ConvocationView;
