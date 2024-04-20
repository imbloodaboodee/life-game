import React, { createContext, useState } from 'react';


const UserContext = createContext();
const UserProvider = ({ children }) => {
    
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    const [intelStats] = useState(
    { name: 'Intelligence', progress: 0, color: 'yellow' },
    { name: 'IQ', progress: 80, color: 'red', description: "Your problem solving ability\nNeeded for certain profession" },
    { name: 'EQ', progress: 50, color: 'blue', description: "Your knowledge level\nNeeded for certain professions\nCan help with your relationships" },
    { name: 'Knowledge', progress: 70, color: 'green', description: "Your knowledge level\nNeeded for certain professions\nCan help with your relationships" })


    const[stats] =useState(
    { name: 'Health', progress: 50, color: 'red', description: "Your healthiness level. The lower the stats, the more likely it is to get sick" },
    { name: 'Happiness', progress: 70, color: 'pink', description: "Your happiness level. The lower the stats, the likely it is to get mental illnesses." },
    { name: 'Appearance', progress: 70, color: 'blue', description: "Your looks. The higher it is, the more it would help with your relationships" },)

    return (
        <UserContext.Provider value={{ name, setName, gender, setGender,intelStats,stats}}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
