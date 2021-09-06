import { useState } from "react";

// a react form component that takes in a salary and returns a percentage of that salary
export default function PercentageCalculator() {
    const [salary, setSalary] = useState(45000);
    const [subscriptionCost, setSubscriptionCost] = useState(9);

    const handleSalaryChange = (event) => {
        setSalary(event.target.value);
    };

    const handleCostChange = (event) => {
        setSubscriptionCost(event.target.value);
    };

    const percentageCost = (((subscriptionCost * 100) / salary) * 100).toFixed(
        2
    );

    return (
        <div>
            <input
                type="number"
                value={salary}
                onChange={handleSalaryChange}
                placeholder={salary}
            />
            <input
                type="number"
                value={subscriptionCost}
                onChange={handleCostChange}
                placeholder={subscriptionCost}
            />
            <p>Your salary is {salary}</p>
            <p>{percentageCost}%</p>
        </div>
    );
}
