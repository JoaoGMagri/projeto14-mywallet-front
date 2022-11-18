import styled from "styled-components";

import { Container } from "../../Assets/Style/Login-Registration";

/* _id: "6377a2962160b10b0c5e0bf0"
      ​
   data: "18/11"
      ​
   description: "Pedro"
      ​
   type: "entry"
      ​
   userId: "637610ab710bcdabc749efad"
      ​
   value: "100" */

export default function ListRecords({ item }) {

    return (

        <ContainerListRecords>
            
            <Start>
                <span>{item.data}</span>
                <div>{item.description}</div>
            </Start>

            <End color={item.type}>{item.value}</End>

        </ContainerListRecords>

    )

}
const ContainerListRecords = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Start = styled.div`
    display:flex;
    padding: 5px;
    
    span{
        margin-right: 10px;
        color: #C6C6C6;
    }
`
const End = styled.div`
    display:flex;
    color: ${props => props.color === "entry" ? "#03AC00" : "#C70000"}
`