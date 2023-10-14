import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFormattedDate, setPageTitle } from "../util.js";
import NoteSelect from "../component/User/NoteSelect";

const Main = () => {
    useEffect(() => {
        setPageTitle("메인");
    }, []);

    return <NoteSelect/>;
};

export default Main;