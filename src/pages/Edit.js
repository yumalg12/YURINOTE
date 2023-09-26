import { useParams } from "react-router-dom";

const Edit = () => {
    const {id} = useParams();
    return <div>{id} Edit입니다.</div>;
};

export default Edit;