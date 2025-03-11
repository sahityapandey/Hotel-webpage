import React from "react";
import '../styles/aboutus.css';

function About(){
    return(
        <div >
        
       <div className="about">
        <h1>About Us</h1>
        <p>The Taj Mahal Palace Hotel, commonly known as the Taj Hotel, is a luxury hotel located in Mumbai, India. Opened in 1903, 
            it is an iconic symbol of Indian hospitality and colonial-era architecture, blending Islamic and Renaissance styles. Overlooking 
            the Arabian Sea, the hotel is known for its grandeur, opulent interiors, and world-class service. It gained global attention after 
            being targeted in the 2008 Mumbai terrorist attacks, but has since been restored. 
            The Taj Hotel remains a major landmark in Mumbai and a flagship of the Taj Hotels chain, which is part of the Tata Group.
            </p>
       </div>   
       <div className="image-section">
            <img src="taj1.jpeg" className="taj1"/>
            <img src="lobby.jpg" className="lobby"/>
            <img src="caption.jpg" className="caption"/>
            <img src="interior.jpg" className="interior"/>
        </div> 
        <div className="team">
            <div className="members">
                <img src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=" className="member-img"/>
                <h2>Sahitya Pandey</h2>
                <p className="dev">Full stack developer</p>
                <a href="" className="linkedin"> View LinkedIn</a>
            </div>
            <div className="members">
            <img src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=" className="member-img"/>
                <h2>Aditya Kumar</h2>
                <p className="dev">Full stack developer</p>
                <a href="" className="linkedin"> View LinkedIn</a>
            </div>
            <div className="members">
            <img src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=" className="member-img"/>
                <h2>Shivam Kumar Mahto</h2>
                <p className="dev">Full stack developer</p>
                <a href="" className="linkedin"> View LinkedIn</a>
            </div>
            <div className="members">
            <img src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=" className="member-img"/>
                <h2>Vikas Yadav</h2>
                <p className="dev">Full stack developer</p>
                <a href=""className="linkedin"> View LinkedIn</a>
            </div>
        </div><br/><br/>
        </div>
         
    )
}

export default About;