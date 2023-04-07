import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col,Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./Signup.css";
import bot from "../assets/bot.jpg" 


function Signup() {
  const [email,setEmail]= useState('');
  const [name,setName]= useState('');
  const [password,setPassword]= useState('');

  const [image,setImage]= useState('null');
  const [uploadingImg,setUploadingImg]= useState('false');
  const [imagePreview,setImagePreview]= useState('null');
function picsrc(){
  if(image==='null')
  return bot;
  return imagePreview;
}

  function validateImg(e){
    const file=e.target.files[0];
    if(file.size >= 1048576){
      return alert("File size exceeds the limit")
    }else{
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }
 async  function uploadImage(){
    const data=new FormData();
    data.append("file",image);
    data.append('upload_preset','mkbvyd1i');
    try {
      setUploadingImg(true);
      let res= await fetch('https://api.cloudinary.com/v1_1/dnsjltjvo/image/upload',{
      method:'post',
      body:data
    })
    const urlData=await res.json();
    setUploadingImg(false);
    return urlData.url;


  }catch(error){
    setUploadingImg(false);
    console.log(error);
  }
   }
   async function handleSignup(e){
    e.preventDefault();
    if(!image) return alert("Please upload the image")
    const url =await uploadImage(image);
    console.log(url);
  
  }

  return (
    <Container>
      <Row>
        <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column" >
  
      <Form style={{width:'80%',maxWidth:500}} onSubmit={handleSignup}>
        <h1 className='text-center'>Create your account</h1>
        <div className='signup_profile_pic_container'>
          <img className="signup_profile_pic"   src={picsrc()}></img>
           <label className='img-upload' htmlFor='image-upload'>
            <i className="fas fa-plus-circle add-picture-icon"></i>
           </label>
           <input type="file" id="image-upload" hidden accept="image/jpg,image/jpeg, image/png" onChange={validateImg}/>

        </div>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" onChange={e=>setName(e.target.value)} value={name} />
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} value={email}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} value={password}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
         {!uploadingImg? 'Creating your Account...':'Create Account'}
        </Button>
        <div className='py-4'>
          <p className='text-center'>Already have an account ?<Link to="/login">Login</Link></p>
  
        </div>
      </Form>
        </Col>
       <Col md={5} className="signup_bg"></Col>
      </Row>
      </Container>
      );
}

export default Signup