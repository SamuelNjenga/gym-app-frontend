import React, { createContext, useState ,useContext,useEffect} from 'react';
import { getRooms } from '../../util/APIUtils';
export const RoomContext = createContext();
export function useRooms () {
	return useContext(RoomContext)
  }
export const RoomProvider = (props) => {
    const [ rooms, setRooms ] = useState([]);
    const [ isLoading, setLoading ] = useState(true);

        const fetchRooms = async () => {
            const res = await  getRooms()
            const data = res.data
            setRooms(data)
            setLoading(false)
        }
        useEffect(() => {
        fetchRooms()
        }, [])

	return (
		<RoomContext.Provider value={{  rooms, setRooms,isLoading,setLoading }}>
			{props.children}
		</RoomContext.Provider>
	);
};
