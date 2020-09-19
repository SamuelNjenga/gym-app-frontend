import React, { createContext, useState ,useContext,useEffect} from 'react';
import { getTrainers } from '../../util/APIUtils';
export const TrainerContext = createContext();
export function useTrainers () {
	return useContext(TrainerContext)
  }
export const TrainerProvider = (props) => {
    const [ trainers, setTrainers ] = useState([]);
    const [ isLoading, setLoading ] = useState(true);

    const fetchTrainers = async () => {
		const res = await  getTrainers()
		const data = res.data
		setTrainers(data)
		setLoading(false)
	}
	useEffect(() => {
	fetchTrainers()
	}, [])


	return (
		<TrainerContext.Provider value={{  trainers, setTrainers,isLoading,setLoading }}>
			{props.children}
		</TrainerContext.Provider>
	);
};
