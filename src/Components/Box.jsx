import React from 'react';



function Box(props) {
  return (
      <>    
        <div className="p-12">
            <div className={`${props.Bg} w-64 h-36 rounded-lg `}>
                <div className="flex items-center justify-center">
                    <h1 className="font-bold text-white p-2">{props.Kind}</h1>
                    <span className="absolute transform translate-y-11">{props.image}</span>
                </div>
                <div className="text-center transform translate-y-14">
                    <span className="text-white font-extrabold">{props.Datas}</span>
                </div>
            </div>    
        </div>
      </>
  )
}

export  {Box};