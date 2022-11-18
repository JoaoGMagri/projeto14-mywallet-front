import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

import { AuthContext } from "../../Contexts/auth"
import imageExit from "../../Assets/Images/Exit.png"
import entry from "../../Assets/Images/newEntry.png"
import exit from "../../Assets/Images/newExit.png"

export default function Main() {

    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <ContainerMain>
            <Top>
                Olá, Fulano
                <Link to="/">
                    <img src={imageExit} alt="" />
                </Link>
            </Top>

            <Records>
                Não há registros de entrada ou saída
            </Records>

            <ContainerAdd>

                <Link to="/">
                    <Button>
                        <img src={entry} alt="" />
                        <Text>
                            <span>Nova</span>
                            <span>entrada</span>
                        </Text>
                    </Button>
                </Link>
                <Link to="/">
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
    height:446px;

    padding: 23px 12px;
    box-sizing: border-box;

    background-color:#FFFFFF;
    border: 0px solid #FFFFFF;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 10px;
`
const ContainerAdd = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
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
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
`