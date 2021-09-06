import { useState } from "react";

export default function PercentageCalculatorTwo() {
    const [salary, setSalary] = useState(45000);
    const [subscriptionCost, setSubscriptionCost] = useState(12);

    const handleSalaryChange = (event) => {
        setSalary(event.target.value);
    };

    const handleCostChange = (event) => {
        setSubscriptionCost(event.target.value);
    };

    const percentageCost = (((subscriptionCost * 12) / salary) * 100).toFixed(
        2
    );

    return (
        <div className="my-8">
            <p className="font-sans text-xl">
                What's your annual salary after taxes?
            </p>
            <p></p>
            <label>
                Annual salary:
                <input
                    type="number"
                    value={salary}
                    onChange={handleSalaryChange}
                    placeholder={salary}
                />
            </label>
            <label>
                Copilot price per month:
                <input
                    type="number"
                    value={subscriptionCost}
                    onChange={handleCostChange}
                    placeholder={subscriptionCost}
                />
            </label>
            <p>Copilot costs {percentageCost}% of your annual budget</p>
        </div>
    );
}
