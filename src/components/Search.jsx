import { Input } from 'antd'
import { useState } from 'react'

function Search({ search }) {

    const [filter, setFilter] = useState('')

    const filterHandler = (e) => {
        setFilter(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        search(filter)

    }

    return (
        <form className="w-50 mx-auto mt-5 mb-3" onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Filtro</label>
                <Input type="text" value={filter} onChange={filterHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <button type="submit" className="btn btn-primary">Filter movies</button>
        </form>
    )
}

export default Search