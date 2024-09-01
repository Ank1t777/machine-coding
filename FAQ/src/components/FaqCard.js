import data from "../data.js";
import FaqItem from "./FaqItem.js";

export default function FaqCard() {
  return (
    <>
      {data.map((item, index) => {
        return <FaqItem key={index} faq={item} index={index} />;
      })}
    </>
  );
}
