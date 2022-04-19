import "../../Styles/Home.css";
 import bann from "../../images/bann.png";
 import reactmama from "../../images/react.png";
 import mongodaba from "../../images/mangadaba.jpeg";
 import aspnet from "../../images/aspnet.png";
 import React from "react";
 import { useNavigate } from "react-router-dom";
 import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

 const Home = () => {
   const navigate = useNavigate();
   return (
     <div className="container">
       <div >
         <div className="banner">
           <img className="img-fluid" src={bann} alt=""></img>
           <div>
             <h1
               className="fw-bold fs-2 text-center"
               style={{ color: "darkblue" }}
             >
               Welcome To Vertual Tutor
             </h1>
             <p className="fs-5 text-right">
               {" "}
               “The real key to learning something quickly is to take a
               deliberate, intelligent approach to your learning.”
             </p>
           </div>
         </div>
       </div>

       <h1 className="Service-header">My Services</h1>
       <div className="grid-container container-fluid">
         {/* card 1 */}
         {/* <div className="Row"> */}
         <div>
           <Card style={{ width: "18rem" }}>
             <Card.Img variant="top" src={reactmama} />
             <Card.Body>
               <Card.Title>React.js</Card.Title>
               <Card.Text>
                 React is now a most popular Framwork. You can learn the it in
                 the most easist way
               </Card.Text>
             </Card.Body>
             <ListGroup className="list-group-flush">
               <ListGroupItem>
                 <span>Course Duration:</span> 29 Classes
               </ListGroupItem>
               <ListGroupItem>
                 <span>Price:</span> 4.500 tk
               </ListGroupItem>
             </ListGroup>
             <Card.Body>
               <div className="d-flex justify-content-center">
                 <button
                   className="btn btn-danger  "
                   onClick={() => navigate("/checkout")}
                 >
                   CheckOut Now
                 </button>
               </div>
             </Card.Body>
           </Card>
         </div>
         {/* card 2 */}
         <div>
           <Card style={{ width: "18rem" }}>
             <Card.Img variant="top" src={mongodaba} />
             <Card.Body>
               <Card.Title>Mongo DB</Card.Title>
               <Card.Text>
                 Mongo DB is the most populer database and high in demand.
               </Card.Text>
             </Card.Body>
             <ListGroup className="list-group-flush">
               <ListGroupItem>
                 <span>Course Duration:</span> 25 Classes
               </ListGroupItem>
               <ListGroupItem>
                 <span>Price:</span> 3,000 tk
               </ListGroupItem>
             </ListGroup>
             <Card.Body>
               <div className="d-flex justify-content-center">
                 <button
                   className="btn btn-danger  "
                   onClick={() => navigate("/checkout")}
                 >
                   CheckOut Now
                 </button>
               </div>
             </Card.Body>
           </Card>
         </div>
         {/* card 3 */}
         <div>
           <Card style={{ width: "18rem" }}>
             <Card.Img variant="top" src={aspnet} />
             <Card.Body>
               <Card.Title>Asp.Net</Card.Title>
               <Card.Text>
                 Asp.Net is the most popular Framwork for the Developer and
                 demandable
               </Card.Text>
             </Card.Body>
             <ListGroup className="list-group-flush">
               <ListGroupItem>
                 <span>Course Duration:</span> 50 Classes
               </ListGroupItem>
               <ListGroupItem>
                 <span>Price:</span> 20,000 tk
               </ListGroupItem>
             </ListGroup>
             <Card.Body>
               <div className="d-flex justify-content-center">
                 <button
                   className="btn btn-danger  "
                   onClick={() => navigate("/checkout")}
                 >
                   CheckOut Now
                 </button>
               </div>
             </Card.Body>
           </Card>
         </div>
         {/* </div> */}
       </div>

       <div></div>
     </div>
   );
 };

export default Home;
