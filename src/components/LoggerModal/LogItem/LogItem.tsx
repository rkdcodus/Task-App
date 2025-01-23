import { ILogItem } from "../../../types";
import { BsFillPersonFill } from "react-icons/bs";
import { author, date, logItemWrap, message } from "./LogItem.css";

type TLogItemProps = {
  LogItem: ILogItem;
};

const LogItem = ({ LogItem }: TLogItemProps) => {
  const timeOffset = new Date(Date.now() - Number(LogItem.logTimestamp));

  const showOffsetTime = `
  ${timeOffset.getMinutes() > 0 ? `${timeOffset.getMinutes()}m` : ""}
  ${timeOffset.getSeconds() > 0 ? `${timeOffset.getSeconds()}s age` : ""}
  ${timeOffset.getSeconds() === 0 ? `just now` : ""}
  `;

  return (
    <div className={logItemWrap}>
      <div className={author}>
        <BsFillPersonFill />
        {LogItem.logAuthor}
      </div>
      <div className={message}>{LogItem.logMessage}</div>
      <div className={date}>{showOffsetTime}</div>
    </div>
  );
};

export default LogItem;
