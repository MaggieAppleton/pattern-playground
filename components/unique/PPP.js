import fetchPPP from "purchasing-power-parity";
import { useState, useEffect } from "react";

function calculatePPP() {
    const [discount, setDiscount] = useState(null); // in percentage // number
    const [country, setCountry] = useState(null);
    const [originalPrice, setOriginalPrice] = useState(200); // number
    const [currency, setCurrency] = useState("USD"); // number

    useEffect(async () => {
        // go for ppp coupon now
        try {
            const ppp = await fetchPPP();
            const conversionFactor = ppp.pppConversionFactor;

            console.log(ppp);

            const pppDiscount = 100 - conversionFactor.toFixed(2);

            setCurrency(ppp.currenciesCountry[0].code);
            setCountry(ppp.countryName);
            setDiscount((100 - pppDiscount).toFixed(2));
        } catch (err) {
            return;
        }
    }, []);

    const finalPrice = discount
        ? (originalPrice - discount).toFixed(2)
        : originalPrice;

    return { discount, country, originalPrice, finalPrice, currency };
}

export default function PPP() {
    const { discount, country, currency, originalPrice, finalPrice } =
        calculatePPP();

    return (
        <p>
            You're in {country} which gives you a discount of {discount}{" "}
            {currency}. The original cost {originalPrice} but you'll pay{" "}
            {finalPrice} {currency}
        </p>
    );
}
