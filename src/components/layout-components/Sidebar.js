import "./Sidebar.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCategoriesAction } from "../../slices/categories/categoriesAction";
export const Sidebar = () => {
  const { _cid } = useParams();
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    !categories.length && dispatch(getCategoriesAction());
  }, [dispatch, categories.length, _cid]);
  return (
    <div className="categories_div">
      {categories.map(
        (item, i) =>
          !item.catId && (
            <Link
              className={
                _cid === `${item._id}`
                  ? "nav-link categories -util-clicked "
                  : " nav-link categories"
              }
              to={"/categories/" + item._id}
              key={i}
              id={item._id}
            >
              {item.name === "Home & Kitchen" ? (
                <span>
                  {item.name}
                  <span className="-util-nav">*</span>
                </span>
              ) : (
                item.name
              )}
            </Link>
          )
      )}
    </div>
  );
};
