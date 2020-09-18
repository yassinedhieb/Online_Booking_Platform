// import React, { useState } from 'react';
// import MovieCard from './MovieCard';
// import { Form, Col,Row } from 'react-bootstrap';

// const MovieList = (props) => {
//     const [search, setSearch] = useState('')
//     const [star,setStar]=useState(0)
//     const handleSearch = (e) => {
//         e.preventDefault()
//         setSearch(e.target.value)

//     }
//     return (
//     <div >
//         <Row>
//             <Col>
//                 <Form.Control size="lg" type="text" placeholder="Search" width="300px" onInput={handleSearch} />
//             </Col>
//         </Row>
//         <div style={{ display: "flex", justifyContent: "space-around" }}>
//             {props.movie.filter(el => el.titre.toUpperCase().includes(search.toUpperCase())).map(el => <MovieCard titre={el.titre} image={el.image} rate={el.rate} />)}
//         </div>


//     </div>);
// }

// export default MovieList;