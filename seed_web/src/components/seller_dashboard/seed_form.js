"use client";
import { useState } from 'react';

const SeedForm = () => {
    const [seedType, setSeedType] = useState('');
    const [amount, setAmount] = useState('');
    const [contactDetails, setContactDetails] = useState('');
    const [location, setLocation] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const formData = {seedType, amount, contactDetails, location};

        const response = await fetch('/api/SeedItems', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'content-type': 'application/json' }
        })
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="seedType">Seed Type:</label>
            <select id="seedType" value={seedType} onChange={(e) => setSeedType(e.target.value)} required>
                <option value="">Select Type</option>
                <option value="pumpkin seeds">pumpkin seeds</option>
                <option value="chia seeds">chia seeds</option>
                <option value="cabbage seeds">cabbage seeds</option>
            </select>

            <label htmlFor="amount">Amount:</label>
            <input type="text" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />

            <label htmlFor="pricePerUnit">Contact details:</label>
            <input type="text" id="Contact details" value={contactDetails} onChange={(e) => setContactDetails(e.target.value)} required />

            <label htmlFor='location'>Location:</label>
            <input type='text' id='location' value={location} onChange={(e) => setLocation(e.target.value)} required/>

            <button type="submit">Submit</button>
        </form>
    );
};

export default SeedForm;
