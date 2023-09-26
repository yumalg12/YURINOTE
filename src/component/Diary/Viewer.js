import { emotionList, getEmotionImgById } from '../../util';
import './Viewer.css';

const Viewer = ({ content, emotionId }) => {
    const emotionItem = emotionList.find(e=>e.id === emotionId);
    return (
    <div className='Viewer'>
        <h4>오늘의 감정</h4>
        <div className={['emotion_img_wrapper', `EmotionItem_on_${emotionId}`].join(' ')}>
            <img alt={emotionItem.name} src={getEmotionImgById(emotionId)}/>
            <span className='emotion_name'>{emotionItem.name}</span>
        </div>
        <h4>오늘의 일기</h4>
        <div className='input_wrapper'>
            <p>{content}</p>
        </div>
    </div>
    )
}

export default Viewer;