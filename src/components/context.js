import React, {useState, createContext} from 'react';

export const GlobalContext = createContext();

export const ContextProvider = (props) => {
    const [people, setPeople] = useState([
        {
            id: 1,
            name: 'Lexo Marley ',
            age: 29,
            img: 'https://picsum.photos/id/1036/100/100'
        },
        {
            id: 2,
            name: 'Chief Iyke',
            age: 26,
            img: 'https://picsum.photos/id/1/100/100'
        },
        {
            id: 3,
            name: 'Sleeky Pam',
            age: 28,
            img: 'https://picsum.photos/id/1038/100/100'
        },
        {
            id: 4,
            name: ' Baba Tije',
            age: 26,
            img: 'https://picsum.photos/id/1037/100/100'
        },
        {
            id: 5,
            name: 'Pammy Baby',
            age: 28,
            img: 'https://picsum.photos/id/1039/100/100'
        }
    ]);
    
    
    
  return (
    <GlobalContext.Provider value={[people, setPeople]}>
        {props.children}
    </GlobalContext.Provider>
  )
}

