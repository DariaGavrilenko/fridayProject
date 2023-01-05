import SuperButton from "../Button/SuperButton"
import SuperCheckbox from "../Checkbox/SuperCheckbox"
import SuperInputText from "../Input/SuperInput"

export const Test =()=>{
    return(
        <div>
            <SuperButton xType={'secondary'} >Button</SuperButton>
            <SuperCheckbox/>
            <SuperInputText/>
        </div>
    )
}