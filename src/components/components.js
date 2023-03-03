import styled from 'styled-Components';



export const Container = styled.div`
background-color: "#ffff";
border-radius: 10px;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
position:relative;
overflow:hidden;
width:678px;
max-width:100%;
min-height:400px;
`;

export const signupcontainer= styled.div`
position:absolute;
top:0;
height:100%;
transition:all 0.6s ease-in-out;
left:0;
width:50%;
opacity:0;
z-index:1;
${props= props.signinIn!== true?`
transform:translateX(100%);
opacity:1;
z-index:5;
`
:null}
`;

export const signincontainer=styled.div`
position:absolute;
top:0;
height:100%;
transition:all ease-in-out;
left:0;
z-index:2;
${props = props.signinIn!==true?
    `transform:translateX(100%)`:null}



`;


export const Form = styled.form`
background:#ffffff;
display:flex;
align-iteams:center;
justify-content:center;
flex-direction:coloumn;
padding:0 50px;
height:100%;
text-align:center;





`;



export const Title=styled.h1`
font-weight:bold;
margin:0;
`;

export const Input=styled.Input`
background-color:#eee;
padding:12px 15px;
margin:8px 0;
width:100%;
`;

export const Button=styled.button`
border-radius:20px;
border:1px solid #ff4b2b;
background-color:#ff4b2b;
color:"#fffff";
font-size:12px;
font-weight:bold;
padding:12px 45px;
letter-spacing:1px;
text-transform:uppercase;
transition:transform 80ms ease-in;
&:active{
    transform:scale(0.95);
} 
&:focus{
    outline:none;
}
`;

export const ghostButton = styled(Button)`
background-color:transparent;
border-color:#ffffff;
`;

export const Anchor = styled.a`
color :#333;
font-size:14px;
text-decoration:none;
margin:15px 0;
`;

export const overlaycontainer =styled.div`
position:absolute;
top:0;
left:50%;
width:50%;
height:100%;
overflow:hidden;
transition:transform 0.6s ease-in-out;
z-index:100;
${props=> props.signinIn!= true? `transform:translateX(-100%);`:null}
`;


export const overlay =styled.div`
background:3ff426c;
background:-webkit-linear-gradient(to right,#ff4b2b,#ff416c);
background:linear-gradient(to right,#ff4b2b,#ff416c);
background-size:cover;
background-position:0 0;
color:#ffffff;
position:relative;
left:-100%;
height:100%;
width:200%;
transform:translateX(0);
transition:transform 0.6s ease-in-out;
${props => props.signinIn!==true?`transform:translateX(50%);`:null}

`;

export const  overlaypanel=styled.div`
position:absolute;
display:flex;
align-iteam:center;
justify-content:center;
flex-decoration:coloumn;
padding:0 40px;
height:100%;
width:50%;
transform:translateX(0);
transition:transform 0.6s ease-in-out

`

export const leftoverlaypanel = styled(overlaypanel)`
transform:translateX(-20%);
${props => props.signinIn!==true?`transform:translateX(0);`:null}
`;


export const rightoverlaypanel=styled(overlaypanel)`
right:0;
transform:translateX(0);
${props => props.signinIn!==true?`transform:translateX(20%);`:null}

`;

export const paragraph =styled.p`
font-size:14px;
font-weight:100;
line-height:20px;
letter-spacing:0.5px;
margin:20px 0 30px
`;