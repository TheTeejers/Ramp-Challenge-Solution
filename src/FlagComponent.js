import React, { useEffect, useState } from 'react';

const FlagComponent = () => {
    const [flag, setFlag] = useState('');
    const [lettersArray, setLettersArray] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFlag = async () => {
            try {
                const response = await fetch('https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/677261');
                const data = await response.text();
                console.log('Fetched data:', data); // Log fetched data
                setFlag(data.trim()); // Set the flag
                setLoading(false);
            } catch (error) {
                console.error('Error fetching the flag:', error);
            }
        };

        fetchFlag();
    }, [], 500);

    useEffect(() => {
        if (!loading && flag.length > 0) {
            let index = 0;

            const interval = setInterval(() => {
                if (index < flag.length) {
                    let letter = flag[index]
                    setLettersArray((prev) => [...prev, letter]);
                        index++;
                }
                if (index >= flag.length) {
                    clearInterval(interval);
                }
            }, 500);
        }
    }, [loading, flag]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ul>
                {lettersArray.map((char, index) => (
                    <li key={index}>{char}</li>
                ))}
            </ul>
        </div>
    );
};

export default FlagComponent;

