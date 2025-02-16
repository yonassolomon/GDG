import React from "react";
const list=["yonas","nati","biruk"];

function Component(){
    return(
        <div>
        <ol type="A">
            {list.map((lis,index)=>(<li key={index}>{lis}</li>))};
        </ol>
        </div>
    );
}
export default Component;
