import {watch} from 'vue'

export const useWatchCharacters=(value,maxChars=100)=>{
    watch(value,(newValue)=>{
        if(newValue.length>=maxChars)
        {
            alert(`value greater than ${maxChars}`)
        }
    })
}