import React from 'react';
import Panel from './views/panel/Panel';
import Home from './views/panel/Home';
import Members from './views/panel/members/Members';
import Competitions from './views/panel/competitions/Competitions';
import CreateConvocation from './views/panel/convocations/CreateConvocation';
import Convocations from './views/panel/convocations/Convocations';
import MemberRegister from './views/panel/members/MemberRegister';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import ConvocationView from "./views/panel/convocations/ConvocationView";
import ConvocationResponse from "./views/panel/convocations/ConvocationResponse";
import {DialogProvider} from "./views/context/DialogContext";

const AppRouter = () => {
    return (
        <DialogProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/test" element={<ConvocationResponse/>}/>
                    <Route exact path="/" element={<Panel/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/members" element={<Members/>}/>
                        <Route path="/members/new" element={<MemberRegister/>}/>

                        <Route path="/competitions" element={<Competitions/>}/>

                        <Route path="/convocations" element={<Convocations/>}/>
                        <Route path="/convocations/new" element={<CreateConvocation/>}/>
                        <Route path="/convocations/:id" element={<ConvocationView/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </DialogProvider>
    )
}

export default AppRouter;