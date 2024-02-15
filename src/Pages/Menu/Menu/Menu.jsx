import Cover from "../../Shared/Cover/Cover";
import menuItem from '../../../assets/menu/banner3.jpg'
import dessertItem from '../../../assets/menu/dessert-bg.jpeg'
import przzaItem from '../../../assets/menu/pizza-bg.jpg'
import saladItem from '../../../assets/menu/salad-bg.jpg'
import soupItem from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            {/*main cover */}
            <Cover img={menuItem} title="our menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's offer"></SectionTitle>
            {/* offerd menu inems */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu inems */}
            <MenuCategory
           items={dessert}
           title="desert"
           coverImg={dessertItem}
           ></MenuCategory>
          {/* przza menu inems */}
            <MenuCategory
           items={pizza}
           title="pizza"
           coverImg={przzaItem}
           ></MenuCategory>
          {/* salad menu inems */}
            <MenuCategory
           items={salad}
           title="salad"
           coverImg={saladItem}
           ></MenuCategory>
          {/* przza menu inems */}
            <MenuCategory
           items={soup}
           title="soup"
           coverImg={soupItem}
           ></MenuCategory>
        </div>
    );
};

export default Menu;