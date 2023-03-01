import { Input } from "antd"
import { useState } from "react"

function AddFoodForm({ addFood }) {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState('')
    const [servings, setServings] = useState('')

    const nameHandler = (e) => setName(e.target.value)
    const imageHandler = (e) => setImage(e.target.value)
    const caloriesHandler = (e) => setCalories(e.target.value)
    const servingsHandler = (e) => setServings(e.target.value)
    const submitHandler = (e) => {
        e.preventDefault()
        console.log({ name, image, calories, servings })
        addFood({ name, image, calories, servings })
        // setName('')
        // setImage('')
        // setCalories('')
        // setServings('')
    }



    return (
        <form onSubmit={submitHandler}>
            <div className="w-50 mx-auto mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Name</label>
                <Input type="text" value={name} onChange={nameHandler} className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="w-50 mx-auto mb-3">
                <label htmlFor="exampleInputPassword1" className="htmlForm-label">Image</label>
                <Input type="text" value={image} onChange={imageHandler} className="htmlForm-control" id="exampleInputPassword1" />
            </div>
            <div className="w-50 mx-auto mb-3">
                <label htmlFor="exampleInputPassword2" className="htmlForm-label">Calories</label>
                <Input type="number" value={calories} onChange={caloriesHandler} className="htmlForm-control" id="exampleInputPassword2" />
            </div>
            <div className="w-50 mx-auto mb-3">
                <label htmlFor="exampleInputPassword3" className="htmlForm-label">Servings</label>
                <Input type="number" value={servings} onChange={servingsHandler} className="htmlForm-control" id="exampleInputPassword3" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default AddFoodForm