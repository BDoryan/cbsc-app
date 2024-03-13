import React, {useState} from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';

const Notification: React.FC<RouteComponentProps<{}>> = () => {

    return (
        <>
            <div className="absolute right-5 bottom-5 max-w-[75%]">
                <div className="p-3 shadow-lg rounded-lg">
                    <div className="flex flex-row items-center justify-between">
                    <span className="text-sm font-bold text-green-700 ">
                        <i className="fa-solid fa-check-circle me-1"/>
                        Successfully saved!
                    </span>
                        <button className="text-gray-700 hover:text-gray-500">
                            <i className="fa-solid fa-close"/>
                        </button>
                    </div>
                    <p className="text-sm">
                        Vous êtes bien inscrit à la compétition.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Notification;
