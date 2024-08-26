"use client";

import { localities, Locality } from "@/constants/localityData";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import Select, { SingleValue, MenuListProps, StylesConfig } from "react-select";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setLocality } from "@/redux/localitySlice";

const OPTION_LIMIT = 5;

// Custom MenuList component to limit the number of options
const CustomMenuList = (props: MenuListProps<Locality, false>) => {
  const { children, maxHeight = 120, ...rest } = props;
  const visibleChildren = React.Children.toArray(children).slice(
    0,
    OPTION_LIMIT,
  );

  return (
    <div {...rest} style={{ maxHeight, overflowY: "auto" }}>
      {visibleChildren}
    </div>
  );
};

const SearchBox = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const selectedLocality = useSelector(
    (state: RootState) => state.locality.selectedLocality,
  );

  const handleChange = (option: SingleValue<Locality>) => {
    if (option) {
      dispatch(setLocality(option));

      // Navigate to the new page and pass latitude and longitude as query parameters
      router.push(`/weather/${option.localityId}`);
    }
  };

  const colourStyles: StylesConfig<Locality, false> = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      border: "none",
      boxShadow: "none",
      outline: "none",
    }),

    input: (styles) => ({ ...styles, color: "black" }),
    placeholder: (styles) => ({ ...styles, color: "gray" }),
    singleValue: (styles) => ({ ...styles, color: "black" }),
    option: (styles, { isSelected }) => ({
      ...styles,
      color: isSelected ? "white" : "gray",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        color: isSelected ? "white" : "black",
        backgroundColor: isSelected
          ? "rgb(15, 10, 200)"
          : styles.backgroundColor,
      },
    }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    dropdownIndicator: (styles) => ({ ...styles, display: "none" }),
    clearIndicator: (styles) => ({ ...styles, display: "none" }),
  };

  return (
    <div className="mx-auto flex w-full max-w-xs items-center gap-2 rounded-full border-2 border-[#DFE1E5] px-4 transition-all duration-300 ease-in-out focus-within:border-[#d1d2d6] focus-within:shadow-sm hover:border-[#d1d2d6] hover:shadow-sm md:max-w-md lg:max-w-xl">
      <IoIosSearch className="text-gray-600" size={20} />
      <Select
        className="flex-1"
        options={localities}
        value={selectedLocality}
        onChange={handleChange}
        placeholder=""
        isClearable
        getOptionLabel={(option) =>
          option.localityName
            ? `${option.localityName} - ${option.cityName}`
            : ""
        }
        getOptionValue={(option) => option.localityId}
        components={{ MenuList: CustomMenuList }}
        styles={colourStyles}
      />
      <Image
        src={require("@/assets/mic.png")}
        alt="Search by voice"
        width={14}
        height={14}
        title="Search by voice"
        className="cursor-pointer"
      />
    </div>
  );
};

export default SearchBox;
