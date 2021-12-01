import React, { useState, useEffect } from 'react';
import UnivItem from './UnivItem';

const Univs = () => {
    const [Univs, setUnivs] = useState([]);
    const [text, setText] = useState('')


    useEffect(() => {

        // hit endpoint
        fetch('http://universities.hipolabs.com/search?country=United+States')
            .then(response => response.json())
            .then(data => setUnivs(data));




        // eslint-disable-next-line
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // hit endpoint untuk cari univ
        fetch(`http://universities.hipolabs.com/search?name=${text}&country=`)
            .then(response => response.json())
            .then(data => setUnivs(data));

        setText('');
    }

    const handleChange = (e) => { setText(e.target.value) };
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <h2>Search univ</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control" onChange={handleChange} value={text} />
                </form>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-5">

                    {Univs.map(univ => <UnivItem key={univ.name} univ={univ} />)}


                </div>
            </div>
        </section>
    );
}

export default Univs;