import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { AuthContext } from "../../Contexts/auth"
import imageExit from "../../Assets/Images/Exit.png"
import entry from "../../Assets/Images/newEntry.png"
import exit from "../../Assets/Images/newExit.png"
import ListRecords from "./ListRecords"

export default function Main() {

    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    const [arr, setArr] = useState([])
    const [user, setUser] = useState("OI")
    const [balanceValue, setBalanceValue] = useState("0")

    useEffect(() => {

        const URL = "http://localhost:5000/transfers"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.get(URL, config);
        promise.then((res) => {
            console.log(res);
            setArr(res.data.info);
            setUser(res.data.user);
            status(res.data.info);
        });
        promise.catch((err) => {
            alert(err.response.data.message);
            navigate("/");
            window.location.reload();
        });

    }, [])

    function status(objNum){
        let soma = 0;

        for(let i = 0; i< objNum.length; i++){
            
            if(objNum[i].type === "entry"){
                soma = soma + Number(objNum[i].value);
            } else if(objNum[i].type === "exit") {
                soma = soma - Number(objNum[i].value);
            }
        }
        soma = soma.toFixed(2);

        setBalanceValue(soma)
    }

    function exitAPP() {

        const URL = "http://localhost:5000/go-out"

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.delete(URL, config);

        promise.then((res) => {
            console.log(res);
            navigate("/");
            window.location.reload();
        });
        promise.catch((err) => {
            console.log(err.responde.data);
            navigate("/");
            window.location.reload();
        });

    }

    return (
        <ContainerMain>
            <Top>
                Olá, {user}
                <img src={imageExit} alt="" onClick={exitAPP} />
            </Top>

            <Records>
                {(arr.length === 0) ? (
                    "Não há registros de entrada ou saída"
                ) : (
                    arr.map((item, i) =>
                        <ListRecords
                            item={item}
                            key={item._id}
                        />
                    )
                )}
            </Records>
            <Balance>
                <span>Saldo</span>
                <Value color={balanceValue}>{balanceValue}</Value>
            </Balance>
            <ContainerAdd>

                <Link to="/novaEntrada">
                    <Button>
                        <img src={entry} alt="" />
                        <Text>
                            <span>Nova</span>
                            <span>entrada</span>
                        </Text>
                    </Button>
                </Link>
                <Link to="/novaSaida">
                    <Button>
                        <img src={exit} alt="" />
                        <Text>
                            <span>Nova</span>
                            <span>saida</span>
                        </Text>
                    </Button>
                </Link>

            </ContainerAdd>
        </ContainerMain>
    )

}

const ContainerMain = styled.div`
    padding: 26px;
    box-sizing:border-box;

    display: flex;
    align-items: center;
    flex-direction: column;
`;
const Top = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 23px;
`;
const Records = styled.div`
    width:326px;
    height:380px;

    padding: 23px 12px;
    box-sizing: border-box;

    background-color:#FFFFFF;
    border: 0px solid #FFFFFF;
    border-start-start-radius: 5px;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction:column;
`;
const Balance = styled.div`
    width:326px;
    background-color:#FFFFFF;

    padding: 23px 12px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-end-end-radius: 5px;
    margin-bottom: 10px;
    
    span{
        font-weight: 700;
        font-size: 17px;
    }
`;
const Value = styled.div`
    color: ${props => props.color < 0 ? "#C70000" : "#03AC00"}
`
const ContainerAdd = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Button = styled.div`
    width: 155px;
    height: 114px;

    padding: 10px;
    box-sizing: border-box;

    background-color:red;
    border: 0px solid #FFFFFF;
    border-radius: 5px;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
`;
const Text = styled.div`
    display: flex;
    flex-direction: column;
`;