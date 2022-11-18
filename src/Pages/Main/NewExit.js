import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import { FormField, InputField, ButtonField } from "../../Assets/Style/Login-Registration"
import { AuthContext } from "../../Contexts/auth"

export default function NewExit() {

    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const [block, setBlock] = useState(false);

    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    function finish() {

        setBlock(true);
        const URL = "http://localhost:5000/transfers"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const obj = {
            type: "exit",
            value,
            description,
        }

        const promise = axios.post(URL, obj, config);
        promise.then((res) => {
            navigate("/main");
        });

        promise.catch((err) => {
            setBlock(false);
            alert(err.response.data.message);
            window.location.reload();
        });

    }

    function submit(event) {
        event.preventDefault();
        finish();
    }

    return (
        <ContainerExit>
            <Title>Nova saída</Title>

            <FormField onSubmit={submit}>
                <InputField
                    type="number"
                    placeholder="Valor"
                    onChange={(item) => setValue(item.target.value)}
                    required
                />
                <InputField
                    type="text"
                    placeholder="Descrição"
                    onChange={(item) => setDescription(item.target.value)}
                    required
                />
                <ButtonField type="submit">
                    {!block ? "Salva saída" : <ThreeDots color="#FFF" />}
                </ButtonField>
                <Link to="/main">
                    <ButtonField type="submit">Cancelar</ButtonField>
                </Link>
            </FormField>
        </ContainerExit>
    )

}

const ContainerExit = styled.div`
    padding: 26px;
    box-sizing:border-box;

    display: flex;
    align-items: center;
    flex-direction: column;
`;
const Title = styled.div`
    width: 95%;
    display: flex;
    justify-content: flex-start;
    
    margin-bottom: 40px;

    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: #FFF;
`;