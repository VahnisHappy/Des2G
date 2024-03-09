import {Stack} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import RouteCard from "@/components/organisms/RouteCard";
import ButtonInput from "@/components/atoms/ButtonInput";
import {AppActions, RouteActions} from "@/store/actions";
import {createRoute} from "@/factory";
import {Route} from "@/types";

export default function RouteControlPanel() {
    const routes = useSelector((state: RootState) => state.routeState.data);
    const dispatch = useDispatch();

    const handleChange = (index: number) => (route: Route) => {
        const c_routes = [...routes];
        c_routes[index] = route;
        errorHighlight(c_routes);
        dispatch(RouteActions.setRoutes(c_routes));
    }

    const errorHighlight = (c_routes: Route[]) => {
        const map = new Map<string, number>();
        c_routes.forEach(s => {
            const count = map.get(s.id.value) || 0;
            map.set(s.id.value, count + 1);
        });
        c_routes.forEach((s, i)=>{
            const count = map.get(s.id.value) || 0;
            const c_s = {...s};
            c_s.id = {...c_s.id, error: count > 1 || c_s.id.value.length < 1};
            c_s.name = {...c_s.name, error: count > 1 || c_s.name.value.length < 1};
            c_s.type = {...c_s.type, error: c_s.type.value.length < 1};
            c_routes[i] = c_s;
        })
    }
    const handleEdit = (index: number) => () => {
        dispatch(AppActions.setMode("draw"));
        dispatch(AppActions.setEdited(true));
        dispatch(RouteActions.editRoute(index));
    }
    const handleDelete = (index: number) => () => {
        if (routes[index].edit) {
            dispatch(AppActions.setMode("drag"));
            dispatch(AppActions.setEdited(false));
        }
        dispatch(RouteActions.removeRoute(index));
    }
    const handleExitEdit = () => {
        dispatch(AppActions.setMode("drag"));
        dispatch(AppActions.setEdited(false));
        dispatch(RouteActions.exitEditRoute());
    }
    const handleColorChange = (index: number) => (color: string) => {
        dispatch(RouteActions.setRouteColor({index, color}))
    }

    return <>
        {routes.length ? <Stack direction="column">{routes.map((route, index) =>
            <RouteCard key={index} route={route} onChange={handleChange(index)} onEdit={handleEdit(index)} onExitEdit={handleExitEdit}
                       onDelete={handleDelete(index)} onColorChange={handleColorChange(index)}/>)}
        </Stack> : <div style={{textAlign: "center"}}>
            <div>--- no routes ---</div>
            <div style={{fontSize: '10px'}}>you can create new one!</div>
        </div>}
        <ButtonInput label="add" onClick={() => dispatch(RouteActions.addRoute(createRoute("#00CCC0")))} />
    </>
}