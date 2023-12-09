import InsuranceCard from "@/components/InsuranceCard";
import React from "react";

const Product2 = () => {
  const insurance = [
    {
      id: 1,
      title: "AT&T protect advantage for 1",
      deviceTotal: 1,
      claims_loss_theft_pdamage: 3,
      claims_acc_damage: 2,
      price: [14, 17],
      enrolled: "per mobile number enrolled",
    },
    {
      id: 2,
      title: "AT&T protect advantage for 4",
      deviceTotal: 4,
      claims_loss_theft_pdamage: 8,
      claims_acc_damage: 6,
      price: 45,
      enrolled: "per account enrolled",
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="bg-red-50 w-full h-full px-12 py-8">
        <div className="bg-pink-100 w-full h-full flex flex-col xl:flex-row justify-between">
          {insurance.map(insurance => {
            return (
              <InsuranceCard
                key={insurance.id}
                id={insurance.id}
                title={insurance.title}
                deviceTotal={insurance.deviceTotal}
                claims_loss_theft_pdamage={insurance.claims_loss_theft_pdamage}
                claims_acc_damage={insurance.claims_acc_damage}
                price={insurance.price}
                enrolled={insurance.enrolled}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product2;
