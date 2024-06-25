import { useContext } from "react"
import { ProcessToSeeContext } from "../../utils/processToSeeContext"

function ProcessView() {
    const {processToSee, setProcessToSee} = useContext(ProcessToSeeContext)
    return(
        <div className={`process-view ${processToSee ? "" : "process-view--vierge"}`}>
            {
                processToSee && <>
                    <div className="process-view__title">
                        {processToSee.process.title}
                    </div>
                    <div className="process-view__image">
                        <img src={`/images/${processToSee.process.image}`} alt="Process SMS Code Request" width={300}/>
                    </div>
                </>
            }
        </div>
    )
}

export default ProcessView