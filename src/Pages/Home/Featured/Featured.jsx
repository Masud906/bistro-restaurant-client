import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import feturedItem from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div>
            <SectionTitle subHeading="click it out" heading="Featured Item"></SectionTitle>
           <div className="md:flex justify-center items-center py-8 px-16">
           <div>
                <img src={feturedItem} alt="" />
            </div>
            <div className="md:ml-10"> 
                <p>Aug 20, 2029</p>
                <p className="uppercase">where can i get some</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sint debitis quia necessitatibus ab id, voluptatum omnis nisi rem ratione. Fugit aspernatur officia, quibusdam perferendis aliquam ut error excepturi dignissimos.</p>
                <button className="btn btn-success my-5">Order Now</button>
            </div>
           </div>
        </div>
    );
};

export default Featured;