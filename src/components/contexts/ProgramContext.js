import React, { createContext, useState ,useContext,useEffect} from 'react';
import { getPrograms } from '../../util/APIUtils';
export const ProgramContext = createContext();
export function usePrograms () {
	return useContext(ProgramContext)
  }
export const ProgramProvider = (props) => {
    const [ programs, setPrograms ] = useState([]);
    const [ isLoading, setLoading ] = useState(true);

    const fetchprograms = async () => {
        const res = await  getPrograms()
        const data = res.data
        setPrograms(data)
        setLoading(false)
    }
    useEffect(() => {
    fetchprograms()
    }, [])

	return (
		<ProgramContext.Provider value={{  programs, setPrograms,isLoading,setLoading }}>
			{props.children}
		</ProgramContext.Provider>
	);
};
