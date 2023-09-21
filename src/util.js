import emo_normal from "./img/emo_normal.svg";
import emo_good from "./img/emo_good.svg";
import emo_verygood from "./img/emo_verygood.svg";
import emo_happy from "./img/emo_happy.svg";
import emo_bad from "./img/emo_bad.svg";
import emo_angry from "./img/emo_angry.svg";
import emo_sad from "./img/emo_sad.svg";

  export const getEmotionImgById = (emotionId) => {
    const targetEmotionId = String(emotionId);
    switch (targetEmotionId){
      case "1":
        return emo_normal;
      case "2":
        return emo_good;
      case "3":
        return emo_verygood;
      case "4":
        return emo_happy;
      case "5":
        return emo_bad;
      case "6":
        return emo_angry;
      case "7":
        return emo_sad;
      default:
        return null;
    }
  };

  export const emotionList = [
    {
      id: 1,
      name: "평이함",
      img: getEmotionImgById(1),
    },
    {
      id: 2,
      name: "좋음",
      img: getEmotionImgById(2),
    },
    {
      id: 3,
      name: "매우 좋음",
      img: getEmotionImgById(3),
    },
    {
      id: 4,
      name: "행복함",
      img: getEmotionImgById(4),
    },
    {
      id: 5,
      name: "나쁨",
      img: getEmotionImgById(5),
    },
    {
      id: 6,
      name: "매우 나쁨",
      img: getEmotionImgById(6),
    },
    {
      id: 7,
      name: "우울함",
      img: getEmotionImgById(7),
    },
  ]

  export const getFormattedDate = (targetDate) => {
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();
    if (month < 10) {
      month = `0${month}`;
    }
    if (date < 10){
      date = `0${date}`;
    }
    return `${year}-${month}-${date}`;
  }