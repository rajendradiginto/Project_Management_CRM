import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLoginData } from "../data-access/api/auth-api";

const loginHelper = () => {
    const initialState = {
        email: "",
        password: "",
    };
    const [formData, setFormData] = useState(initialState);
    const authStore = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (formData.email === "") {
            alert("Email is required");
        }
        if (formData.password === "") {
            alert("Password is required");
        }
        dispatch(postLoginData(formData));
    };

    return { formData, handleFormChange, handleFormSubmit };

};

export default loginHelper;