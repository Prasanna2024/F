import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

function Tanstack1() {
    const queryClient = useQueryClient();

    const getDetails = () => axios.get('http://127.0.0.1:8000/app/notification/').then((res) => res.data.data);

    const Dataquery = useQuery({
        queryKey: ['data'],
        queryFn: getDetails,
        staleTime:1000, // the request will be sent onlny after this staleTime
        // cacheTime : 60 * 1000,           //background fetch  - this will update the data and store in cache based on the time (default time 5mins) update in the UI
        // staletime : 30 * 1000            //during navigation from one component to other and returning to initial component - when the data no need to fetch (in network ) immedialtely then it helps to display the cache (default time 0 )
        // refetchOnMount : false           // only first time during entering the component the data will be fetch then irrespective of number of times you switch to other component the fetch never occurs
        // refetchOnWindowFocus : true      // user data displayed is upto date on UI (default : true)
        // refetchInterval : 5000,                 //Pooling : -  similar to setInterval , refetch data based on specified time
        // refetchIntervalInBackground : true      // refetch data even when browser is not in focus (even when you are on another tab)

    });

    const makeMutation = useMutation({
        mutationFn: (data: any) =>
        axios.post('http://127.0.0.1:8000/app/notification/', data).then(() => {
        }),
        onSuccess: () => {
            console.log('Succeeded!!!');
            queryClient.invalidateQueries({queryKey:['data']});
        },
    });

    if (Dataquery.isLoading) return <h1>Loading......</h1>;
    if (Dataquery.error) return <h1>Error......</h1>;
    console.log(Dataquery.data);

    return (
        <div>
            {Dataquery.data?.map((data: any) => (
                <h1 key={data.id}>{data.name}</h1>
            ))}
            <h1>hi</h1>
            <button
                onClick={() =>
                    makeMutation.mutate({
                        data: {
                            name: 'time',
                            amount: 10,
                            email: 'zero@example.com',
                            date_in: '2023-12-27',
                            date_out: '2024-01-27',
                            interest: 5,
                            requested: false,
                        },
                    })
                }
            >
                add it
            </button>
            <button onClick={()=>Dataquery.refetch() } disabled={makeMutation.isPending}>Button_to_refetch</button>
        </div>
    );
}

export default Tanstack1;
