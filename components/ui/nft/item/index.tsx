/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from "react";
import { NftMeta, Nft } from "../../../../types/nft";

type NftItemProps = {
  item: Nft;
};

const NftItem: FunctionComponent<NftItemProps> = ({ item }) => {
  return (
    <>
      <div className="flex-shrink-0">
        {/* Use the next/image component for better image optimization */}
        <img
          className="h-72 w-full object-cover"
          src={item.meta.image}
          alt="New NFT"
          width={400} // Adjust the width and height as needed
          height={300}
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            Aadhaar NFT
          </p>
          <div className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{item.meta.name}</p>
            <p className="mt-3 mb-3 text-base text-gray-500">{item.meta.description}</p>
          </div>
        </div>
        <div className="overflow-hidden mb-4">
          <dl className="-mx-4 -mt-4 flex flex-wrap">
            <div className="flex flex-col px-4 pt-4">
            </div>
            {item.meta.attributes
              .filter(
                (Nftattribute) =>
                  Nftattribute.detail_type === "Name" ||
                  Nftattribute.detail_type === "Web3_Address"
              )
              .map((Nftattribute) => (
                <div className="flex flex-col px-4 pt-4" key={Nftattribute.value}>
                  <dt className="order-2 text-sm font-medium text-gray-600">
                    {Nftattribute.detail_type}
                  </dt>
                  <dd className="order-1 text-xl font-extrabold text-indigo-600">
                    {Nftattribute.value}
                  </dd>
                </div>
              ))}
          </dl>
        </div>
      </div>
    </>
  );
};

export default NftItem;
