import { CategoriesContext, PagesContext } from "../../context/index";
import React, { useEffect, useContext, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  navbarCategoryStyle,
  navbarCategoryStyle_Selected,
} from "../../styles";
import { motion } from "framer-motion";
import getCategories from "../../utils/categories/getCategories";

const CategoryLinks = () => {
  const navigate = useNavigate();
  const { setPage } = useContext(PagesContext);

  const {
    allCategories,
    setAllCategories,
    setFilterCategories,
    setCategoryTag,
  } = useContext(CategoriesContext);

  const handlerClickCategories = (setCategoryTag, category, setPage) => {
    return () => {
      setCategoryTag(category.name);
      setPage(1);
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

  // const itemVariants = useMemo(
  //   () => ({
  //     hidden: { opacity: 0, y: -20 },
  //     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  //   }),
  //   []
  // );

  useEffect(() => {
    getCategories(setAllCategories);
  }, []);

  return (
    <div className="flex justify-center items-center gap-4 m-2 h-fit ">
      {/* <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex gap-2 items-center overflow-x-auto"
      > */}
      {allCategories?.categories?.map((category) => (
        // <motion.h3
        //   key={category.id}
        // variants={itemVariants}
        // >
        <NavLink
          to={`/shop/categories/${category.name}`}
          key={category.id}
          className={({ isActive }) =>
            isActive ? navbarCategoryStyle_Selected : navbarCategoryStyle
          }
          onClick={() => handleCategoryClick(category)}
        >
          {category.name}
        </NavLink>
        // </motion.h3>
      ))}
      {/* </motion.div> */}
    </div>
  );
};

export default CategoryLinks;
