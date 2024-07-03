import Img1 from "../../assets/women/women2.jpg";
import { IoFastFood } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div data-aos="zoom-in">
            <img
              src={Img1}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto object-cover 
             drop-shadow-[-10px_10px_15px_rgba(0,0,0,1)]"
            />
          </div>

          {/* Info Text Section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Winter Sale up to 50% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-500 tracking-wide leading-5"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              voluptatem a ullam quia! Dolorum dignissimos, voluptate distinctio
              ab repellendus unde.
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full 
                bg-violet-100 dark:bg-violet-400"
                />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full 
                bg-orange-100 dark:bg-orange-400"
                />
                <p>Fast Food</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full 
                bg-green-100 dark:bg-green-400"
                />
                <p>Easy Payment method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full 
                bg-yellow-100 dark:bg-yellow-400"
                />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
