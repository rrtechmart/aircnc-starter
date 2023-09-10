import Container from "../Shared/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";


const Categories = () => {
    return (
        <Container>
            from container
            <div className="pt-4 flex flex-row items-center justify-between overflow-y-auto">
                    {
                        categories.map(item => <CategoryBox
                        key={item.label}
                        label={item.label}
                        icon={item.icon}
                        ></CategoryBox>)
                    }
            </div>
        </Container>
    );
};

export default Categories;