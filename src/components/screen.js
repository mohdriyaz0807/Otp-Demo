import React,{useRef, useState, useEffect} from 'react'


const Screen = () => {

    const inp=useRef(null)
    
    useEffect(() => {
        inp.current.focus()
    }, [])

    const[count] = useState([false,false,false,true])
    const [Otp,setOtp]=useState([])
    const [correctPin] = useState(['576','1964','15764'])
    const[verify,setverify] = useState(true)

    const handleChange= (event)=>{
        if(!isNaN(event.target.value)){
            if(Otp.length!==4){
        setOtp(Otp=>[...Otp,(event.target.value)])
            }else{
                setOtp(Otp=>[...Otp.map((v,ind)=>event.target.id==ind ? event.target.value : Otp[ind] )])
            }
        if(event.target.nextSibling && event.target.value!==''){
        event.target.nextSibling.focus()
        }
    }if(Otp.length===3){
        setverify(false)
    }
    }
    
    const handleReset=()=>{
        setOtp(Otp=>[...Otp.map((v)=>'')])
        inp.current.focus()
        count.shift()
    }

    const handleSubmit=()=>{
        console.log(Otp)
        if(Otp.includes('') || Otp.length<4){
            alert('Please Enter the OTP pin')
            setOtp(Otp=>[...Otp.map((v)=>'')])
        inp.current.focus()
        }else{
            if(correctPin.includes(Otp.join('')))
            {
                alert('Success, Thank You')
                setOtp(Otp=>[...Otp.map((v)=>'')])
        inp.current.focus()
            }else{
                alert('Plese Enter Valid Pin')
                setOtp(Otp=>[...Otp.map((v)=>'')])
        inp.current.focus()
            }
        }
    }
    const handleKey=(e)=>{
        if(e.key==='Backspace'){
            Otp.splice(e.target.id,1)
            if(e.target.previousSibling){
            e.target.previousSibling.focus()
            }
        }
    }

    return (
        <>
        <div className='input'>
            <input ref={inp} type='text' maxLength='1' id='0' value={Otp[0]}  onKeyDown={handleKey} onChange={handleChange}/>
            <input  type='text' maxLength='1' id='1' value={Otp[1]} onKeyDown={handleKey} onChange={handleChange}/>
            <input  type='text' maxLength='1' id='2' value={Otp[2]} onKeyDown={handleKey} onChange={handleChange}/>
            <input type='text' maxLength='1' id='3' value={Otp[3]} onKeyDown={handleKey} onChange={handleChange}/>
            </div>
            <button className='btn' disabled={verify} type='button' onClick={handleSubmit}>Verify</button>
            <button className='btn2' disabled={count[0]} type='button' onClick={handleReset}>Resend</button>
        </>
    )
}

export default Screen
