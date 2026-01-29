import React from "react";
import "./social.css"; // Optional: if you move the original styles here
import {
  IconBrandFacebook,
  IconBrandInstagramFilled,
  IconBrandTelegram,
  IconBrandX,
} from "@tabler/icons-react";

const SocialIcons = () => {
  const routerHandler = (href) => {
    if (window) {
      window.open(href, "_blank");
    }
  };
  return (
    <ul className="wrapper">
      <li
        className="icon facebook"
        onClick={() =>
          routerHandler("https://www.facebook.com/share/16n61EAcx8/")
        }
      >
        <span className="tooltip">Facebook</span>
        <IconBrandFacebook height="1.2em" fill="currentColor" />
      </li>
      <li
        className="icon facebook"
        onClick={() => routerHandler("https://t.me/noworyapp")}
      >
        <span className="tooltip">Telegram</span>
        <IconBrandTelegram height="1.2em" fill="currentColor" />
      </li>

      <li
        className="icon twitter"
        onClick={() => routerHandler("https://x.com/noworyapp")}
      >
        <span className="tooltip">X</span>
        <IconBrandX height="1.2em" fill="currentColor" />
      </li>
      <li
        className="icon instagram"
        onClick={() => routerHandler("https://www.instagram.com/noworyapp/")}
      >
        <span className="tooltip">Instagram</span>
        <IconBrandInstagramFilled height="1.2em" fill="currentColor" />
      </li>
    </ul>
  );
};

export default SocialIcons;
