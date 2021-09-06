import { useState } from "react";

export default function PercentageCalculatorOne() {
    const [salary, setSalary] = useState(45000);

    const handleSalaryChange = (event) => {
        setSalary(event.target.value);
    };

    const percentageCost = (((12 * 12) / salary) * 100).toFixed(2);

    return (
        <div className="my-8">
            <p>What's your annual salary after taxes?</p>
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
            <p>Copilot costs {percentageCost}% of your annual budget</p>
            <aside>
                Don't worry I'm not storing this data or tracking you. Feel free
                to lie.
            </aside>
        </div>
    );
}
