import React from "react";
import { TbBrandDolbyDigital } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { Tooltip } from "@mui/material";

export default function Navbars() {
  return (
    <div className="max-w-5xl mx-auto p-4 flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <TbBrandDolbyDigital className="text-4xl text-black" />
        <p className="font-medium">Digital</p>
      </div>

      <div className="font-medium text-sm">
        <ul className="flex items-center gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Page</li>
          <li>Conctact</li>
        </ul>
      </div>

      <div className="font-medium text-sm">
        <ul className="flex items-center justify-center gap-4">
          <li className="flex items-center gap-2">
            <p>
              <FaPhone className="text-lg text-black" />{" "}
            </p>
            <p>+250 7872 890 28</p>
          </li>
          <Tooltip title="click here to sent an e-mail" arrow placement="bottom">
            <li>
              <p className="cursor-pointer">
                <MdMarkEmailUnread className="text-lg text-black" />{" "}
              </p>
            </li>
          </Tooltip>

          <li className="bg-cyan-900 text-white py-2 px-4 rounded-full">
            Free Analysis
          </li>
        </ul>
      </div>
    </div>
  );
}
