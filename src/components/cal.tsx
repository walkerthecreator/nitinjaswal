import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

  export default function BookCall() {

	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"30min"});
		cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])

	return <Cal namespace="30min"
	  calLink="nitinjaswal/30min"
	  style={{width:"100%",height:"100%" , overflow : "scroll"}}
	  config={{"layout":"month_view"}}
	/>;
    
  };
  