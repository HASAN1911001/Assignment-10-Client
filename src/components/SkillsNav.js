import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const SkillsNav = () => {

    const [categories, setCategories] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data.data))
    }, [])

    return(
        <div>
            <h4>Courses:</h4>
            <div>
                {
                    categories.map(category => <p key = {category.id}>
                        <Link to={`/quiz/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>  
     );
};

export default SkillsNav;