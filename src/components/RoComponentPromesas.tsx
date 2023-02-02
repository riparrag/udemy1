import React, { useEffect, useState } from 'react'

const RoComponentPromesas = () => {

    const [first, setfirst] = useState(true);

    const handleOnClick = () => {
        console.log('clic');
        setfirst(!first);
    }

    const roResolve = (value: any) => {
        console.log('ro resolve',value);
    }

    const roReject = (reason: any) => {
        console.log('ro reject',reason);
    }

    useEffect(() => {
        new Promise((resolve, reject) => {
            if (first) {
                resolve({algo:true});
            }
            else {
                reject({algo:false});
            }
        }).then( roResolve )
          .catch( roReject );
    }, [first]);

    const getPokeApi = () => {
        console.log('*** fetch sin async----------------------------')
        const requestPromise = fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        return requestPromise;
    }

    const getPokeApiAsync = async() => {
        console.log('*** async----------------------------')
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        const data = await response.json();
        console.log('*** async',data);
        return data;
    }

    useEffect(() => {
        const requestPromise = getPokeApi();
        requestPromise.then( response => response.json() )
                        .then( data => console.log('data', data) )
                        .catch( console.warn )
                      .catch( console.warn )
        /*.then( response => {
            console.log( response );
            response.json().then( console.log )
                           .catch( console.warn );
        })*/
        const promise = getPokeApiAsync();
        console.log('async pokeapi', promise);
        promise.then( data => console.log('async pokeapi promise',data) )
    }, [first])

    return (
        <>
            RoComponentPromesas
            <br/>
            <button onClick={handleOnClick} >clic</button>
            <br/>
            
            <div>
            {''+first}
            </div>
        </>
    )
}
export default RoComponentPromesas;
