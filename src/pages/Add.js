import { useState } from "react"
import { useDispatch } from "react-redux";
import { addNewUser } from "../redux/slice/user";
import { useNavigate } from "react-router";

function Add() {
    const [inputValue, setInputValue] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function getInput(name, value) {
        setInputValue({
            ...inputValue,
            [name]: value
        });
    };

    function addFunction() {
        dispatch(addNewUser(inputValue));
        navigate('/');
    }

    return (
        <main className="m-auto vh-100 d-flex align-items-center justify-content-center">
            <form className="text-center d-flex flex-column gap-3">
                <h1 className="h3 mb-5 fw-normal">Add a new product</h1>
                <div className="form-floating">
                    <input onChange={(e) => getInput(e.target.name, e.target.value)} name="name" type="text" className="form-control" id="floatingInput" placeholder="Product name" />
                    <label htmlFor="floatingInput">Product name</label>
                </div>
                <div className="form-floating">
                    <input onChange={(e) => getInput(e.target.name, e.target.value)} name="about" type="text" className="form-control" id="floatingInput" placeholder="Product name" />
                    <label htmlFor="floatingInput">Product about</label>
                </div>
                <div className="d-flex gap-4">
                    <div className="form-floating">
                        <input onChange={(e) => getInput(e.target.name, e.target.value)} name="price" type="number" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Price</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={(e) => getInput(e.target.name, e.target.value)} name="discount" type="number" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Discount</label>
                    </div>
                </div>
                <div className="form-floating">
                    <input onChange={(e) => getInput(e.target.name, e.target.value)} name="img" type="text" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Product image</label>
                </div>
                <button onClick={addFunction} className="btn btn-primary w-100 py-3 mt-5" type="button">Add</button>
            </form>
        </main>
    )
}

export default Add