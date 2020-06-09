import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import User from '../user.svg';


const Wrapper = styled.div`
    display: flex;
    padding: 10px 30px;
    flex-direction: column;
`

const Search =  styled.input`
    border: 1px solid #e4e4e4;
    width: 59.5%;
    margin: 10px auto;
`

const EmployeesWrapper = styled.div`
    display: flex !important;
    flex-direction: column !important;
    width: 100%;
    height: 100%;
    color: beige;
`

const EmployeeCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 60%;
    margin: 10px auto;
    // padding: 5px 20rem;
    span {
        color: #101096;
        margin: 5px 20px;
    }
`

const Item = styled.div`
    border: 0.45px solid #e4e4e4;
    border-right: ${({borderRight}) => borderRight ? '0.45px solid #e4e4e4' : 'none'};
    border-left: ${({borderRight}) => borderRight ? 'none' : '0.45px solid #e4e4e4'};
    display: flex;
    background: white;
    flex-direction: column;
    min-height: 100%;
    padding-left: 2rem;
    height: 150px;
    width: ${({width}) => width ? width : '-webkit-fill-available'};
    // text-align
`

const EmployeeCard = ({ name, title, employeeType }) => {
    return (
        <EmployeeCardWrapper>
            <Item width={'20%'}>
                <img src={User} alt="user profile image" />
            </Item>
            <Item borderRight>
                <span>
                    <h3>{ name }</h3>
                </span>
                <span>{ title }</span>
                <span>{ employeeType }</span>
            </Item>
        </EmployeeCardWrapper>
    );
}

// const Search = ({})

const Employees = ({url}) => {
    const [data, setData] = useState(null);
    useEffect(() => {
         fetch(url, {method: 'GET'})
         .then(response => response.json())
         .then(data => {
              setData(data)
              console.log('data----->', data)
         }).catch(error=>{
              console.log("error:", error)
         });
    }, [])
    return (
        <Wrapper>
            {/* <Search /> */}
            <EmployeesWrapper>
            {data === null && <span>No emplyess added yet.</span>}
            { data !== null &&
                data.map(employee => (
                    <EmployeeCard key={employee.id} name={employee.name} title={employee.title} employeeType={employee.employeeType.name} />
                    ))
               }
            </EmployeesWrapper>
        </Wrapper>

    );
}

export default Employees;