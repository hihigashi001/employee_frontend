// Library
import { useState, useEffect, ReactElement } from "react";
import { TableInstance } from "react-table";
// components
import { FilterButton } from "src/components/shared/Table/FilterButton";


type StatusFilterType = {
    statuses: Status;
    defaultValue?: string;
};

type Status = {
    [label: string]: string;
}

type Props<T extends object> = {
    statusFilter: StatusFilterType;
    instance: TableInstance<T>;
    data: T[];
};

type StatusFilterComponent = <T extends object>(props: Props<T>) => ReactElement<Props<T>>;

export const StatusFilter: StatusFilterComponent = ({ statusFilter, instance, data }) => {
    const [filteredStatus, setFilteredStatus] = useState(statusFilter.defaultValue ? statusFilter.defaultValue : "");
    const { setFilter } = instance;

    const filteredStatusHandler = {
        setConditionFilter: (value: string) => {
            if (value == "在職") {
                setFilter("status", value);
                setFilteredStatus(value);
            } 
            if ( value == "退職" ) {
                setFilter("status", value);
                setFilteredStatus(value);
            }
            if ( value == "休職" ) {
                setFilter("status", value);
                setFilteredStatus(value);
            }
        },
        resetConditionFilter: () => {
            setFilter("status", null);
            setFilteredStatus("");
        },
    };

    useEffect(() => {
        statusFilter.defaultValue ? filteredStatusHandler.setConditionFilter(statusFilter.defaultValue) : null;
    }, [data]);

    return (
        <div className="inline-flex items-center flex-wrap py-2">
            <div className="flex-nowrap font-normal">状態:</div>
            <div className="inline-block">
                {Object.entries(statusFilter.statuses).map(([label, value], i) => (
                    <FilterButton
                        key={i}
                        label={label}
                        statusKey={value}
                        selectedStatus={filteredStatus}
                        handleClick={() => filteredStatusHandler.setConditionFilter(value)}
                    />
                ))}
                <FilterButton
                    label="全て"
                    statusKey=""
                    selectedStatus={filteredStatus}
                    handleClick={() => filteredStatusHandler.resetConditionFilter()}
                />
            </div>
        </div>
    );
};
