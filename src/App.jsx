import { useState } from "react";
import Menu from "./Menu";
import Title from "./Title";

import menu from './data'
import Categories from "./Categories";

// const temCategories = menu.map((item) => item.category);
// const tempSet = new Set(temCategories);
// const tempItems = ['all', ...tempSet];

const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  // console.log(categories);
  const filterItems = (category) => {
    // console.log(category);
    if (category === 'all') {
      setMenuItems(menu)
      return;
    }
    const newItem = menu.filter((item) => item.category === category);
    setMenuItems(newItem);
  }
  return <menu>
    <section className="menu">
      <Title text={'Our menu'} />
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>

  </menu>;
};
export default App;
