import React from "react";
import "@styles/deals.scss";
import { topDealUsers } from "@data";
import Image from "next/image";

const Deals = () => {
  return (
    <div className="deals">
      <h2>Top Deals</h2>
      <div className="deals__list">
        {topDealUsers.map((user) => (
          <div className="deals__list--item" key={user.id}>
            <div className="deals__list--user">
              <div className="deals__list--userImage">
                <Image
                  src={user.img}
                  fill={true}
                  alt="user-image"
                  className="deals__list--userImage--img"
                />
              </div>
              <div className="deals__list--userText">
                <span className="deals__list--username">{user.username}</span>
                <span className="deals__list--email">{user.email}</span>
              </div>
            </div>
            <span className="deals__list--amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
