import React from 'react'

const Division = (props) => {
    const arr = props.data
    const div = arr.map((n,i) => { 
        if(n%2==0){
            return <div key={i} className="col-md-3 division">{n*2}</div>
        }
    })
    return(
        <>
            {div}
        </>
    )
}

export default Division;