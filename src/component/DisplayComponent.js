import React from 'react'

const DisplayComponent = (props) =>{
    console.log(props)
    const renderMovies = ({dataList}) =>{
        if(dataList){
            return dataList.map((item) => {
                return(
                    <div key={item.id}>
                        {item.name}
                    </div>
                )
            })
        }
    }
    return(
        <div>
            {renderMovies(props)}
        </div>
    ) 
}

export default DisplayComponent