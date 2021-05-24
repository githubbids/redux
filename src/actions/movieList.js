export function moviesList(id){
    return {
       type:'MOVIES_LIST',
       payload:[
                {id:1,name:'Avengers'},
                {id:2,name:'Jab We Met'},
                {id:3,name:'Death Race'}
       ]
    }
}

// export function moviesList(id){
//     return{
//         type:'MOVIES_LIST',
//         payload:[
//             {id:1,name:'Avengers'},
//             {id:2,name:'Jab We Met'},
//             {id:3,name:'Death Race'}
//         ]
//     }
// }