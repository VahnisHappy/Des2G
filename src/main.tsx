import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import store from "@/store";
import {Provider} from "react-redux";
import {createHashRouter, RouterProvider} from "react-router-dom";
import routes from "@/routes";

window.addEventListener('beforeunload', function (event) {
    event.preventDefault();
    event.returnValue = '';
    alert("Data will be lost if you reload the page, are you sure?");
});

const router = createHashRouter(routes);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
