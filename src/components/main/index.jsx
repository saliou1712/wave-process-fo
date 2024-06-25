import { useContext, useState, useEffect } from "react";
import { ProcessToSeeContext } from "../../utils/processToSeeContext";
import { List_process } from "../../data/ProcessData";

function Main() {
    const { setProcessToSee } = useContext(ProcessToSeeContext);
    const [FilteredProcess, setFilteredProcess] = useState(List_process);
    const [search, setSearch] = useState("");

    useEffect(() => {
        FilterProcess();
    }, [search]);

    function FilterProcess() {
        if (search === "") {
            setFilteredProcess(List_process);
        } else {
            const Filtered = List_process.filter((f) => f.name.toLowerCase().includes(search.toLowerCase()));
            setFilteredProcess(Filtered);
        }
    }

    return (
        <div className="menu">
            <div className="menu__search">
                <input
                    type="text"
                    placeholder="Rechercher..."
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="menu__container">
                {(FilteredProcess.length > 0 ? FilteredProcess : List_process).map((option) => (
                    <div
                        className="menu__container__option"
                        key={option.name}
                        onClick={() => setProcessToSee(option)}
                    >
                        <div className="menu__container__option__icon">
                            <i className={option.icon}></i>
                        </div>
                        <div className="menu__container__option__name">{option.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;
