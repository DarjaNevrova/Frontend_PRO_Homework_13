import { Route, Routes } from "react-router-dom";
import { routes } from './routes'
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../store/asyncActions/fetchUsers";
import { useEffect } from "react";
import Nav from "../Nav";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers);
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        {routes.map(route => <Route {...route} />)}
      </Routes>
    </>
  );
}

export default App;