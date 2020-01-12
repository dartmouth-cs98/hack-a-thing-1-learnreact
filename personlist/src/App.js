import React, { Component } from 'react';
import './App.css';

const Person=(props) => {
  const {img, name, job} = props.person;
  const {children} = props;
  const url = 'https://randomuser.me/api/portraits/thumb/men/65.jpg';
  var res=url.replace("65",img);
  return (<div className="person">
    <img src={res} alt=""/>
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
        </div>
  </div>);
};


const PersonList=() => {

  const people=[
    {
      img:"22",
      name: "John",
      job: "Developer"
    },
    {
      img:"34",
      name: "Peter",
      job: "Designer"
    },
    {
      img:"56",
      name: "Soomin",
      job: "Singer"
    }
  ];

  return (
    <section>
      <Person person={people[0]}></Person>
      <Person person={people[1]}>Love divine and love excelling</Person>
      <Person person={people[2]}></Person>
      </section>
  );
};

const App = ()=>(<PersonList/>);


export default App;
