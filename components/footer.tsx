import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone, Search,ChevronsUp } from "lucide-react";
import {
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaTelegram,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="container mx-auto bg-footer_back px-4 md:px-16 lg:px-28 pt-6">
        <div className="grid-cols-1 grid md:grid-cols-3 gap-8">
          <div className="md:hidden order-2 grid grid-cols-2">
          <div className="pl-6">
            <h2 className="text-sm font-semibold mb-4 text-footer_color">
              Useful Links
            </h2>
            <div className="mb-4">
              <a href="#" className="text-xs text-footer_color">
                Result Verification
              </a>
            </div>
            <div className="mb-4">
              <a
                href="http://library.rpsu.edu.bd/"
                className="text-xs text-footer_color" target="_blank" rel="noopener noreferrer"
              >
                E-Library
              </a>
            </div>
            <div className="mb-4">
              <a
                href="http://103.191.178.77:8081/career/"
                className="text-xs text-footer_color"
                target="_blank" rel="noopener noreferrer"
              >
                Career at RPSU
              </a>
            </div>
            <div className="mb-4">
              <a
                href="https://ugc.gov.bd/"
                className="text-xs text-footer_color"
                target="_blank" rel="noopener noreferrer"
              >
                UGC Bangladesh
              </a>
            </div>
            <div className="mb-4">
              <a href="#" className="text-xs text-footer_color">
                Kumudini Sister Concerns
              </a>
            </div>
          </div>
          <div className="pl-6">
            <h2 className="text-sm font-semibold mb-4 text-footer_color">
              Reach Out
            </h2>
            <ul>
              <li className="flex items-center mb-4">
                <MapPin className="text-footer_color" />
                <span className="text-footer_color ml-2 text-xs">
                  25, Sultan Giasuddin Road. <br />
                  Shitalakhya, Naryanganj-1400
                </span>
              </li>
              <li className="flex items-center mb-4">
                {" "}
                <Phone className="text-footer_color" />
                <span className="text-footer_color ml-2 text-xs">info@rpsu.edu.bd</span>
              </li>
              <li className="flex items-center mb-4">
                {" "}
                <Mail className="text-footer_color" />
                <span className="text-footer_color ml-2 text-xs">(+88) 02-7635000</span>
              </li>
            </ul>
            <div className="flex md:hidden justify-center items-center">
            <div className="flex justify-center items-center w-14 h-14 rounded-full bg-footer_color hover:bg-gray-400 cursor-pointer">
              <ChevronsUp className="text-gray-700 text-2xl" />
            </div>
            </div>
          </div>
          </div>
          <div className="hidden md:grid">
            <h2 className="text-lg font-semibold mb-4 text-footer_color">
              Useful Links
            </h2>
            <div className="mb-4">
              <a href="#" className="text-sm text-footer_color"
              target="_blank" rel="noopener noreferrer">
                Result Verification
              </a>
            </div>
            <div className="mb-4">
              <a
                href="http://library.rpsu.edu.bd/"
                className="text-sm text-footer_color"
                target="_blank" rel="noopener noreferrer"
              >
                E-Library
              </a>
            </div>
            <div className="mb-4">
              <a
                href="http://103.191.178.77:8081/career/"
                className="text-sm text-footer_color"
                target="_blank" rel="noopener noreferrer"
              >
                Career at RPSU
              </a>
            </div>
            <div className="mb-4">
              <a
                href="https://ugc.gov.bd/"
                className="text-sm text-footer_color"
                target="_blank" rel="noopener noreferrer"
              >
                UGC Bangladesh
              </a>
            </div>
            <div className="mb-4">
              <a href="#" className="text-sm text-footer_color"
              target="_blank" rel="noopener noreferrer">
                Kumudini Sister Concerns
              </a>
            </div>
          </div>
          <div className="hidden md:grid">
            <h2 className="text-lg font-semibold mb-4 text-footer_color">
              Reach Out
            </h2>
            <ul>
              <li className="flex items-center mb-4">
                <MapPin className="text-footer_color" />
                <span className="text-footer_color ml-2">
                  25, Sultan Giasuddin Road. <br />
                  Shitalakhya, Naryanganj-1400
                </span>
              </li>
              <li className="flex items-center mb-4">
                <Phone className="text-footer_color" />
                <span className="text-footer_color ml-2">info@rpsu.edu.bd</span>
              </li>
              <li className="flex items-center mb-4">
                <Mail className="text-footer_color" />
                <span className="text-footer_color ml-2">(+88) 02-7635000</span>
              </li>
            </ul>

          </div>
          <div className="order-1 md:order-3 px-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-3 pl-4 rounded-lg bg-white focus:outline-none text-gray-700"
              />
              <Search className="absolute right-4 top-3 text-gray-500" />
            </div>
            <div className="grid md:hidden text-center pt-12 border-b border-footer_border">
              <h2 className="text-lg font-semibold mb-4 text-footer_color">Find us Online</h2>
            </div>
            <div className="flex space-x-6 text-footer_color text-3xl my-6 justify-center items-center">
              <a href="#" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-red-600 cursor-pointer" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="hover:text-blue-400 cursor-pointer" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-600 cursor-pointer" />
              </a>
            </div>

            <div className="md:flex hidden justify-center items-center">
            <div className="flex justify-center items-center w-14 h-14 rounded-full bg-footer_color hover:bg-gray-400 cursor-pointer">
              <ChevronsUp className="text-gray-700 text-2xl" />
            </div>
            </div>
          </div>
        </div>
        <div className="border-t p-4 text-footer_color_s text-sm border-footer_border text-center py-6 mt-4">
          <p>Copyright © RPSU 2014-2024. Designed By Software Development Team, RPSU</p>
        </div>
      </footer>
    </>
  );
}
