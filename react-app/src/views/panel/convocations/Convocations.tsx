import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

const Convocations: React.FC<RouteComponentProps<{}>> = () => {

    return (
        <>
            <h1 className="text-2xl mb-2 font-bold">Liste des convocations</h1>
            <p className="text-sm">
                Retrouvez toutes les convocations à venir pour les événements, réunions et rendez-vous importants.
            </p>
            <div className="pt-3">
                <Link to="/convocations/new" className="flex justify-center w-full mt-auto px-4 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">
                    + Créer une convocation
                </Link>
            </div>
            <hr className="my-5" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
                    <div className="flex flex-col p-4 pb-0">
                        <h2 className="mb-1 text-lg font-medium text-gray-900">Rendez-vous pour entretien des terrains</h2>
                        <p className="text-sm text-gray-500 leading-[1.3em]">
                            Le bureau à décidé de mettre en place un rendez-vous pour l'entretien des terrains et le club organisera un petit concours avec un apéro à la fin.
                        </p>
                        <div className="py-6">
                            <p className="text-sm text-gray-600">
                                <span className="text-indigo-600">11 membre(s)</span> ont été convié(s) à cet événement.<br />
                                <span className="text-gray-600">Le <span className="text-indigo-600">12/09/2021 à 14:00</span></span>
                            </p>
                        </div>
                        <div className="flex justify-between flex-wrap gap-2 mb-5">
                            <Link to="/convocations/1" className="py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                                <i className="fa-solid fa-eye pe-1 text-sm"></i>
                                Voir
                            </Link>
                            <Link to="/convocations/1/delete" className="py-2 px-4 text-sm font-medium text-red-600 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-red-50 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-red-100">
                                <i className="fa-solid fa-trash pe-1 text-sm"></i>
                                Supprimer
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Convocations;