import React from 'react'
import { Button, Input } from '../Component'
import { Label } from '../Component'
import {UseCostumInputChange} from '../Hooks'
// import {ActionTypes} from '../Hooks'

 
function Login() {

    return (
        <form>
        <Label labelName='Phone NUmber'>{
            // <Input name='phoneNumber' onInputchange={(e: any) => UseCostumInputChange({ type: string , payload: { [e.target.name]: e.target.value } })}/>
        }</Label>
        <Button btnName='Add Phone Number'></Button>
        </form>
    )
}
export default Login



