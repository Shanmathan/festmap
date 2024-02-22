import { facilities } from "@constants";
import { ContainerProps } from "src/interfaces";

const FacilitiesContainer = (prop: ContainerProps) => {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <h3 className='text-left lg:text-center text-3xl mt-5 text-[#242565] font-medium leading-normal ml-5 underline'>
        Facilities
      </h3>
      <div className='flex w-full mt-5 relative overflow-x-auto place-content-center'>
        {facilities.map((facility, index) => (
          <div key={index} className='flex flex-col items-center mx-2'>
            <img
              src={facility.src}
              alt={facility.alt}
              className={`w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20 mb-2 cursor-pointer object-cover`}
              onClick={() => {
                prop.setName(facility.name);
                handleScroll();
              }}
            />
            <p className={`text-sm md:text-base lg:text-lg text-center`}>
              {facility.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FacilitiesContainer;
