import {
  CategoriesContext,
  FlagCartEffectContext,
  PagesContext,
  SearchContext,
} from "../../context/index";
import React, {
  useEffect,
  useState,
  useContext,
  useCallback,
  useMemo,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const CategoryLinks = () => {
  const navigate = useNavigate();
  const { setPage } = useContext(PagesContext);

  const {
    filterCategories,
    allCategories,
    setAllCategories,
    setFilterCategories,
    setCategoryTag,
  } = useContext(CategoriesContext);

  const handlerClickCategories = (
    navigate,
    setFilterCategories,
    setCategoryTag,
    category,
    setPage
  ) => {
    return () => {
      setFilterCategories(category.id);
      setCategoryTag(category.name);
      setPage(1);
      navigate(`/shop/categories/${category.name}`);
    };
  };

  const handleCategoryClick = useCallback(
    (category) => {
      handlerClickCategories(
        navigate,
        setFilterCategories,
        setCategoryTag,
        category,
        setPage
      )();
    },
    [navigate, setFilterCategories, setCategoryTag, setPage]
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }),
    []
  );

  return (
    <div className="flex justify-center items-center gap-4 m-2 h-fit overflow-x-auto">
      {/* <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex gap-2 items-center overflow-x-auto"
      > */}
      {allCategories?.categories?.map((category) => (
        <motion.h3
          key={category.id}
          // variants={itemVariants}
          onClick={() => handleCategoryClick(category)}
          className={`${
            filterCategories === category.id ? "text-[#Dbb1bc]" : ""
          } text-[#524343] hover:text-[#Dbb1bc] cursor-pointer rounded-md p-1`}
        >
          {category.name}
        </motion.h3>
      ))}
      {/* </motion.div> */}
    </div>
  );
};

export default CategoryLinks;
