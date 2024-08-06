import { staticPath } from "../../Config";

export const Allowed = function () {
  return (
    <section className="allowed">
      <div className="allowed-wrap container">
        <div className="allowed__group">
          <div className="allowed__item">
            <img
              src={`${staticPath}/svg/instagram_icon.svg`}
              alt="inst-icon"
              className="allowed__item-icon"
            />
            <p className="allowed__item-title">Instagram</p>
          </div>
          <div className="allowed__item">
            <img
              src={`${staticPath}/svg/tiktok_icon.svg`}
              alt="tiktok-icon"
              className="allowed__item-icon"
            />
            <p className="allowed__item-title">TikTok</p>
          </div>
          <div className="allowed__item">
            <img
              src={`${staticPath}/svg/telegram_icon.svg`}
              alt="telegram-icon"
              className="allowed__item-icon"
            />
            <p className="allowed__item-title">Telegram</p>
          </div>
        </div>
      </div>
    </section>
  );
};
