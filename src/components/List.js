import React, {useContext} from 'react';
import BirthdayList from './BirthdayList';
import { GlobalContext } from './context';

const List = () => {
    const [people, setPeople] = useContext(GlobalContext)
    
  return (
    <>
        <h2 className='title'>There are {people.length} Birthdays Today</h2>
        {people.map((person, index) => (
            <BirthdayList key={index}
            name={person.name} age={person.age} img={person.img} />
        ))}

        {people.length > 0 && <button className='clear-btn' onClick={() => setPeople([])}>Clear All</button>}
    </>
  )
}

export default List;
