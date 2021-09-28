import {
    useState
} from "react"

const useInput = (initialValue = '') => {
    const [value, setValue] = useState(initialValue)

    const clear = () => setValue('')
    const onChange = e => setValue(e.target.value)

    return {
        bind: {
            value,
            onChange
        },
        clear,
        value
    }
}

export default useInput