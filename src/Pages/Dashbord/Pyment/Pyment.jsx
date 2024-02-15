import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheakOutForm from "./CheakOutForm";

//TODO: add publisable key
const stripePromise = loadStripe(import.meta.env.VIT_Payment_Gateway_PK);
const Pyment = () => {

    return (
        <div>
            <SectionTitle heading="payment" subHeading="Please pay to eat"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                  <CheakOutForm></CheakOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Pyment;