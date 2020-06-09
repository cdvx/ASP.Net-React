import React, {  useState } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    display: flex;
    padding: 10px 30px;
    flex-direction: column;
    height: 100%;
`

const Input =  styled.input`
    border: none;
    border-bottom: 1px solid #e4e4e4 !important;
    width: -webkit-fill-available;
    margin-left: 10px;
`

const Select = styled.select`
    margin-left: 20px;
`

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin: 10px auto;
    border: 0.45px solid #e4e4e4;
    background: white;
    padding: 1.5rem 2rem;
    position: relative;

`

const Label = styled.label`
color: #101096;
min-width: 20%;
padding-left: 30px;
`

const Button = styled.button`
    height: 30px;
    border: 1px solid #07079e !important;
    position: absolute;
    background: white;
    right: 32px;
    padding: 0.23rem 0.3rem;
    color: #07079e;
    border-radius: 0.23rem;
    &: hover {
        background: blue;
        color: white;
    }
`

const Item = styled.div`

    // border: 0.45px solid #e4e4e4;
    // border-right: ${({borderRight}) => borderRight ? '0.45px solid #e4e4e4' : 'none'};
    // border-left: ${({borderRight}) => borderRight ? 'none' : '0.45px solid #e4e4e4'};
    display: flex;
    // background: white;
    flex-direction: row;
    align-items: center;
    // min-height: 100%;
    width: 80%;
    padding: 0.5rem 2rem;
    // width: ${({width}) => width ? width : '-webkit-fill-available'};
    // text-align
`

const Success = styled.span`
    color: green;
`

const Error = styled.span`
    color: red;
`

const AddEmployee = ({ submit, success, error }) => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [errors, setErrors] = useState('');

    const submitData = () =>{
        if (!name || !title || !type) {
            setErrors('All fields required to add new employee.')
            setTimeout(()=>setErrors(''), 3000);
        } else {
            if (!errors){
                const data = { Name: name, Title: title, EmployeeTypeId: type }
                submit(data)
            }
        }
    }

    return (
        <FormWrapper>
            <h4>Add New Employee</h4>
            {errors && <Error >{errors}</Error>}
            {error && <Error >{error}</Error>}
            {success && <Success>{`User ${name} successfully added.`}</Success>}
            <Item>
                <Label>Name</Label>
                <Input onChange={({ target : { value }})=> setName(value)} />
            </Item>
            <Item>
                <Label>Job Title</Label>
                <Input onChange={({ target : { value }})=> setTitle(value)} />
            </Item>
            <Item>
                <Label>Job Type</Label>
                <Select name="Job Type" onChange={({ target : { value }})=> setType(value)} >
                    <option value={1}>Consultant</option>
                    <option value={2}>Permanent</option>
                </Select>
            </Item>
            <Item><Button onClick={submitData}>Add Employee</Button></Item>
        </FormWrapper>
    );
}

const AddEmployeeView = ({url}) => {
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState(null);


    const submit = (userData) => {
        userData.EmployeeTypeId = Number(userData.EmployeeTypeId)
        fetch( url, {
            method: 'post',
            body: JSON.stringify(userData),
            headers: { 'Content-Type': 'application/json'}

        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            if (data.error){
                setErrors(data.error)
            }
            else {
                setSuccess(true);
            }
        }).catch((e)=>{
            console.log("error here--->", e)
        });
        }
    return (
        <Wrapper>
            {console.log("errors jkfgfgkf--->", errors)}
            <AddEmployee submit={submit} success={success} error={errors} />
        </Wrapper>

    );
}

export default AddEmployeeView;