import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SoonName, Container, FormField, InputField, ButtonField, SpanField } from "../../Assets/Style/Login-Registration"
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function Registration() {

    const URL = "http://localhost:5000/sing-up" 

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeat_password, setRepeat_Password] = useState("");
    const [block, setBlock] = useState(false);

    function finish() {

        setBlock(true)
        const obj = {
            email,
            name,
            password,
            repeat_password
        }

        const promise = axios.post(URL, obj);
        promise.then((res) => {
            navigate("/");
        });
        promise.catch((err) => {
            setBlock(false);
            alert(err.message);
            window.location.reload();
        });

    }

    function submit(event) {
        event.preventDefault();
        finish();
    }

    return (
        <Container>

            <SoonName>MyWallet</SoonName>

            <FormField onSubmit={submit}>

                <InputField
                    type="text"
                    placeholder="Nome"
                    onChange={(item) => setName(item.target.value)}
                    disabled={block}
                    required
                />
                <InputField
                    type="email"
                    placeholder="E-mail"
                    onChange={(item) => setEmail(item.target.value)}
                    disabled={block}
                    required
                />
                <InputField
                    type="password"
                    placeholder="Senha"
                    onChange={(item) => setPassword(item.target.value)}
                    disabled={block}
                    required
                />
                <InputField
                    type="password"
                    placeholder="Confirme a senha"
                    onChange={(item) => setRepeat_Password(item.target.value)}
                    disabled={block}
                    required
                />

                <ButtonField type="submit" disabled={block}>
                    {!block ? "Cadastrar" : <ThreeDots color="#FFF" />}
                </ButtonField>

            </FormField>

            <Link to="/">
                <SpanField>J?? tem uma conta? Fa??a login!</SpanField>
            </Link>
        </Container>
    )

}