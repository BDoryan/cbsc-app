import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import ConfirmDialog from "../dialog/ConfirmDialog";
import {useDialog} from "../../context/DialogContext";


const ConvocationResponse: any = () => {

    const {id}: any = useParams();
    const { setDialog } = useDialog();

    useEffect(() => {
        setDialog(
            <ConfirmDialog confirm={{
                background: 'red',
                color: 'white',
                text: 'Je serais absent',
                onclick: () => {

                }
            }}
                           cancel={{
                               background: 'white',
                               color: 'gray',
                               text: 'Annuler',
                               onclick: () => {

                               }
                           }}
                           title={"Confirmez vous que vous serez bien absent"}
                           content={"Vous êtes vraiment sûr que vous ne serez pas présent pour cette convocation."}
            />
        )
    }, []);

    return (
        <>
            <div className="bg-gray-100 h-[100vh] relative overflow-auto">
                <div className="p-5">
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
                        <span className="text-gray-600">Le <span
                            className="text-indigo-600">12/09/2021 à 14:00</span></span>
                    </p>
                </div>
                <div
                    className="absolute left-0 right-0 bottom-0 bg-white p-3 border-t-[1px] border-gray-200 shadow-inner py-6">
                    <p className={"leading-[1em] text-gray-600"}>
                        Est-ce que vous serez présent ?
                    </p>
                    <div className="flex justify-between gap-3 mt-5">
                        <button
                            className="text-sm w-full bg-red-700 rounded-lg px-4 py-2 text-gray-200 hover:bg-red-800">
                            Je ne serais pas présent
                        </button>
                        <button
                            className="text-sm w-full bg-green-700 rounded-lg px-4 py-2 text-white hover:bg-green-800 hover:text-white">
                            Je serais présent
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConvocationResponse;
