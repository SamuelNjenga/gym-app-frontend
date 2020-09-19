import React, { createContext, useState ,useContext,useEffect} from 'react';
import { getSessions } from '../../util/APIUtils';
export const SessionContext = createContext();
export function useSessions () {
	return useContext(SessionContext)
  }
export const SessionProvider = (props) => {
    const [ sessions, setSessions ] = useState([]);
    const [ isLoading, setLoading ] = useState(true);

    const fetchSessions = async () => {
		const res = await  getSessions()
		const data = res.data
		setSessions(data)
		setLoading(false)
	}
	useEffect(() => {
	fetchSessions()
	}, [])

	return (
		<SessionContext.Provider value={{  sessions, setSessions,isLoading,setLoading }}>
			{props.children}
		</SessionContext.Provider>
	);
};
