import { useParams } from "react-router-dom";

const Diary = () => {
    const {id} = useParams();
    return <div>{id}번 Diary입니다.</div>;
};

export default Diary;